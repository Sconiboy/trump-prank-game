# Quick Start Guide

Get the Trump Prank Game running in 5 minutes!

## Prerequisites

You need Node.js installed on your computer. Download it from [nodejs.org](https://nodejs.org/) if you don't have it.

## Installation

1. **Extract the project** (if you received a zip file):
   ```bash
   unzip trump-prank-game.zip
   cd trump-prank-game
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will take 1-2 minutes to download all required packages.

## Running the App

### Option 1: Web Browser (Easiest)

```bash
npm run web
```

This will:
- Start the development server
- Open your browser automatically
- Show the game at `http://localhost:8081`

**Perfect for**: Quick testing, development, sharing with others on the same network

### Option 2: Mobile Phone (Expo Go)

1. **Install Expo Go** on your phone:
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start the server**:
   ```bash
   npx expo start
   ```

3. **Scan the QR code**:
   - iOS: Use the Camera app
   - Android: Use the Expo Go app

**Perfect for**: Testing on real devices, experiencing the full mobile UX

### Option 3: iOS Simulator (macOS only)

```bash
npm run ios
```

Requires Xcode to be installed.

### Option 4: Android Emulator

```bash
npm run android
```

Requires Android Studio and an emulator to be set up.

## First Time Setup

When you first run the app, you might see:

```
Need to install the following packages:
@expo/cli
Ok to proceed? (y)
```

Just type `y` and press Enter.

## Testing the Game

1. **Splash Screen**: Click "START"
2. **Card A**: Read the clue, click "GUESS"
3. **Reveal**: See "WRONG. IT'S TRUMP." with proof
4. **Continue**: Click "NEXT" through all 20 cards
5. **Final Screen**: Share the prank or play again

## Common Issues

### Port Already in Use

If you see "Port 8081 already in use":
```bash
# Kill the process using the port
npx kill-port 8081

# Or use a different port
npx expo start --port 8082
```

### Metro Bundler Issues

If the app won't load:
```bash
# Clear the cache
npx expo start -c
```

### Dependencies Not Installing

If `npm install` fails:
```bash
# Try using the --legacy-peer-deps flag
npm install --legacy-peer-deps

# Or use pnpm instead
npm install -g pnpm
pnpm install
```

### Sound Not Playing (Web)

Browsers require user interaction before playing audio. The sounds will work after you click the START button.

## Development Tips

### Hot Reload

The app automatically reloads when you save changes to files. No need to restart!

### Editing Clues

1. Open `data/clues.json`
2. Modify the clue text
3. Save the file
4. The app will reload automatically

### Editing Styles

1. Open any screen file in `screens/`
2. Find the `StyleSheet.create()` section
3. Modify colors, sizes, etc.
4. Save and see changes instantly

### Debugging

Press `j` in the terminal to open the debugger, or:
- **Web**: Open browser DevTools (F12)
- **Mobile**: Shake the device to open the developer menu

## Next Steps

- **Customize**: Edit clues, colors, and text
- **Deploy**: See `DEPLOYMENT.md` for publishing instructions
- **Learn More**: Check `README.md` for full documentation

## File Structure

```
trump-prank-game/
├── screens/           # All 4 game screens
├── data/             # Clues and proofs
├── utils/            # Sound utilities
├── App.js            # Main navigation
└── package.json      # Dependencies
```

## Getting Help

- **Expo Docs**: https://docs.expo.dev/
- **React Native Docs**: https://reactnative.dev/
- **Community**: https://forums.expo.dev/

## Ready to Deploy?

See `DEPLOYMENT.md` for instructions on:
- Publishing to web (Vercel, Netlify)
- Submitting to App Store
- Submitting to Google Play

---

**Enjoy pranking!** 🎭

