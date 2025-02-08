import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Profile</Text>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editAvatarButton}>
            <Ionicons name="pencil" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>John Doe</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>350</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>500</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="settings-outline" size={24} color="#666" />
            <Text style={styles.actionButtonText}>SETTINGS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editProfileButton}>
            <Ionicons name="create-outline" size={24} color="#666" />
            <Text style={styles.actionButtonText}>EDIT PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="shield-outline" size={24} color="#666" />
            <Text style={styles.actionButtonText}>PRIVACY</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bullswipeCard}>
          <View style={styles.logoContainer}>
            <Ionicons name="stats-chart" size={24} color="black" />
            <Text style={styles.logoText}>BullSwipe</Text>
          </View>
          <Text style={styles.cardTagline}>Level up your investing game!</Text>
          
          <View style={styles.dotIndicator}>
            {[0, 1, 2, 3, 4].map((index) => (
              <View 
                key={index} 
                style={[
                  styles.dot, 
                  index === 0 && styles.activeDot
                ]} 
              />
            ))}
          </View>

          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>LEARN MORE</Text>
          </TouchableOpacity>
        </View>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  profileSection: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editAvatarButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#4169E1',
    borderRadius: 12,
    padding: 6,
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 32,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
  },
  statLabel: {
    color: '#666',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 32,
  },
  actionButton: {
    alignItems: 'center',
  },
  editProfileButton: {
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },
  bullswipeCard: {
    backgroundColor: '#F5F7FA',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 8,
  },
  cardTagline: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  dotIndicator: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DDD',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4169E1',
  },
  learnMoreButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  learnMoreText: {
    color: '#4169E1',
    fontWeight: '600',
  },
});

export default ProfileScreen;
