# 🌱 PlantApp

Modern React Native plant application.

## 📱 Features

- **Home Page**: Discover plant categories and view frequently asked questions
- **Onboarding**: First-time user experience and paywall

## 🛠 Technologies

- **React Native** + **Expo**
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **Expo Router** - Navigation (file-based routing)
- **NativeWind** - Tailwind CSS styling
- **Axios** - API requests
- **AsyncStorage** - Local data storage

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ElirKvothe/PlantApp
   cd PlantApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npx expo start
   ```

4. **Run on device**
   - Press `i` for iOS
   - Press `a` for Android
   - Scan QR code for physical device

## 🧪 Testing

```bash
npm test                    # Run tests
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Run tests with coverage
```

## 📜 Scripts

```bash
npm start                  # Development server
npm run android           # Run on Android
npm run ios              # Run on iOS
npm run lint             # ESLint check
```

## 🏗 Architecture

- **State Management**: Global state with Redux Toolkit
- **Navigation**: File-based routing with Expo Router
- **API**: HTTP requests with Axios and interceptors
- **Storage**: Local data with AsyncStorage
- **Styling**: Tailwind CSS with NativeWind

## 📋 Current Status

✅ **Completed**:
- Onboarding flow and paywall
- Home page categories and questions
- Redux store structure
- Tab navigation
- Basic UI components
- Test infrastructure

## 🤝 Development

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

Built with React Native and Expo 🌱