import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState('KR +82');
  const [verificationCode, setVerificationCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthday, setBirthday] = useState('');

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.logoContainer}>
              <Ionicons name="stats-chart" size={40} color="white" />
              <Text style={styles.logoText}>BullSwipe</Text>
            </View>
            <Text style={styles.termsText}>
              By creating BullSwipe Account or Sign In, you agree to our Terms of Service and Privacy Policy. Click here to our Terms of Service and Privacy Policy.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => setStep(1)}>
              <Text style={styles.buttonText}>SIGN IN WITH EMAIL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setStep(1)}>
              <Text style={styles.buttonText}>SIGN IN WITH GOOGLE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setStep(1)}>
              <Text style={styles.buttonText}>SIGN IN WITH PHONE NUMBER</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot your credentials?</Text>
            </TouchableOpacity>
          </View>
        );
      case 1:
        return (
          <View style={styles.stepContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setStep(0)}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.centerContent}>
              <View style={styles.logoContainer}>
                <Ionicons name="stats-chart" size={40} color="white" />
              </View>
              <Text style={styles.oopsText}>Oops!</Text>
              <Text style={styles.messageText}>
                We couldn't find a BullSwipe{'\n'}account connected to that{'\n'}Email Account.
              </Text>
              <TouchableOpacity 
                style={[styles.button, styles.createAccountButton]} 
                onPress={() => setStep(2)}
              >
                <Text style={styles.buttonText}>CREATE NEW ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setStep(1)}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            
            <View style={styles.logoMark}>
              <Ionicons name="stats-chart" size={32} color="white" />
            </View>

            <View style={styles.phoneInputContainer}>
              <Text style={styles.phoneTitle}>My number is</Text>
              
              <View style={styles.inputRow}>
                <TouchableOpacity style={styles.countryPicker}>
                  <Text style={styles.countryCode}>{selectedCountry}</Text>
                  <Ionicons name="chevron-down" size={20} color="white" />
                </TouchableOpacity>

                <TextInput 
                  style={styles.phoneInput}
                  placeholder="000000000"
                  placeholderTextColor="rgba(255,255,255,0.6)"
                  keyboardType="phone-pad"
                  maxLength={9}
                />
              </View>

              <Text style={styles.verificationText}>
                We will send a text with a verification code.{'\n'}
                Message and data rates may apply. Learn what{'\n'}
                happens when your number changes.
              </Text>

              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => setStep(3)}
              >
                <Text style={styles.continueButtonText}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setStep(2)}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            
            <View style={styles.logoMark}>
              <Ionicons name="stats-chart" size={32} color="white" />
            </View>

            <View style={styles.codeContainer}>
              <Text style={styles.codeTitle}>My code is</Text>
              
              <Text style={styles.codePlaceholder}>000000000</Text>
              
              <View style={styles.codeInputRow}>
                {[...Array(6)].map((_, index) => (
                  <View key={index} style={styles.codeUnderline} />
                ))}
              </View>

              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => setStep(4)}
              >
                <Text style={styles.continueButtonText}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.stepContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setStep(3)}>
              <Ionicons name="close" size={28} color="white" />
            </TouchableOpacity>
            
            <View style={styles.nameContainer}>
              <Text style={styles.nameTitle}>
                My first{'\n'}name is
              </Text>
              
              <TextInput 
                style={styles.nameInput}
                placeholder="Tes"
                placeholderTextColor="rgba(255,255,255,0.6)"
                value={firstName}
                onChangeText={setFirstName}
                autoFocus
              />
              
              <Text style={styles.nameDisclaimer}>
                This is how it will appear in BullSwipe{'\n'}
                and you will not be able to change it
              </Text>

              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => setStep(5)}
              >
                <Text style={styles.continueButtonText}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 5:
        return (
          <View style={styles.stepContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setStep(4)}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            
            <View style={styles.birthdayContainer}>
              <Text style={styles.birthdayTitle}>
                My{'\n'}birthday is
              </Text>
              
              <View style={styles.dateInputContainer}>
                <Text style={styles.dateFormat}>Y Y Y Y / M M / D D</Text>
                <View style={styles.dateUnderlines}>
                  {[...Array(10)].map((_, index) => (
                    <View 
                      key={index} 
                      style={[
                        styles.dateUnderline,
                        index === 4 || index === 7 ? styles.dateSlash : null
                      ]} 
                    />
                  ))}
                </View>
              </View>
              
              <Text style={styles.ageDisclaimer}>
                Your age will be public
              </Text>

              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => {
                  // Navigate to OnboardingInterests screen
                  navigation.navigate('OnboardingInterests');
                }}
              >
                <Text style={styles.continueButtonText}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      // Add more cases for additional steps
    }
  };

  return (
    <LinearGradient
      colors={['#9880FF', '#EE805F']}
      start={{ x: -0.05, y: 1.12 }}
      end={{ x: 1.97, y: -0.03 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {renderStep()}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  stepContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 12,
  },
  termsText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.8,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: '100%',
    padding: 16,
    borderRadius: 25,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotText: {
    color: 'white',
    opacity: 0.8,
    marginTop: 16,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 24,
    zIndex: 1,
    padding: 8,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  oopsText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  messageText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 40,
    opacity: 0.9,
  },
  phoneInputContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  phoneTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600',
    marginBottom: 32,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 8,
    marginRight: 16,
  },
  countryCode: {
    color: 'white',
    fontSize: 18,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 8,
  },
  verificationText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
    marginTop: 24,
  },
  continueButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    paddingVertical: 16,
    marginTop: 'auto',
    marginBottom: 40,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  logoMark: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  createAccountButton: {
    marginTop: 20,
    width: '100%',
    maxWidth: 320,
  },
  codeContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  codeTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600',
    marginBottom: 32,
  },
  codePlaceholder: {
    color: 'white',
    fontSize: 24,
    marginBottom: 40,
    opacity: 0.6,
  },
  codeInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  codeUnderline: {
    width: 40,
    height: 2,
    backgroundColor: 'white',
    marginHorizontal: 8,
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 24,
    zIndex: 1,
    padding: 8,
  },
  nameContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 120,
  },
  nameTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 44,
    marginBottom: 40,
  },
  nameInput: {
    color: 'white',
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 8,
    marginBottom: 16,
  },
  nameDisclaimer: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
    marginTop: 8,
  },
  birthdayContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 120,
  },
  birthdayTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 44,
    marginBottom: 40,
  },
  dateInputContainer: {
    marginBottom: 16,
  },
  dateFormat: {
    color: 'white',
    fontSize: 24,
    opacity: 0.6,
    marginBottom: 8,
  },
  dateUnderlines: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dateUnderline: {
    width: 24,
    height: 2,
    backgroundColor: 'white',
    marginRight: 4,
  },
  dateSlash: {
    width: 12,
    backgroundColor: 'transparent',
  },
  ageDisclaimer: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
    marginTop: 8,
  },
});

export default OnboardingScreen; 