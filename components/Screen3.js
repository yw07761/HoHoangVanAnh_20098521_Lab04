import React, { useState } from "react";
import { View, Text, TextInput, CheckBox, StyleSheet, TouchableOpacity } from "react-native";

// Khai báo các ký tự có thể sử dụng để tạo mật khẩu
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const specialSymbol = '`~!@#$%^&*()_+-={}[]\\|;:,.<>/?';

export default function Screen3() {
// Sử dụng hook useState để lưu trạng thái của các biến
  const [generatedString, setGeneratedString] = useState('');
  const [length, setLength] = useState('');
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecialSymbol, setIsSpecialSymbol] = useState(false);
  // Hàm kiểm tra và xử lý nhập số cho độ dài mật khẩu
  const checkNumberInput = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, ''); // Lọc ra chữ số
    setLength(cleanedText);
  }
  // Hàm xử lý khi người dùng ấn nút "Generate Password"
  const handleGenerate = () => {
    let string = '';
    let generateString = '';

    if (!(length > 0 && length < 21)) {
      alert('Invalid length of password, length of password: [1-20]');
    } else if (!(isLowerCase || isNumber || isUpperCase || isSpecialSymbol)) {
      alert('Please pick at least one selection');
    } else {
      if (isLowerCase) {
        string += lowerCase;
        generateString += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      }
      if (isUpperCase) {
        string += upperCase;
        generateString += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      }
      if (isNumber) {
        string += number;
        generateString += number.charAt(Math.floor(Math.random() * number.length));
      }
      if (isSpecialSymbol) {
        string += specialSymbol;
        generateString += specialSymbol.charAt(Math.floor(Math.random() * specialSymbol.length));
      }

      if (length < generateString.length) {
        alert(`Length of password must be greater than ${generateString.length}`);
        setLength(generateString.length.toString());
      } else {
        while (generateString.length < length) {
          generateString += string.charAt(Math.floor(Math.random() * string.length));
        }
        setGeneratedString(generateString);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <View style={styles.bodyWrapper}>
          <View style={styles.passwordWrapper}>
            <Text style={styles.password}>{generatedString}</Text>
          </View>
          <View style={styles.conditionWrapper}>
            <Text style={styles.conditionTxt}>Password length</Text>
            <TextInput
              style={styles.lengthInput}
              value={length}
              onChangeText={checkNumberInput}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.conditionWrapper}>
            <Text style={styles.conditionTxt}>Include lowercase letters</Text>
            <CheckBox
              style={styles.conditionCheckbox}
              value={isLowerCase}
              onValueChange={setIsLowerCase}
            />
          </View>
          <View style={styles.conditionWrapper}>
            <Text style={styles.conditionTxt}>Include uppercase letters</Text>
            <CheckBox
              style={styles.conditionCheckbox}
              value={isUpperCase}
              onValueChange={setIsUpperCase}
            />
          </View>
          <View style={styles.conditionWrapper}>
            <Text style={styles.conditionTxt}>Include numbers</Text>
            <CheckBox
              style={styles.conditionCheckbox}
              value={isNumber}
              onValueChange={setIsNumber}
            />
          </View>
          <View style={styles.conditionWrapper}>
            <Text style={styles.conditionTxt}>Include special symbols</Text>
            <CheckBox
              style={styles.conditionCheckbox}
              value={isSpecialSymbol}
              onValueChange={setIsSpecialSymbol}
            />
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btnGenerate} onPress={handleGenerate}>
            <Text style={styles.generateBtnTitle}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B3B98',
  },
  wrapper: {
    height: '90%',
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#23235B',
    paddingBottom: 38,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  bodyWrapper: {
    margin: 15,
  },
  passwordWrapper: {
    backgroundColor: '#000',
    width: '100%',
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  password: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 25,
  },
  conditionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  conditionTxt: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 20,
  },
  lengthInput: {
    width: 120,
    height: 30,
    backgroundColor: '#fff',
    marginTop: -3,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 20,
  },
  conditionCheckbox: {
    width: 25,
    height: 25,
  },
  btnWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnGenerate: {
    width: 270,
    height: 55,
    backgroundColor: '#3B3B98',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  generateBtnTitle: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
  },
});
