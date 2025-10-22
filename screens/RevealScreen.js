import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Animated } from 'react-native';
import cluesData from '../data/clues.json';
import proofsData from '../data/proofs.json';
import { playWrongSound, playTrumpSound } from '../utils/sounds';

export default function RevealScreen({ route, navigation }) {
  const { cardIndex, guessedVillain } = route.params;
  const card = cluesData[cardIndex];
  const proof = proofsData[card.id];
  const isLastCard = cardIndex === 19;

  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    // Play sound effects
    const playSounds = async () => {
      await playWrongSound();
      setTimeout(() => {
        playTrumpSound();
      }, 800);
    };
    playSounds();

    // Animate
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleNext = () => {
    if (isLastCard) {
      navigation.navigate('Final');
    } else {
      navigation.navigate('Card', { cardIndex: cardIndex + 1 });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Animated.View 
          style={[
            styles.revealContainer,
            { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
          ]}
        >
          <Text style={styles.wrongText}>WRONG.</Text>
          <Text style={styles.answerText}>IT'S TRUMP.</Text>
          
          <View style={styles.proofContainer}>
            <Text style={styles.proofLabel}>PROOF:</Text>
            <Text style={styles.proofText}>{proof}</Text>
          </View>

          <View style={styles.decoyContainer}>
            <Text style={styles.decoyLabel}>You guessed:</Text>
            <Text style={styles.decoyText}>{guessedVillain || card.decoy}</Text>
          </View>
        </Animated.View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          accessibilityLabel={isLastCard ? "View final results" : "Next card"}
          accessibilityRole="button"
        >
          <Text style={styles.nextButtonText}>
            {isLastCard ? 'SEE FINAL RESULT' : 'NEXT'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  revealContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  wrongText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff4444',
    marginBottom: 15,
    letterSpacing: 3,
    textShadowColor: '#ff4444',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  answerText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 40,
    letterSpacing: 4,
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  proofContainer: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
  },
  proofLabel: {
    fontSize: 12,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 1,
  },
  proofText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  decoyContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  decoyLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  decoyText: {
    fontSize: 18,
    color: '#aaa',
    fontWeight: '600',
    textDecorationLine: 'line-through',
  },
  nextButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  nextButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    letterSpacing: 2,
  },
});

