import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Animated, Share, Platform } from 'react-native';

export default function FinalScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.5);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleShare = async () => {
    try {
      const message = "I just took the Villain Quiz and got pranked! 😳\n\nThink you can guess all 20 villains correctly? Try it and see what happens!\n\nPlay 'Guess Who?' - The Villain Quiz";
      
      await Share.share({
        message: message,
        title: "Guess Who... It's Always Trump",
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handlePlayAgain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Splash' }],
    });
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
          <Text style={styles.trumpEmoji}>😱</Text>
          <Text style={styles.mainText}>SURPRISE!</Text>
          <Text style={styles.subText}>Every single answer was...</Text>
          <Text style={styles.trumpText}>TRUMP</Text>
          
           <View style={styles.statsContainer}>
            <Text style={styles.statsText}>20 Questions</Text>
            <Text style={styles.statsDivider}>•</Text>
            <Text style={styles.statsText}>20 Trumps</Text>
            <Text style={styles.statsDivider}>•</Text>
            <Text style={styles.statsText}>1 Big Surprise</Text>
          </View>

          <Text style={styles.tagline}>
            Gotcha! All 20 clues were about Trump.
            Think your friends will fall for it too?
          </Text>
        </Animated.View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={handleShare}
            accessibilityLabel="Share this game"
            accessibilityRole="button"
          >
            <Text style={styles.shareButtonText}>📤 SHARE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.playAgainButton}
            onPress={handlePlayAgain}
            accessibilityLabel="Play again"
            accessibilityRole="button"
          >
            <Text style={styles.playAgainButtonText}>PLAY AGAIN</Text>
          </TouchableOpacity>
        </View>
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
  resultContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  trumpEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    letterSpacing: 2,
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  trumpText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 40,
    letterSpacing: 5,
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  statsText: {
    fontSize: 16,
    color: '#aaa',
    fontWeight: '600',
  },
  statsDivider: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 26,
  },
  buttonContainer: {
    gap: 15,
  },
  shareButton: {
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
  shareButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    letterSpacing: 2,
  },
  playAgainButton: {
    backgroundColor: 'transparent',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  playAgainButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    letterSpacing: 2,
  },
});

