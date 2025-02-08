import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const stocks = [
  { id: 1, name: 'Apple Inc.', symbol: 'AAPL', price: '$190', change: '+1.2%' },
  { id: 2, name: 'Tesla, Inc.', symbol: 'TSLA', price: '$620', change: '-0.5%' },
  { id: 3, name: 'Amazon.com, Inc.', symbol: 'AMZN', price: '$3200', change: '+2.1%' },
  { id: 4, name: 'NVIDIA Corporation', symbol: 'NVDA', price: '$500', change: '+3.5%' }
];

const SwipeScreen = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        cards={stocks}
        renderCard={(stock) => (
          <View style={styles.card}>
            <Text style={styles.stockName}>{stock.name}</Text>
            <Text style={styles.stockSymbol}>{stock.symbol}</Text>
            <Text style={styles.stockPrice}>{stock.price}</Text>
            <Text style={styles.stockChange}>{stock.change}</Text>
          </View>
        )}
        onSwiped={(swipeIndex) => setIndex(swipeIndex + 1)}
        onSwipedRight={(swipeIndex) => console.log('Liked:', stocks[swipeIndex].symbol)}
        onSwipedLeft={(swipeIndex) => console.log('Disliked:', stocks[swipeIndex].symbol)}
        backgroundColor={'#f8f9fa'}
        cardVerticalMargin={50}
        stackSize={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.6,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  stockName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stockSymbol: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 5,
  },
  stockPrice: {
    fontSize: 22,
    fontWeight: '600',
    color: 'green',
  },
  stockChange: {
    fontSize: 18,
    color: 'blue',
  },
});

export default SwipeScreen;
