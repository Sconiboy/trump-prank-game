# Deployment Guide

## Quick Start (Web)

The easiest way to deploy this app is as a Progressive Web App (PWA) on the web.

### Option 1: Vercel (Recommended for Web)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Build and deploy:
```bash
npx expo export:web
cd web-build
vercel --prod
```

### Option 2: Netlify

1. Build the web version:
```bash
npx expo export:web
```

2. Deploy the `web-build` folder to Netlify:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=web-build
```

### Option 3: GitHub Pages

1. Build the web version:
```bash
npx expo export:web
```

2. Push the `web-build` folder to a `gh-pages` branch
3. Enable GitHub Pages in your repository settings

## Mobile Deployment

### iOS (App Store)

Requirements:
- macOS with Xcode installed
- Apple Developer account ($99/year)

Steps:
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure the project
eas build:configure

# Build for iOS
eas build --platform ios

# Submit to App Store
eas submit --platform ios
```

### Android (Google Play)

Requirements:
- Google Play Developer account ($25 one-time)

Steps:
```bash
# Install EAS CLI (if not already installed)
npm install -g eas-cli

# Login to Expo
eas login

# Configure the project
eas build:configure

# Build for Android
eas build --platform android

# Submit to Google Play
eas submit --platform android
```

## Testing on Real Devices

### Using Expo Go (Development)

1. Install Expo Go on your phone:
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Start the development server:
```bash
npx expo start
```

3. Scan the QR code with:
   - iOS: Camera app
   - Android: Expo Go app

### Building Standalone Apps for Testing

For iOS (requires macOS):
```bash
eas build --profile preview --platform ios
```

For Android:
```bash
eas build --profile preview --platform android
```

## Environment Setup

### For iOS Development
- Install Xcode from the Mac App Store
- Install Xcode Command Line Tools:
  ```bash
  xcode-select --install
  ```

### For Android Development
- Install Android Studio
- Set up Android SDK and emulator
- Add Android SDK to your PATH

## Production Checklist

Before deploying to production:

- [ ] Test all 20 clues
- [ ] Verify sound effects work
- [ ] Test sharing functionality
- [ ] Check accessibility features
- [ ] Test on multiple screen sizes
- [ ] Verify dark mode
- [ ] Test on iOS and Android devices
- [ ] Update app icons and splash screen
- [ ] Set proper app store metadata
- [ ] Review privacy policy requirements
- [ ] Test offline functionality (if applicable)

## Custom Domain (Web)

After deploying to Vercel/Netlify, you can add a custom domain:

1. Purchase a domain (e.g., guesswhogame.com)
2. Add the domain in your hosting provider's dashboard
3. Update DNS records as instructed
4. Enable HTTPS (usually automatic)

## Analytics (Optional)

To track usage, you can add:

- **Google Analytics**: Add to `app.json` web config
- **Expo Analytics**: Built-in with EAS
- **Mixpanel**: For detailed event tracking

## Monetization Options

If you want to monetize:

1. **Ads**: Use `expo-ads-admob` for Google AdMob
2. **In-App Purchases**: Use `expo-in-app-purchases`
3. **Premium Version**: Create a paid variant with extra features

## Support & Maintenance

- Monitor crash reports via Expo dashboard
- Update dependencies regularly:
  ```bash
  npx expo install --fix
  ```
- Keep React Native and Expo SDK up to date
- Respond to user feedback from app stores

## Troubleshooting

### Build Fails
- Clear cache: `npx expo start -c`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Expo SDK compatibility

### Sound Not Playing
- Ensure audio files are accessible
- Check device volume and silent mode
- Verify expo-av is properly installed

### Navigation Issues
- Clear Metro bundler cache
- Restart the development server
- Check React Navigation version compatibility

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Policies](https://play.google.com/about/developer-content-policy/)

