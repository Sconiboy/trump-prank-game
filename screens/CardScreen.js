import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Modal } from 'react-native';
import cluesData from '../data/clues.json';
import villainsData from '../data/villains.json';

export default function CardScreen({ route, navigation }) {
  const { cardIndex } = route.params;
  const card = cluesData[cardIndex];
  const [showPicker, setShowPicker] = useState(false);
  const [selectedVillain, setSelectedVillain] = useState(null);

  const handleGuess = () => {
    setShowPicker(true);
  };

  const handleSelectVillain = (villain) => {
    setSelectedVillain(villain);
    setShowPicker(false);
    // Navigate to reveal after a short delay
    setTimeout(() => {
      navigation.navigate('Reveal', { cardIndex, guessedVillain: villain });
    }, 300);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.cardNumber}>Question {cardIndex + 1} of 20</Text>
        </View>

        <View style={styles.clueContainer}>
          <Text style={styles.clueLabel}>WHO IS THIS?</Text>
          <Text style={styles.clueText}>{card.clue}</Text>
        </View>

        <TouchableOpacity
          style={styles.guessButton}
          onPress={handleGuess}
          accessibilityLabel="Make your guess"
          accessibilityRole="button"
        >
          <Text style={styles.guessButtonText}>
            {selectedVillain ? selectedVillain : 'SELECT ANSWER'}
          </Text>
        </TouchableOpacity>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((cardIndex + 1) / 20) * 100}%` }
              ]} 
            />
          </View>
        </View>
      </ScrollView>

      {/* Villain Picker Modal */}
      <Modal
        visible={showPicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowPicker(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Your Answer</Text>
            <ScrollView style={styles.villainList}>
              {villainsData.map((villain, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.villainOption}
                  onPress={() => handleSelectVillain(villain)}
                  accessibilityLabel={`Select ${villain}`}
                  accessibilityRole="button"
                >
                  <Text style={styles.villainText}>{villain}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowPicker(false)}
              accessibilityLabel="Cancel"
              accessibilityRole="button"
            >
              <Text style={styles.cancelButtonText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  cardNumber: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
    letterSpacing: 1,
  },
  clueContainer: {
    backgroundColor: '#2a2a2a',
    padding: 25,
    borderRadius: 15,
    marginBottom: 40,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
  },
  clueLabel: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 1,
  },
  clueText: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 30,
    fontWeight: '500',
  },
  guessButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  guessButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    letterSpacing: 2,
  },
  progressContainer: {
    marginTop: 20,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#333',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFD700',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#2a2a2a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  villainList: {
    maxHeight: 400,
  },
  villainOption: {
    backgroundColor: '#1a1a1a',
    padding: 18,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  villainText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#666',
  },
  cancelButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    letterSpacing: 1,
  },
});

