import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, StatusBar, Text, View, useColorScheme} from 'react-native';
import React, {useState, useEffect, useReducer} from 'react';
import {useSharedValue} from 'react-native-reanimated';
// import * as NavigationBar from "expo-navigation-bar";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Display from './components/Display';
import Keypad from './components/Keypad';
import Switch from './components/Switch';

// const theme = {
//   ...DefaultTheme,
//   colors:{
//     ...DefaultTheme.colors,
//     border: "transparent",
//   }
// }

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const darkMode = useColorScheme() === 'dark';
  const [dark, toggle] = useReducer(s => !s, darkMode);
  const [current, setCurrent] = useState(true);
  const SDD = useSharedValue({
    scale: 0,
    height: 0,
    display: 'none',
    translate: 0,
    marginHorizontal: 0,
  });
  const color = useSharedValue('#000');
  const fcolor = useSharedValue('#000');

  // displays
  const reduc = (state, value) => {
    if (value) {
      state = value;
    }
    return state;
  };
  const [dis, setDis] = useReducer(reduc, {f: '', s: ''});

  //set nav bar
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(
      dark ? '#000' : '#fff',
      dark ? true : false,
    );
  }, [dark]);

  // empty second display
  useEffect(() => {
    if (dis.s == '') {
      setCurrent(true);
      SDD.value = {
        scale: 0,
        height: 0,
        display: 'none',
        translate: 0,
        marginHorizontal: 0,
      };
    }
  }, [dis.s]);

  //type
  const type = async value => {
    if (current) {
      if (value == '.' && dis.f == '') {
        setDis({f: '0' + value, s: dis.s});
      } else if (dis.f == 'Syntax Error!') {
        fcolor.value = dark ? '#3E3BFFFF' : '#000';
        setDis({f: value, s: dis.s});
      } else {
        setDis({f: dis.f + value, s: dis.s});
      }
    } else {
      color.value = dark ? '#3E3BFFFF' : '#000';
      if (value == '.' && dis.s == '') {
        setDis({f: dis.f, s: '0' + value});
      } else {
        setDis({f: dis.f, s: dis.s + value});
      }
    }
  };

  //cancel
  const cancel = value => {
    if (value == 'short-press') {
      if (current) {
        if (dis.f == 'Syntax Error!') {
          fcolor.value = dark ? '#3E3BFFFF' : '#000';
          SDD.value = {
            scale: 0,
            height: 0,
            display: 'none',
            translate: 0,
            marginHorizontal: 0,
          };
          setDis({f: '', s: ''});
          setCurrent(true);
        } else {
          setDis({f: dis.f.slice(0, -1), s: dis.s});
        }
      } else if (dis.s == '') {
        SDD.value = {
          scale: 0,
          height: 0,
          display: 'none',
          translate: 0,
          marginHorizontal: 0,
        };
        setDis({f: dis.f.slice(0, -1), s: dis.s});
        setCurrent(true);
      } else {
        color.value = dark ? '#3E3BFFFF' : '#000';
        setDis({f: dis.f, s: dis.s.slice(0, -1)});
      }
    } else if (value == 'long-press') {
      SDD.value = {
        scale: 0,
        height: 0,
        display: 'none',
        translate: 0,
        marginHorizontal: 0,
      };
      fcolor.value = dark ? '#3E3BFFFF' : '#000';
      color.value = dark ? '#3E3BFFFF' : '#000';
      setDis({f: '', s: ''});
      setCurrent(true);
    }
  };

  //equals
  const Syn = 'Syntax Error!';
  const convert = fn => {
    try {
      return new Function('return ' + fn)();
    } catch {
      return Syn;
    }
  };
  const equals = () => {
    if (convert(dis.f) == Syn) {
      fcolor.value = '#FF0000';
      setDis({f: Syn, s: ''});
      setCurrent(true);
      SDD.value = {
        scale: 0,
        height: 0,
        display: 'none',
        translate: 0,
        marginHorizontal: 0,
      };
    } else if (current) {
      if (dis.f != '') {
        SDD.value = {
          scale: 1,
          height: 60,
          display: 'flex',
          translate: 60,
          marginHorizontal: 10,
        };
        setDis({f: dis.f, s: JSON.stringify(convert(dis.f))});
        color.value = '#3E3BFFFF';
        setCurrent(false);
      }
    } else {
      color.value = '#3E3BFFFF';
      if (convert(dis.s) == Syn) {
        fcolor.value = '#FF0000';
        SDD.value = {
          scale: 0,
          height: 0,
          display: 'none',
          translate: 0,
          marginHorizontal: 0,
        };
        setDis({f: Syn, s: ''});
        setCurrent(true);
      } else {
        setDis({f: dis.s, s: JSON.stringify(convert(dis.s))});
      }
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: dark ? '#090909FF' : '#f4f4f4'},
      ]}>
      <StatusBar
        barStyle={dark ? 'light' : 'dark'}
        backgroundColor={dark ? '#090909FF' : '#f4f4f4'}
        translucent={false}
      />
      <Switch dark={dark} toggle={toggle} />
      <Display
        color={color}
        fcolor={fcolor}
        sdd={SDD}
        displays={dis}
        dark={dark}
      />
      <Keypad type={type} cancel={cancel} equals={equals} dark={dark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
