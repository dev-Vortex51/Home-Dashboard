# 🏠 Crypto Home Dashboard

A modern, feature-rich cryptocurrency portfolio management dashboard built with React Native and Expo. Track your crypto holdings, view AI-powered insights, monitor market movements, and manage your portfolio—all in one beautifully designed mobile application.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Expo](https://img.shields.io/badge/Expo-~54.0-000020.svg?style=flat&logo=EXPO)
![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB.svg?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.9-3178C6.svg?style=flat&logo=typescript)

---

## 📖 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Running the App](#-running-the-app)
- [Available Scripts](#-available-scripts)
- [Key Components](#-key-components)
- [Data Management](#-data-management)
- [Styling Architecture](#-styling-architecture)
- [Development Guide](#-development-guide)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🏠 Home Dashboard

- **Portfolio Overview**: Real-time total portfolio value with 24h change tracking
- **Interactive Sparkline Chart**: Visualize portfolio performance at a glance
- **Quick Actions**: Fast access to Send, Receive, Swap, and Buy Crypto functions
- **Holdings List**: Comprehensive view of all cryptocurrency holdings with live prices
- **Market Movers**: Horizontal scrollable list of trending cryptocurrencies

### 🤖 AI-Powered Insights

- **Predictive Analysis**: AI-generated price predictions for cryptocurrencies
- **Confidence Ratings**: Transparency in prediction reliability (0-100%)
- **Timeframe Indicators**: Short-term, mid-term, and long-term forecasts
- **Detailed Insight Views**: Tap any insight for comprehensive analysis

### 📊 Portfolio Management

- **Detailed Holdings**: View all your cryptocurrency positions
- **Performance Tracking**: Monitor gains/losses with percentage changes
- **Asset Allocation**: Visual representation of portfolio distribution
- **Value History**: Track portfolio performance over time

### 📈 Market Data

- **Live Price Updates**: Real-time cryptocurrency price tracking
- **24h Change Indicators**: Color-coded gains (green) and losses (red)
- **Market Trends**: Identify top performers and declining assets
- **Coin Details**: Tap any coin for detailed price charts and information

### 🔔 Alerts & Notifications

- **Price Alerts**: Get notified when cryptocurrencies hit target prices
- **AI Insight Notifications**: Stay updated on new predictions
- **Portfolio Milestones**: Celebrate reaching value goals
- **Notification Management**: Comprehensive notification history and settings

### 💸 Transaction Features

- **Send Crypto**: Transfer cryptocurrencies to other wallets
- **Receive Crypto**: Generate addresses and QR codes
- **Swap Crypto**: Exchange between different cryptocurrencies
- **Buy Crypto**: Purchase crypto with fiat currency

### ⚙️ Settings & Customization

- **Profile Management**: Update personal information
- **Preferences**: Customize app behavior and appearance
- **Security Settings**: Manage authentication and privacy
- **Wallet Management**: Connect and manage multiple wallets

---

## 📱 Screenshots

The app features a sleek dark theme optimized for cryptocurrency trading:

```
┌─────────────────────────────────────┐
│  👤 Hi, David         🔔 ⚙️         │  Header with user greeting
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐    │
│  │  Total Portfolio Value      │    │  Portfolio Card
│  │     $47,832.56              │    │  with change indicators
│  │     +$1,234.56 (+2.65%)     │    │
│  │  ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒      │    │  Sparkline chart
│  └─────────────────────────────┘    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│  Quick Actions
│  │ Send │ │Receive│ │ Swap │ │ Buy  ││
│  └──────┘ └──────┘ └──────┘ └──────┘│
│  AI Insights              See All → │
│  ┌─────────────────────────────┐    │
│  │ 🤖 BTC likely to rise 12%   │    │  AI Insight Card
│  │    Confidence: 87%          │    │
│  └─────────────────────────────┘    │
│  Your Holdings            See All → │
│  ┌─────────────────────────────┐    │
│  │ ₿  Bitcoin    $28,456  +3.2%│    │
│  │ Ξ  Ethereum   $12,890  +1.8%│    │
│  │ ◎  Solana     $4,256   -0.5%│    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

---

## 🛠 Tech Stack

### Core Framework

- **[React Native](https://reactnative.dev/)** `0.81.5` - Cross-platform mobile development
- **[Expo](https://expo.dev)** `~54.0` - Development platform and toolchain
- **[TypeScript](https://www.typescriptlang.org/)** `~5.9` - Type-safe development

### Navigation & Routing

- **[Expo Router](https://docs.expo.dev/router/introduction/)** `~6.0` - File-based routing system
- **[React Navigation](https://reactnavigation.org/)** `^7.1` - Navigation library
- **[@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)** `^7.4` - Bottom tab navigation

### UI & Styling

- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** `~4.1` - Smooth animations
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** `~2.28` - Touch gestures
- **[React Native SVG](https://github.com/software-mansion/react-native-svg)** `15.12` - Scalable Vector Graphics
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** `^15.0` - Gradient backgrounds
- **[Expo Symbols](https://docs.expo.dev/versions/latest/sdk/symbols/)** `~1.0` - SF Symbols support
- **[@expo/vector-icons](https://icons.expo.fyi/)** `^15.0` - Icon library

### Data Visualization

- **[React Native Gifted Charts](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts)** `^1.4` - Beautiful charts and graphs
- **Custom Sparkline Component** - Lightweight performance charts

### Performance & Optimization

- **[@shopify/flash-list](https://shopify.github.io/flash-list/)** `2.0` - High-performance list rendering
- **[React Native Fast Image](https://github.com/DylanVann/react-native-fast-image)** `^8.6` - Optimized image loading
- **[Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)** `~3.0` - Advanced image component

### Device Features

- **[Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/)** `~15.0` - Haptic feedback
- **[Expo Clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)** `~8.0` - Clipboard management
- **[Expo Sharing](https://docs.expo.dev/versions/latest/sdk/sharing/)** `~14.0` - Native sharing capabilities

### Fonts

- **[@expo-google-fonts/rubik](https://github.com/expo/google-fonts)** `^0.4` - Rubik font family

### Development Tools

- **[ESLint](https://eslint.org/)** `^9.25` - Code linting
- **[TypeScript ESLint Config](https://typescript-eslint.io/)** - TypeScript linting rules
- **[Expo CLI](https://docs.expo.dev/more/expo-cli/)** - Command-line interface

---

## 📁 Project Structure

```
home-dashboard/
├── app/                          # Main application directory (Expo Router)
│   ├── (tabs)/                   # Tab-based navigation screens
│   │   ├── _layout.tsx          # Tab navigator configuration
│   │   ├── index.tsx            # Home screen (default tab)
│   │   ├── market.tsx           # Market data screen
│   │   ├── ai.tsx               # AI insights screen
│   │   └── alerts.tsx           # Alerts & notifications
│   │
│   ├── ai-insight/              # AI insight detail screens
│   │   └── [id].tsx             # Dynamic route for insight details
│   │
│   ├── coin/                    # Coin detail screens
│   │   └── [id].tsx             # Dynamic route for coin details
│   │
│   ├── components/              # Reusable UI components
│   │   ├── AiInsightCard.tsx    # AI prediction card
│   │   ├── DashboardHeader.tsx  # Header with user info
│   │   ├── EmptyNotifications.tsx # Empty state component
│   │   ├── Header.tsx           # Generic header component
│   │   ├── HoldingsList.tsx     # Portfolio holdings list
│   │   ├── MarketMovers.tsx     # Trending coins carousel
│   │   ├── NotificationHeader.tsx # Notification screen header
│   │   ├── NotificationRow.tsx  # Single notification item
│   │   ├── NotificationSection.tsx # Grouped notifications
│   │   ├── PortfolioCard.tsx    # Portfolio value card
│   │   ├── QuickAction.tsx      # Single quick action button
│   │   ├── QuickActionsRow.tsx  # Row of quick actions
│   │   ├── SectionHeader.tsx    # Section title with "See All"
│   │   ├── Sparkline.tsx        # Mini chart component
│   │   └── States.tsx           # Loading/Error/Empty states
│   │
│   ├── constants/               # App-wide constants
│   │   └── constants.ts         # Colors, themes, configs
│   │
│   ├── data/                    # Mock and test data
│   │   ├── coins.ts             # Cryptocurrency data
│   │   ├── mockApiData.ts       # API mock responses
│   │   └── mockData.ts          # Mock home screen data
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useHomeDashboardData.ts # Data fetching hook
│   │
│   ├── services/                # API and service layer
│   │   ├── api.ts               # API client and endpoints
│   │   └── types.ts             # API response types
│   │
│   ├── styles/                  # Component stylesheets
│   │   ├── _layout.styles.ts    # Root layout styles
│   │   ├── index.styles.ts      # Home screen styles
│   │   ├── AiInsightCard.styles.ts
│   │   ├── DashboardHeader.styles.ts
│   │   └── ...                  # One style file per component
│   │
│   ├── types/                   # TypeScript type definitions
│   │   └── home.ts              # Home screen data types
│   │
│   ├── utils/                   # Utility functions
│   │   └── utils.ts             # Helper functions
│   │
│   ├── _layout.tsx              # Root layout configuration
│   ├── ai-insights.tsx          # All AI insights screen
│   ├── buy-crypto.tsx           # Buy crypto screen
│   ├── notifications.tsx        # All notifications screen
│   ├── portfolio.tsx            # Full portfolio screen
│   ├── receive.tsx              # Receive crypto screen
│   ├── send.tsx                 # Send crypto screen
│   ├── settings.tsx             # Settings screen
│   └── swap.tsx                 # Swap crypto screen
│
├── assets/                      # Static assets
│   └── images/                  # App icons and images
│
├── 04_HOME_DASHBOARD.md         # Design specifications
├── app.json                     # Expo configuration
├── eslint.config.js             # ESLint configuration
├── expo-env.d.ts                # Expo TypeScript definitions
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

### Key Directory Explanations

- **`app/(tabs)/`**: Contains tab-navigated screens following Expo Router conventions
- **`app/[dynamic]/`**: Dynamic routes for detail screens (e.g., coin/[id].tsx)
- **`components/`**: Modular, reusable UI components with single responsibility
- **`styles/`**: Co-located styles for maintainability (one style file per component)
- **`hooks/`**: Custom React hooks for state and data management
- **`services/`**: API layer abstraction and data fetching logic
- **`data/`**: Mock data for development and testing

---

## 📦 Installation

### Prerequisites

- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Expo CLI** - Installed automatically with dependencies
- **iOS Simulator** (macOS only) or **Android Emulator** for testing
- **Expo Go app** (optional) - For testing on physical devices

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd home-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or with yarn:

   ```bash
   yarn install
   ```

3. **Verify installation**
   ```bash
   npx expo --version
   ```

---

## 🚀 Running the App

### Start Development Server

```bash
npm start
```

or

```bash
npx expo start
```

This will open the Expo Developer Tools in your browser and display a QR code.

### Platform-Specific Commands

#### iOS (macOS only)

```bash
npm run ios
```

Opens the app in iOS Simulator.

#### Android

```bash
npm run android
```

Opens the app in Android Emulator (must be running).

#### Web

```bash
npm run web
```

Opens the app in your default web browser.

### Using Expo Go

1. Install **Expo Go** from [App Store](https://apps.apple.com/app/expo-go/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Scan the QR code from the terminal with your device camera
3. The app will load in Expo Go

---

## 📜 Available Scripts

| Script            | Command                 | Description                        |
| ----------------- | ----------------------- | ---------------------------------- |
| **start**         | `npm start`             | Start Expo development server      |
| **ios**           | `npm run ios`           | Run on iOS Simulator               |
| **android**       | `npm run android`       | Run on Android Emulator            |
| **web**           | `npm run web`           | Run in web browser                 |
| **lint**          | `npm run lint`          | Run ESLint to check code quality   |
| **reset-project** | `npm run reset-project` | Reset to a blank project structure |

### Additional Useful Commands

```bash
# Clear Metro bundler cache
npx expo start --clear

# Run TypeScript type checking
npx tsc --noEmit

# Generate production build
npx expo build:ios      # iOS
npx expo build:android  # Android

# Publish to Expo
npx expo publish
```

---

## 🧩 Key Components

### Core Components

#### `<DashboardHeader />`

User greeting, avatar, and navigation to notifications/settings.

```tsx
<DashboardHeader
  firstName="David"
  avatar="..."
  unreadNotifications={3}
  onNotificationPress={() => {}}
  onSettingsPress={() => {}}
/>
```

#### `<PortfolioCard />`

Displays total portfolio value, 24h change, and sparkline chart.

```tsx
<PortfolioCard
  totalValue={47832.56}
  change24h={1234.56}
  changePercent24h={2.65}
  chartData={[...]}
/>
```

#### `<QuickActionsRow />`

Row of quick action buttons (Send, Receive, Swap, Buy).

```tsx
<QuickActionsRow actions={QUICK_ACTIONS} onActionPress={(action) => {}} />
```

#### `<AiInsightCard />`

AI-powered prediction card with confidence rating.

```tsx
<AiInsightCard
  insight={{
    id: "1",
    prediction: "BTC likely to rise 12%",
    confidence: 87,
    timeframe: "24h",
  }}
  onPress={() => {}}
/>
```

#### `<HoldingsList />`

List of user's cryptocurrency holdings with values and changes.

```tsx
<HoldingsList
  holdings={[...]}
  onCoinPress={(coinId) => {}}
/>
```

#### `<MarketMovers />`

Horizontal scrollable list of trending cryptocurrencies.

```tsx
<MarketMovers data={marketMovers} onCoinPress={(coinId) => {}} />
```

#### `<Sparkline />`

Lightweight line chart for displaying price trends.

```tsx
<Sparkline data={[100, 120, 115, 130, 125]} color="#246BFD" height={60} />
```

### State Components

#### `<LoadingState />`

Displays loading indicator while fetching data.

#### `<ErrorState />`

Shows error message with retry button.

```tsx
<ErrorState onRetry={() => refresh()} />
```

#### `<EmptyState />`

Displayed when no data is available.

```tsx
<EmptyState onConnect={() => {}} onAdd={() => {}} />
```

---

## 💾 Data Management

### Custom Hook: `useHomeDashboardData`

Centralized data fetching and state management for the home screen.

```typescript
const { data, status, refreshing, refresh } = useHomeDashboardData();

// Status: 'loading' | 'success' | 'error' | 'empty'
// Data: HomeScreenData | null
// Refreshing: boolean (pull-to-refresh state)
// Refresh: () => void (manual refresh function)
```

### Mock Data

Currently using mock data for development:

- **`MOCK_HOME_DATA`**: Complete home screen dataset
- **`MOCK_API_DATA`**: Simulated API responses
- **`COINS`**: Cryptocurrency information and logos

**Location**: `app/data/mockData.ts`, `app/data/mockApiData.ts`, `app/data/coins.ts`

### Type Definitions

All data structures are fully typed in TypeScript:

```typescript
interface HomeScreenData {
  user: { firstName: string; avatar?: string; unreadNotifications: number };
  portfolio: { totalValue: number; change24h: number; ... };
  holdings: Coin[];
  aiInsights: AiInsight[];
  marketMovers: MarketMover[];
}
```

**Location**: `app/types/home.ts`

---

## 🎨 Styling Architecture

### Design System

The app uses a consistent design system defined in `app/constants/constants.ts`:

```typescript
export const COLORS = {
  background: "#121212",
  card: "#1A1A24",
  primary: "#246BFD",
  positive: "#00D084",
  negative: "#FF4757",
  text: {
    primary: "#FFFFFF",
    secondary: "#A0A0A0",
  },
};
```

### Style Organization

- **One style file per component**: `ComponentName.styles.ts`
- **Co-located with components**: Easy to find and maintain
- **StyleSheet.create()**: Optimized style objects
- **Responsive design**: Uses flexbox and percentage-based sizing

Example structure:

```typescript
// app/styles/PortfolioCard.styles.ts
import { StyleSheet } from "react-native";
import { COLORS } from "../constants/constants";

export const portfolioCardStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
  },
  // ... more styles
});
```

---

## 🔧 Development Guide

### File-Based Routing

This project uses **Expo Router** for navigation. Routes are automatically generated from the file structure:

- `app/(tabs)/index.tsx` → `/` (home)
- `app/(tabs)/market.tsx` → `/market`
- `app/coin/[id].tsx` → `/coin/:id` (dynamic)
- `app/send.tsx` → `/send`

### Adding a New Screen

1. Create a new file in `app/`: `app/my-screen.tsx`
2. Create a style file: `app/styles/my-screen.styles.ts`
3. Export a React component:
   ```tsx
   export default function MyScreen() {
     return (
       <View>
         <Text>My Screen</Text>
       </View>
     );
   }
   ```

### Adding a New Component

1. Create component file: `app/components/MyComponent.tsx`
2. Create style file: `app/styles/MyComponent.styles.ts`
3. Import and use in screens

### Type Safety

Always define TypeScript interfaces for:

- Component props
- API responses
- State objects
- Navigation params

### Theme and Colors

All colors should be referenced from `COLORS` constant:

```typescript
import { COLORS } from "../constants/constants";

// ✅ Good
backgroundColor: COLORS.card;

// ❌ Avoid
backgroundColor: "#1A1A24";
```

### Navigation

Use Expo Router's `useRouter` hook:

```typescript
import { useRouter } from "expo-router";

const router = useRouter();
router.push("/send");
router.push(`/coin/${coinId}`);
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style

- Follow the existing code style
- Run `npm run lint` before committing
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for new features

### Reporting Issues

Please include:

- Device/platform information
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Expo Team** for the amazing development platform
- **React Native Community** for excellent libraries and tools
- **Design Inspiration** from modern fintech applications

---

## 📞 Support

For questions, issues, or suggestions:

- Open an issue on GitHub
- Check the [Expo documentation](https://docs.expo.dev/)
- Visit [React Native docs](https://reactnative.dev/docs/getting-started)

---

**Built with ❤️ using React Native and Expo**
