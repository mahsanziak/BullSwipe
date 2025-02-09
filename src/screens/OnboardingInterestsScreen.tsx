import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const INTERESTS = [
  { id: 'stocks', label: 'Stocks' },
  { id: 'etfs', label: 'ETFs' },
  { id: 'dividends', label: 'Dividends' },
  { id: 'cryptocurrency', label: 'Cryptocurrency' },
  { id: 'bonds', label: 'Bonds' },
  { id: 'highRisk', label: 'High Risk' },
  { id: 'mediumRisk', label: 'Medium Risk' },
  { id: 'shortTerm', label: 'Short Term' },
  { id: 'longTerm', label: 'Long Term' },
  { id: 'politics', label: 'Politics' },
  { id: 'usa', label: 'USA' },
  { id: 'china', label: 'China' },
  { id: 'world', label: 'World' },
  { id: 'commodities', label: 'Commodities' },
  { id: 'lowRisk', label: 'Low Risk' },
  { id: 'preciousMetals', label: 'Precious Metals' },
  { id: 'reits', label: 'REITs' },
  { id: 'optionsTrading', label: 'Options Trading' },
  { id: 'other', label: 'Other' },
  { id: 'canada', label: 'Canada' },
  { id: 'technology', label: 'Technology' },
  { id: 'emergingMarkets', label: 'Emerging Markets' },
  { id: 'finance', label: 'Finance' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'insiders', label: 'Insiders' },
  { id: 'marketSentiment', label: 'Market Sentiment' },
  { id: 'trending', label: 'Trending' },
];

const OnboardingInterestsScreen = () => {
  const navigation = useNavigation();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [step, setStep] = useState(0);

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.backButton}>
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
              <Text style={styles.title}>Interests</Text>
              <Text style={styles.subtitle}>
                Let everyone know what you're interested in by adding it to your profile.
              </Text>

              <View style={styles.interestsGrid}>
                {INTERESTS.map((interest) => (
                  <TouchableOpacity
                    key={interest.id}
                    style={[
                      styles.interestChip,
                      selectedInterests.includes(interest.id) && styles.selectedChip
                    ]}
                    onPress={() => toggleInterest(interest.id)}
                  >
                    <Text style={[
                      styles.interestLabel,
                      selectedInterests.includes(interest.id) && styles.selectedLabel
                    ]}>
                      {interest.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View style={styles.footer}>
              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => setStep(1)}
              >
                <Text style={styles.continueText}>CONTINUE 2/5</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );

      case 1:
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.backButton} onPress={() => setStep(0)}>
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
              <View style={styles.logoMark}>
                <Ionicons name="stats-chart" size={24} color="#333" />
              </View>
            </View>

            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>Welcome to BullSwipe.</Text>
              <Text style={styles.welcomeSubtitle}>
                Please Remember this is not{'\n'}Financial Advice
              </Text>

              <View style={styles.rulesContainer}>
                <View style={styles.ruleItem}>
                  <Ionicons name="checkmark" size={24} color="#EE805F" />
                  <View style={styles.ruleTextContainer}>
                    <Text style={styles.ruleTitle}>DYOR</Text>
                    <Text style={styles.ruleDescription}>
                      Make Sure to do your own research before{'\n'}making any financial decisions
                    </Text>
                  </View>
                </View>

                <View style={styles.ruleItem}>
                  <Ionicons name="checkmark" size={24} color="#EE805F" />
                  <View style={styles.ruleTextContainer}>
                    <Text style={styles.ruleTitle}>Stay safe.</Text>
                    <Text style={styles.ruleDescription}>
                      Don't be too quick to give out personal{'\n'}information.
                    </Text>
                  </View>
                </View>

                <View style={styles.ruleItem}>
                  <Ionicons name="checkmark" size={24} color="#EE805F" />
                  <View style={styles.ruleTextContainer}>
                    <Text style={styles.ruleTitle}>Play it cool.</Text>
                    <Text style={styles.ruleDescription}>
                      Respect others and treat them as you{'\n'}would like to be treated.
                    </Text>
                  </View>
                </View>

                <View style={styles.ruleItem}>
                  <Ionicons name="checkmark" size={24} color="#EE805F" />
                  <View style={styles.ruleTextContainer}>
                    <Text style={styles.ruleTitle}>Be proactive.</Text>
                    <Text style={styles.ruleDescription}>
                      Always report bad behavior.
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity 
                style={[styles.continueButton, styles.agreeButton]}
                onPress={() => setStep(2)}
              >
                <Text style={[styles.continueText, styles.agreeText]}>I AGREE</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );

      case 2:
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <View style={styles.logoMark}>
                <Ionicons name="stats-chart" size={24} color="#333" />
              </View>
            </View>

            <View style={styles.tutorialContainer}>
              <View style={styles.newsCard}>
                <View style={styles.newsContent}>
                  <Text style={styles.newsTitle}>
                    DeepSeek's R1 may not crush tech stocks, but it could devastate unprepared companies
                  </Text>
                  <View style={styles.newsFooter}>
                    <Text style={styles.timeText}>13 hours ago</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.startTutorialButton}
                onPress={() => navigation.navigate('MainApp')}
              >
                <Text style={styles.startTutorialText}>START TUTORIAL</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => navigation.navigate('MainApp')}
              >
                <Text style={styles.skipText}>SKIP</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomNav}>
              <Ionicons name="stats-chart" size={24} color="#666" />
              <Ionicons name="star" size={24} color="#666" />
              <Ionicons name="people" size={24} color="#666" />
              <Ionicons name="chatbubbles" size={24} color="#666" />
              <Ionicons name="person" size={24} color="#666" />
            </View>
          </SafeAreaView>
        );
    }
  };

  return renderStep();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  backButton: {
    padding: 8,
  },
  skipButton: {
    padding: 8,
  },
  skipText: {
    color: '#666',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  interestChip: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 6,
  },
  selectedChip: {
    backgroundColor: '#4169E1',
    borderColor: '#4169E1',
  },
  interestLabel: {
    color: '#666',
    fontSize: 14,
  },
  selectedLabel: {
    color: 'white',
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  continueButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  welcomeContainer: {
    flex: 1,
    padding: 24,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  rulesContainer: {
    marginTop: 20,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  ruleTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  ruleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  ruleDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  agreeButton: {
    backgroundColor: '#EE805F',
    marginTop: 'auto',
  },
  agreeText: {
    color: 'white',
  },
  logoMark: {
    alignSelf: 'center',
    padding: 8,
  },
  tutorialContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsCard: {
    backgroundColor: '#666',
    borderRadius: 12,
    width: '100%',
    aspectRatio: 1.5,
    marginBottom: 24,
    padding: 16,
    justifyContent: 'flex-end',
  },
  newsContent: {
    padding: 16,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
  },
  newsFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  startTutorialButton: {
    backgroundColor: '#EE805F',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  startTutorialText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: 'white',
    width: '100%',
  },
});

export default OnboardingInterestsScreen; 