import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function VectorIcon({ name, size = 24, color = '#000' }) {
  return <Icon name={name} size={size} color={color} />;
}