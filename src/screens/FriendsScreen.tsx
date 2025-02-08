import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MOCK_FRIENDS = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    favoritePicks: [
      { symbol: 'TSLA', change: '+2.4%', price: '242.50' },
      { symbol: 'AAPL', change: '+1.2%', price: '175.20' },
    ],
    streak: 5,
  },
  {
    id: 2,
    name: 'Mike Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    favoritePicks: [
      { symbol: 'NVDA', change: '+3.8%', price: '485.90' },
      { symbol: 'AMD', change: '+2.1%', price: '105.30' },
    ],
    streak: 3,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    favoritePicks: [
      { symbol: 'META', change: '+1.9%', price: '334.20' },
      { symbol: 'MSFT', change: '+0.8%', price: '376.50' },
    ],
    streak: 7,
  },
];

const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Friends</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="person-add" size={24} color="#4169E1" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search friends"
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView style={styles.friendsList}>
        {MOCK_FRIENDS.map((friend) => (
          <View key={friend.id} style={styles.friendCard}>
            <View style={styles.friendHeader}>
              <View style={styles.friendInfo}>
                <Image source={{ uri: friend.avatar }} style={styles.avatar} />
                <View>
                  <Text style={styles.friendName}>{friend.name}</Text>
                  <View style={styles.streakContainer}>
                    <Ionicons name="flame" size={16} color="#FF6B6B" />
                    <Text style={styles.streakText}>{friend.streak} day streak</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.messageButton}>
                <Ionicons name="chatbubble-outline" size={24} color="#4169E1" />
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Favorite Picks</Text>
            <View style={styles.picksContainer}>
              {friend.favoritePicks.map((pick, index) => (
                <View key={index} style={styles.pickCard}>
                  <Text style={styles.pickSymbol}>{pick.symbol}</Text>
                  <Text style={styles.pickPrice}>${pick.price}</Text>
                  <Text style={[styles.pickChange, { color: pick.change.startsWith('+') ? '#4CFF4C' : '#FF4C4C' }]}>
                    {pick.change}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  addButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  friendsList: {
    flex: 1,
  },
  friendCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  friendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  friendName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
  messageButton: {
    padding: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#666',
  },
  picksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickCard: {
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    padding: 12,
    width: '48%',
  },
  pickSymbol: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  pickPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  pickChange: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default FriendsScreen; 