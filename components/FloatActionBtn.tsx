import React from 'react';
import { Colors } from '../colors'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type FloatActionBtnProps = {
    text: string,
    onClick: () => void
}

export const FloatActionBtn = ({text, onClick}: FloatActionBtnProps) => {
  const handlePress = () => {
    onClick();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={handlePress}>
        <Text style={styles.fabText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
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
