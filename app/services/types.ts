export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation?: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h?: number;
  price_change_percentage_24h: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  circulating_supply?: number;
  total_supply?: number | null;
  max_supply?: number | null;
  ath?: number;
  ath_change_percentage?: number;
  ath_date?: string;
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: string;
  roi?: any;
  last_updated?: string;
  sparkline_in_7d?: {
    price: number[];
  };
  price_change_percentage_24h_in_currency?: number;
}

export interface MarketChartData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export interface FearGreedIndex {
  value: string;
  value_classification: string;
  timestamp: string;
  time_until_update: string;
}

export interface GlobalMarketData {
  data: {
    active_cryptocurrencies: number;
    upcoming_icos: number;
    ongoing_icos: number;
    ended_icos: number;
    markets: number;
    total_market_cap: { [key: string]: number };
    total_volume: { [key: string]: number };
    market_cap_percentage: { [key: string]: number };
    market_cap_change_percentage_24h_usd: number;
  };
}
