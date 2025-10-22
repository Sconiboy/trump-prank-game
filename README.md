# Guess Who... It's Always Trump

A prank trivia game where players guess famous villains based on clues... but the answer is always Trump.

## Features

- 20 carefully crafted clues that sound like famous villains
- Reveal mechanics with proof snippets
- Sound effects (buzzer + trumpet)
- Share functionality
- Dark mode UI
- Full accessibility support
- Cross-platform (iOS, Android, Web)

## Tech Stack

- **React Native** with **Expo**
- **React Navigation** for screen flow
- **Expo AV** for sound effects
- **React Native Share** for social sharing

## Installation

```bash
# Install dependencies
npm install

# Or using pnpm
pnpm install
```

## Running the App

### Web (Development)
```bash
npm run web
```

### iOS (requires macOS)
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Using Expo Go App
```bash
npx expo start
```
Then scan the QR code with the Expo Go app on your phone.

## Building for Production

### Web
```bash
npx expo export:web
```

### iOS
```bash
npx expo build:ios
```

### Android
```bash
npx expo build:android
```

## Project Structure

```
trump-prank-game/
├── screens/
│   ├── SplashScreen.js    # Landing screen
│   ├── CardScreen.js      # Clue display
│   ├── RevealScreen.js    # Answer reveal with proof
│   └── FinalScreen.js     # Final results + share
├── data/
│   ├── clues.json         # 20 clues (A-T)
│   └── proofs.json        # Proof snippets for each
├── utils/
│   └── sounds.js          # Audio playback utilities
├── App.js                 # Main navigation setup
└── app.json              # Expo configuration
```

## Accessibility

- High-contrast text (WCAG AA compliant)
- Screen reader labels on all interactive elements
- Semantic button roles
- Keyboard navigation support (web)

## Customization

### Changing Clues
Edit `data/clues.json` to modify the clue text or decoy names.

### Changing Proofs
Edit `data/proofs.json` to update the proof snippets shown after each reveal.

### Styling
All styles are defined inline in each screen component using StyleSheet.

## License

This is a parody/satire project for educational purposes.

## Credits

Built with React Native and Expo.

