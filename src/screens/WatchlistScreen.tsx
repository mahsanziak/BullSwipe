import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MOCK_WATCHLIST = [
  { symbol: 'NVIDIA', id: 1 },
  { symbol: 'AAPL', id: 2 },
  { symbol: 'SPX', id: 3 },
];

const WatchlistScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.notificationCard}>
        <View style={styles.notificationIcon}>
          <Ionicons name="stats-chart" size={24} color="white" />
        </View>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>NVIDIA added to watchlist</Text>
          <Text style={styles.notificationSubtitle}>Track your stocks easily</Text>
        </View>
      </View>

      <View style={styles.watchlistContainer}>
        <View style={styles.watchlistHeader}>
          <Text style={styles.watchlistTitle}>My Watchlist</Text>
          <TouchableOpacity>
            <Text style={styles.doneButton}>Done</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.watchlistDescription}>manage list description</Text>

        {MOCK_WATCHLIST.map((stock) => (
          <View key={stock.id} style={styles.stockRow}>
            <TouchableOpacity style={styles.deleteButton}>
              <Ionicons name="remove-circle" size={24} color="#FF4C4C" />
            </TouchableOpacity>
            <Text style={styles.stockSymbol}>{stock.symbol}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="create-outline" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}>
              <Ionicons name="ellipsis-horizontal" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.createButton}>
          <Ionicons name="add" size={24} color="white" style={styles.addIcon} />
          <Text style={styles.createButtonText}>Create New Watchlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  notificationCard: {
    backgroundColor: 'black',
    borderRadius: 25,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  notificationSubtitle: {
    color: '#999',
    fontSize: 14,
  },
  watchlistContainer: {
    flex: 1,
  },
  watchlistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  watchlistTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  doneButton: {
    color: '#4169E1',
    fontSize: 16,
  },
  watchlistDescription: {
    color: '#666',
    marginBottom: 16,
  },
  stockRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  deleteButton: {
    marginRight: 12,
  },
  stockSymbol: {
    flex: 1,
    fontSize: 16,
  },
  editButton: {
    marginHorizontal: 8,
  },
  menuButton: {
    marginLeft: 8,
  },
  createButton: {
    backgroundColor: '#4169E1',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 24,
  },
  addIcon: {
    marginRight: 8,
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WatchlistScreen; 