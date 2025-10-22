import { Audio } from 'expo-av';

let wrongSound = null;
let trumpSound = null;

export const initSounds = async () => {
  try {
    // Set audio mode
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
    });

    // Load sounds (we'll use simple beep sounds as placeholders)
    // In production, you'd replace these with actual audio files
    console.log('Sounds initialized');
  } catch (error) {
    console.error('Error initializing sounds:', error);
  }
};

export const playWrongSound = async () => {
  try {
    // Create a simple buzzer sound effect
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3' },
      { shouldPlay: true, volume: 0.5 }
    );
    
    // Unload after playing
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  } catch (error) {
    console.log('Could not play wrong sound:', error);
  }
};

export const playTrumpSound = async () => {
  try {
    // Create a simple trumpet/fanfare sound effect
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3' },
      { shouldPlay: true, volume: 0.6 }
    );
    
    // Unload after playing
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  } catch (error) {
    console.log('Could not play trump sound:', error);
  }
};

export const cleanupSounds = async () => {
  try {
    if (wrongSound) {
      await wrongSound.unloadAsync();
    }
    if (trumpSound) {
      await trumpSound.unloadAsync();
    }
  } catch (error) {
    console.error('Error cleaning up sounds:', error);
  }
};

