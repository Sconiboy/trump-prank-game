import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Animated } from 'react-native';
import cluesData from '../data/clues.json';
import { playWrongSound } from '../utils/sounds';

export default function RevealScreen({ route, navigation }) {
  const { cardIndex, guessedVillain } = route.params;
  const isLastCard = cardIndex === 19;
  
  // They're only "correct" if they guessed Trump
  const isCorrect = guessedVillain === 'Donald Trump';

  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    // Play sound effect
    if (!isCorrect) {
      playWrongSound();
    }

    // Animate in
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
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
            styles.resultContainer,
            { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
          ]}
        >
          {isCorrect ? (
            <>
              <Text style={styles.correctText}>CORRECT!</Text>
              <Text style={styles.messageText}>You got it right!</Text>
            </>
          ) : (
            <>
              <Text style={styles.wrongText}>WRONG!</Text>
              <Text style={styles.messageText}>Better luck on the next one!</Text>
            </>
          )}

          <View style={styles.guessContainer}>
            <Text style={styles.guessLabel}>You guessed:</Text>
            <Text style={styles.guessText}>{guessedVillain}</Text>
          </View>
        </Animated.View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          accessibilityLabel={isLastCard ? "See results" : "Next question"}
          accessibilityRole="button"
        >
          <Text style={styles.nextButtonText}>
            {isLastCard ? 'SEE RESULTS' : 'NEXT'}
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
    padding: 20,
    justifyContent: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  wrongText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#ff4444',
    marginBottom: 20,
    textShadowColor: '#ff4444',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  correctText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#44ff44',
    marginBottom: 20,
    textShadowColor: '#44ff44',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  messageText: {
    fontSize: 22,
    color: '#aaa',
    marginBottom: 40,
    textAlign: 'center',
  },
  guessContainer: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 250,
  },
  guessLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  guessText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
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

