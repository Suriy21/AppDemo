import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CustomDatePicker({ label, value, onChange }) {
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShow(true)}
      >
        <Text style={styles.text}>{value ? value.toDateString() : 'Select Date'}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { fontSize: 20, marginBottom: 5, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: '#166b9c',
    borderRadius: 8,
    padding: 10,
  },
  text: { fontSize: 16 },
});