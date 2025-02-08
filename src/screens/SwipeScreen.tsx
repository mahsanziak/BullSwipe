import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwipeCard from '../components/SwipeCard';
import SwipeButtons from '../components/SwipeButtons';
import { StockData } from '../types';

const MOCK_STOCKS: StockData[] = [
  {
    id: 1,
    name: 'NVIDIA Corporation',
    symbol: 'NVDA',
    price: 1137.46,
    peRatio: 52,
    grossMargin: 75.9,
    ttmEPS: 2.54,
    epsGrowth: 48.9,
    deRatio: 0.16,
    change: '+3.5%',
    chartImage: 'https://example.com/nvidia-chart.png'
  },
  {
    id: 2,
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 182.52,
    peRatio: 28,
    grossMargin: 44.1,
    ttmEPS: 6.42,
    epsGrowth: 35.2,
    deRatio: 1.45,
    change: '+1.2%',
    chartImage: 'https://example.com/apple-chart.png'
  },
  {
    id: 3,
    name: 'Microsoft Corporation',
    symbol: 'MSFT',
    price: 420.55,
    peRatio: 37,
    grossMargin: 68.2,
    ttmEPS: 11.33,
    epsGrowth: 42.1,
    deRatio: 0.32,
    change: '+2.1%',
    chartImage: 'https://example.com/microsoft-chart.png'
  },
  {
    id: 4,
    name: 'Tesla, Inc.',
    symbol: 'TSLA',
    price: 175.34,
    peRatio: 42,
    grossMargin: 18.3,
    ttmEPS: 4.15,
    epsGrowth: 28.7,
    deRatio: 0.27,
    change: '-1.5%',
    chartImage: 'https://example.com/tesla-chart.png'
  }
];

const SwipeScreen = () => {
  const [index, setIndex] = useState(0);
  const swipeRef = useRef<Swiper<StockData>>(null);

  const handleSwipe = (direction: string, cardIndex: number) => {
    const stock = MOCK_STOCKS[cardIndex];
    if (!stock) return;

    switch(direction) {
      case 'left':
        console.log('Not interested in:', stock.symbol);
        break;
      case 'right':
        console.log('Added to watchlist:', stock.symbol);
        break;
      case 'top':
        console.log('Buy stock:', stock.symbol);
        break;
    }
  };

  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Swiper
        ref={swipeRef}
        cards={MOCK_STOCKS}
        renderCard={(stock) => {
          if (!stock) return null;
          return (
            <SwipeCard 
              key={stock.id} 
              stock={stock}
            />
          );
        }}
        onSwipedLeft={(cardIndex) => handleSwipe('left', cardIndex)}
        onSwipedRight={(cardIndex) => handleSwipe('right', cardIndex)}
        onSwipedTop={(cardIndex) => handleSwipe('top', cardIndex)}
        cardIndex={index}
        backgroundColor={'transparent'}
        stackSize={3}
        stackScale={10}
        stackSeparation={14}
        verticalSwipe={true}
        animateOverlayLabelsOpacity
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: '#FF4C4C',
                color: 'white',
                fontSize: 48,
                fontWeight: 'bold',
                padding: 15,
                borderRadius: 10,
                borderWidth: 4,
                borderColor: '#FF4C4C',
                transform: [{ rotate: '-15deg' }]
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginRight: 30
              }
            }
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: '#4CFF4C',
                color: 'white',
                fontSize: 48,
                fontWeight: 'bold',
                padding: 15,
                borderRadius: 10,
                borderWidth: 4,
                borderColor: '#4CFF4C',
                transform: [{ rotate: '15deg' }]
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30
              }
            }
          },
          top: {
            title: 'BUY',
            style: {
              label: {
                backgroundColor: '#A020F0',
                color: 'white',
                fontSize: 48,
                fontWeight: 'bold',
                padding: 15,
                borderRadius: 10,
                borderWidth: 4,
                borderColor: '#A020F0'
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40
              }
            }
          }
        }}
        overlayLabelStyle={{
          fontSize: 48,
          fontWeight: 'bold',
          borderRadius: 10,
          padding: 15,
          overflow: 'visible'
        }}
        animateOverlayLabelsOpacity={true}
        overlayOpacityHorizontalThreshold={width / 4}
        overlayOpacityVerticalThreshold={height / 5}
        onSwipedAll={() => {
          setIndex(0);
          swipeRef.current?.jumpToCardIndex(0);
        }}
      />
      
      <View style={styles.buttonsContainer}>
        <SwipeButtons
          onRefresh={() => swipeRef.current?.jumpToCardIndex(0)}
          onDislike={() => swipeRef.current?.swipeLeft()}
          onSuperLike={() => swipeRef.current?.swipeTop()}
          onLike={() => swipeRef.current?.swipeRight()}
          onBoost={() => console.log('boost')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  overlayLabel: {
    fontSize: 45,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
  },
  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  }
});

export default SwipeScreen;
