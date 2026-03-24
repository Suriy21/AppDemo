import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Dropdown({ label, items = [], value, onValueChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onValueChange(itemValue)}
        >
          <Picker.Item label="Select..." value="" />
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { fontSize: 20, fontWeight: '600', marginBottom: 5 },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#166b9c',
    borderRadius: 8,
  },
});