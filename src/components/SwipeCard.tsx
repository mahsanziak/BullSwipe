import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StockData } from '../types/index';
import StockChart from './StockChart';
import { Ionicons } from '@expo/vector-icons';

interface SwipeCardProps {
  stock: StockData;
}

const SwipeCard = ({ stock }: SwipeCardProps) => {
  const mockChartData = [
    stock.price * 0.9,
    stock.price * 0.95,
    stock.price * 0.97,
    stock.price,
    stock.price * 1.02,
    stock.price * 1.03
  ];
  const mockLabels = ['1D', '1W', '1M', '3M', '6M', '1Y'];

  // Mock investor sentiment data
  const sentiment = {
    bullish: 75,
    neutral: 15,
    bearish: 10,
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.stockSymbol}>{stock.symbol}</Text>
          <Text style={styles.stockPrice}>${stock.price}</Text>
          <Text style={[styles.change, { color: stock.change.startsWith('+') ? '#4CFF4C' : '#FF4C4C' }]}>
            {stock.change}
          </Text>
        </View>
        
        <View style={styles.chartContainer}>
          <StockChart data={mockChartData} labels={mockLabels} />
        </View>

        <View style={styles.sentimentContainer}>
          <Text style={styles.sectionTitle}>Investor Sentiment</Text>
          <View style={styles.sentimentBar}>
            <View style={[styles.sentimentSegment, { backgroundColor: '#4CFF4C', flex: sentiment.bullish }]} />
            <View style={[styles.sentimentSegment, { backgroundColor: '#FFB800', flex: sentiment.neutral }]} />
            <View style={[styles.sentimentSegment, { backgroundColor: '#FF4C4C', flex: sentiment.bearish }]} />
          </View>
          <View style={styles.sentimentLabels}>
            <Text style={styles.sentimentLabel}>Bullish {sentiment.bullish}%</Text>
            <Text style={styles.sentimentLabel}>Bearish {sentiment.bearish}%</Text>
          </View>
        </View>

        <View style={styles.analystsContainer}>
          <Text style={styles.sectionTitle}>Top Analyst Opinions</Text>
          <View style={styles.analystOpinion}>
            <Ionicons name="trending-up" size={20} color="#4CFF4C" />
            <Text style={styles.analystText}>
              "Strong growth potential in AI market" - Morgan Stanley
            </Text>
          </View>
          <View style={styles.analystOpinion}>
            <Ionicons name="stats-chart" size={20} color="#4CFF4C" />
            <Text style={styles.analystText}>
              "Market leader in GPU segment" - Goldman Sachs
            </Text>
          </View>
        </View>

        <View style={styles.metricsGrid}>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>P/E Ratio</Text>
            <Text style={styles.metricValue}>{stock.peRatio}</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>EPS</Text>
            <Text style={styles.metricValue}>${stock.ttmEPS}</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Growth</Text>
            <Text style={styles.metricValue}>{stock.epsGrowth}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.7,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    padding: 15,
  },
  header: {
    marginBottom: 10,
  },
  stockSymbol: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  stockPrice: {
    fontSize: 24,
    marginTop: 4,
  },
  change: {
    fontSize: 18,
    marginTop: 4,
  },
  chartContainer: {
    height: '30%',
    marginVertical: 10,
  },
  sentimentContainer: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  sentimentBar: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 5,
  },
  sentimentSegment: {
    height: '100%',
  },
  sentimentLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sentimentLabel: {
    fontSize: 12,
    color: '#666',
  },
  analystsContainer: {
    marginVertical: 10,
  },
  analystOpinion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 8,
  },
  analystText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#333',
    flex: 1,
  },
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  metricBox: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 12,
    width: '30%',
  },
  metricLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SwipeCard;
