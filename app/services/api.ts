import {
  Coin,
  FearGreedIndex,
  GlobalMarketData,
  MarketChartData,
} from "./types";
import {
  MOCK_MARKET_COINS,
  getMockChartData,
  getMockCoinDetails,
} from "../data/mockApiData";

const COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3";
const SENTIMENT_API_URL = "https://api.alternative.me/fng/";

const API_KEY = "";
const USE_MOCK_DATA = true; // Set to false to try real API calls

// Cache configuration with TTL
const CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes
const apiCache = new Map<string, { data: any; timestamp: number }>();

// Clear old cache entries
const cleanCache = () => {
  const now = Date.now();
  for (const [key, value] of apiCache.entries()) {
    if (now - value.timestamp > CACHE_DURATION_MS) {
      apiCache.delete(key);
    }
  }
};

// Get from cache if available and not expired
const getFromCache = (key: string): any | null => {
  cleanCache();
  const cached = apiCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION_MS) {
    return cached.data;
  }
  apiCache.delete(key);
  return null;
};

// Store in cache
const setCache = (key: string, data: any) => {
  apiCache.set(key, { data, timestamp: Date.now() });
};

async function fetchWithError(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

export const CryptoApi = {
  getMarketCoins: async (
    currency = "usd",
    page = 1,
    perPage = 20,
  ): Promise<Coin[]> => {
    const cacheKey = `market-coins-${currency}-${page}-${perPage}`;
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    // Use mock data if enabled or fallback on error
    if (USE_MOCK_DATA) {
      console.log("Using mock market data");
      const data = MOCK_MARKET_COINS.slice(0, perPage);
      setCache(cacheKey, data);
      return data;
    }

    try {
      const endpoint = `${COINGECKO_BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=24h`;
      const data = await fetchWithError(endpoint);
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.log("API call failed, falling back to mock data");
      const data = MOCK_MARKET_COINS.slice(0, perPage);
      setCache(cacheKey, data);
      return data;
    }
  },

  getCoinMarketChart: async (
    coinId: string,
    days: string = "7",
    currency = "usd",
  ): Promise<MarketChartData> => {
    const cacheKey = `chart-${coinId}-${days}-${currency}`;
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    // Use mock data if enabled or fallback on error
    if (USE_MOCK_DATA) {
      console.log(`Using mock chart data for ${coinId}`);
      const data = getMockChartData(coinId, days);
      setCache(cacheKey, data);
      return data;
    }

    try {
      const endpoint = `${COINGECKO_BASE_URL}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`;
      const data = await fetchWithError(endpoint);
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.log(`API call failed for chart ${coinId}, falling back to mock data`);
      const data = getMockChartData(coinId, days);
      setCache(cacheKey, data);
      return data;
    }
  },

  getTrendingCoins: async () => {
    const cacheKey = "trending-coins";
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    if (USE_MOCK_DATA) {
      console.log("Using mock trending coins data");
      const data = { coins: MOCK_MARKET_COINS.slice(0, 7).map((coin) => ({ item: coin })) };
      setCache(cacheKey, data);
      return data;
    }

    try {
      const endpoint = `${COINGECKO_BASE_URL}/search/trending`;
      const data = await fetchWithError(endpoint);
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.log("API call failed for trending, falling back to mock data");
      const data = { coins: MOCK_MARKET_COINS.slice(0, 7).map((coin) => ({ item: coin })) };
      setCache(cacheKey, data);
      return data;
    }
  },

  getGlobalData: async (): Promise<GlobalMarketData> => {
    const cacheKey = "global-data";
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    if (USE_MOCK_DATA) {
      console.log("Using mock global data");
      const data = {
        data: {
          total_market_cap: { usd: 1800000000000 },
          total_volume: { usd: 85000000000 },
          market_cap_percentage: { btc: 49.2, eth: 19.7 },
          market_cap_change_percentage_24h_usd: 2.34,
        },
      };
      setCache(cacheKey, data);
      return data;
    }

    try {
      const endpoint = `${COINGECKO_BASE_URL}/global`;
      const data = await fetchWithError(endpoint);
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.log("API call failed for global data, falling back to mock data");
      const data = {
        data: {
          total_market_cap: { usd: 1800000000000 },
          total_volume: { usd: 85000000000 },
          market_cap_percentage: { btc: 49.2, eth: 19.7 },
          market_cap_change_percentage_24h_usd: 2.34,
        },
      };
      setCache(cacheKey, data);
      return data;
    }
  },

  getFearAndGreedIndex: async (): Promise<FearGreedIndex> => {
    const cacheKey = "fear-greed-index";
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    if (USE_MOCK_DATA) {
      console.log("Using mock fear and greed index data");
      const result = {
        value: "65",
        value_classification: "Greed",
        timestamp: Date.now().toString(),
        time_until_update: "0",
      };
      setCache(cacheKey, result);
      return result;
    }

    try {
      const data = await fetchWithError(SENTIMENT_API_URL);
      const result = data.data[0];
      setCache(cacheKey, result);
      return result;
    } catch (error) {
      console.log("API call failed for fear and greed, falling back to mock data");
      const result = {
        value: "65",
        value_classification: "Greed",
        timestamp: Date.now().toString(),
        time_until_update: "0",
      };
      setCache(cacheKey, result);
      return result;
    }
  },

  getCoinDetails: async (coinId: string) => {
    const cacheKey = `coin-details-${coinId}`;
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    // Use mock data if enabled or fallback on error
    if (USE_MOCK_DATA) {
      console.log(`Using mock coin details for ${coinId}`);
      const data = getMockCoinDetails(coinId);
      setCache(cacheKey, data);
      return data;
    }

    try {
      const endpoint = `${COINGECKO_BASE_URL}/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
      const data = await fetchWithError(endpoint);
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.log(`API call failed for ${coinId}, falling back to mock data`);
      const data = getMockCoinDetails(coinId);
      setCache(cacheKey, data);
      return data;
    }
  },
};
