import React from 'react';
import { Colors } from '../colors'
import { FontAwesome6 } from '@expo/vector-icons'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type FloatActionBtnProps = {
    icon?: string,
    text?: string,
    fabStyle?: any,
    textStyle?: any,
    onClick: () => void,
}

export const FloatActionBtn = ({ 
  text, icon, fabStyle, textStyle, onClick
}: FloatActionBtnProps) => {
  const handlePress = () => {
    onClick();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.fab, fabStyle]} onPress={handlePress}>
        {text === undefined 
          ? <FontAwesome6 name={icon} size={20} color='white'/> 
          : <Text style={[styles.fabText, textStyle]}>{text}</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    elevation: 6, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});
