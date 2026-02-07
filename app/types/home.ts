export interface Coin {
  coinId: string;
  symbol: string;
  name: string;
  logo: string;
  value: number;
  change24h: number;
}

export interface HomeScreenData {
  user: {
    firstName: string;
    avatar?: string;
    unreadNotifications: number;
  };
  portfolio: {
    totalValue: number;
    change24h: number;
    changePercent24h: number;
    chartData: number[];
  };
  holdings: Coin[];
  aiInsights: Array<{
    id: string;
    coinSymbol: string;
    prediction: string;
    confidence: number;
    timeframe: string;
  }>;
  marketMovers: Array<{
    coinId: string;
    symbol: string;
    logo: string;
    change24h: number;
    value: number;
  }>;
}
