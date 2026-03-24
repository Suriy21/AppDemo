import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Label = ({ title }) => {
  return <Text style={styles.label}>{title}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '600',
  },
});

export default Label;