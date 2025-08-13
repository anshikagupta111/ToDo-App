import React from 'react';
import { Text } from 'react-native';
const RNTexts = ({ style, value ,onPress}) => {
  return (
    <Text style={style}onPress={onPress} >
      {value}
    </Text>
  );
};
export default RNTexts
