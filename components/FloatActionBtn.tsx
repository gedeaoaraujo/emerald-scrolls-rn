import React from 'react';
import { useTheme } from '../theme/ThemeContext'
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
  const { theme } = useTheme()

  const handlePress = () => {
    onClick();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.fab, fabStyle, { 
          backgroundColor: theme.colors.primary
        }]}
        onPress={handlePress}>
          {text === undefined 
          ? <FontAwesome6 name={icon} size={20} 
              color={theme.colors.textOnPrimary}/> 
          : <Text style={[styles.fabText, textStyle, {
              color: theme.colors.textOnPrimary,
            }]}>{text}</Text>}
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
    elevation: 6, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fabText: {
    fontSize: 24,
  },
});
