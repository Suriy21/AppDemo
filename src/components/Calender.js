import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CustomDatePicker({ value, onChange }) {
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    setShow(false);

    // ✅ FIX: don't depend on event.type
    if (selectedDate) {
      console.log("DATE SELECTED:", selectedDate); // debug
      onChange(selectedDate);
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text>Date of Birth</Text>

      <Button
        title={
          value
            ? value.toDateString()
            : "Select Date"
        }
        onPress={() => setShow(true)}
      />

      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
}