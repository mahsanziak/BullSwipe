import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SwipeButtonsProps {
  onRefresh: () => void;
  onDislike: () => void;
  onSuperLike: () => void;
  onLike: () => void;
  onBoost: () => void;
}

const SwipeButtons = ({ onRefresh, onDislike, onSuperLike, onLike, onBoost }: SwipeButtonsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRefresh} style={styles.button}>
        <Ionicons name="refresh" size={24} color="#FFB800" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDislike} style={styles.button}>
        <Ionicons name="close" size={24} color="#FF4C4C" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSuperLike} style={styles.button}>
        <Ionicons name="star" size={24} color="#00B4FF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLike} style={styles.button}>
        <Ionicons name="heart" size={24} color="#4CFF4C" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onBoost} style={styles.button}>
        <Ionicons name="flash" size={24} color="#A020F0" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
});

export default SwipeButtons;
