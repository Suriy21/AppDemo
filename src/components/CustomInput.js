import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Label from './Label';

const CustomInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  placeholder
}) => {
  return (
    <View style={styles.container}>
      <Label title={label} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#166b9c',
    borderRadius: 8,
    padding: 10,
    fontSize:20,
    width:'100%'
  },
});

export default CustomInput;