import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
// import AntIcons from "@expo/vector-icons/AntDesign";
import AntIcons from 'react-native-vector-icons/AntDesign';
// import FontIcons from "@expo/vector-icons/FontAwesome5";
import FontIcons from 'react-native-vector-icons/FontAwesome5';
// import FeatIcons from "@expo/vector-icons/Feather";
import FeatIcons from 'react-native-vector-icons/Feather';

const Keypad = ({type, cancel, equals, dark}) => {
  return (
    <View
      style={[
        styles.keypad,
        {backgroundColor: dark ? '#090909FF' : '#f4f4f4'},
      ]}>
      <View
        style={[styles.numPad, {backgroundColor: dark ? '#1B1B1B' : '#fff'}]}>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('.')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            .
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('0')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => cancel('short-press')}
          onLongPress={() => cancel('long-press')}
          style={[dark ? styles.numdark : styles.num]}>
          <FeatIcons name="delete" size={30} color={dark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('7')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('8')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('9')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            9
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('4')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('5')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('6')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            6
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('1')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('2')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => type('3')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => cancel('long-press')}
          style={[dark ? styles.numdark : styles.num]}>
          <Text
            selectable={false}
            style={[dark ? styles.numTextDark : styles.numText]}>
            C
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => equals('equals')}
          style={[dark ? styles.equalsDark : styles.equals]}>
          <FontIcons
            name="equals"
            size={30}
            color={dark ? '#fff' : '#3B14FFFf'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.operaPad,
          {backgroundColor: dark ? '#090909FF' : '#f4f4f4'},
        ]}>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => {
            type('/');
          }}
          style={[styles.opera]}>
          <FeatIcons name="divide" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => {
            type('*');
          }}
          style={[styles.opera]}>
          <FeatIcons name="x" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => {
            type('-');
          }}
          style={[styles.opera]}>
          <FeatIcons name="minus" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => null}
          onPressIn={() => {
            type('+');
          }}
          style={[styles.operaExclusive]}>
          <AntIcons name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  keypad: {
    flex: 7,
    width: '95%',
    flexDirection: 'row',
    borderRadius: 10,
  },
  numPad: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  num: {
    height: '15%',
    width: '28%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numdark: {
    height: '15%',
    width: '28%',
    backgroundColor: '#1B1B1B',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  equals: {
    height: '15%',
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3b14ffff',
    borderWidth: 1,
  },
  equalsDark: {
    height: '15%',
    width: '60%',
    backgroundColor: '#3b14ffff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  numTextDark: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  operaPad: {
    flex: 1,
    backgroundColor: '#090909FF',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  opera: {
    height: '15.5%',
    width: '70%',
    backgroundColor: '#3B14FFFf',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  operaDark: {
    height: '15.5%',
    width: '85%',
    backgroundColor: '#090909FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  operaExclusive: {
    height: '35%',
    width: '70%',
    backgroundColor: '#3B14FFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  operaExclusiveDark: {
    height: '35%',
    width: '85%',
    backgroundColor: '#090909FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
