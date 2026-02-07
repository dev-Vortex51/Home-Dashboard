import { Coin, MarketChartData } from "../services/types";

// Generate sparkline data
const generateSparkline = (basePrice: number, volatility: number = 0.05) => {
  const points = 168; // 7 days of hourly data
  const data: number[] = [];
  let price = basePrice;

  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * volatility * price;
    price = Math.max(price + change, basePrice * 0.8); // Don't go below 80% of base
    data.push(parseFloat(price.toFixed(2)));
  }

  return data;
};

// Generate chart data for different time periods
const generateChartData = (basePrice: number, days: number) => {
  const points = days * 24; // hourly data
  const now = Date.now();
  const prices: [number, number][] = [];
  let price = basePrice;

  for (let i = points; i >= 0; i--) {
    const timestamp = now - i * 60 * 60 * 1000;
    const change = (Math.random() - 0.5) * 0.03 * price;
    price = Math.max(price + change, basePrice * 0.7);
    prices.push([timestamp, parseFloat(price.toFixed(2))]);
  }

  return prices;
};

// Mock coins data matching CoinGecko API structure
export const MOCK_MARKET_COINS: Coin[] = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    current_price: 45234.5,
    market_cap: 885000000000,
    market_cap_rank: 1,
    fully_diluted_valuation: 950000000000,
    total_volume: 28500000000,
    high_24h: 46200,
    low_24h: 44100,
    price_change_24h: 1432.5,
    price_change_percentage_24h: 3.27,
    market_cap_change_24h: 28000000000,
    market_cap_change_percentage_24h: 3.27,
    circulating_supply: 19567890,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -34.5,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 66587.2,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: new Date().toISOString(),
    sparkline_in_7d: {
      price: generateSparkline(45234.5, 0.05),
    },
    price_change_percentage_24h_in_currency: 3.27,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    current_price: 2960.2,
    market_cap: 355000000000,
    market_cap_rank: 2,
    fully_diluted_valuation: 355000000000,
    total_volume: 15200000000,
    high_24h: 3010,
    low_24h: 2920,
    price_change_24h: 52.3,
    price_change_percentage_24h: 1.8,
    market_cap_change_24h: 6300000000,
    market_cap_change_percentage_24h: 1.8,
    circulating_supply: 120000000,
    total_supply: 120000000,
    max_supply: null,
    ath: 4878,
    ath_change_percentage: -39.3,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 0.432979,
    atl_change_percentage: 683826.4,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: null,
    last_updated: new Date().toISOString(),
    sparkline_in_7d: {
      price: generateSparkline(2960.2, 0.04),
    },
    price_change_percentage_24h_in_currency: 1.8,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image: "https://cryptologos.cc/logos/solana-sol-logo.png",
    current_price: 98.4,
    market_cap: 42000000000,
    market_cap_rank: 5,
    fully_diluted_valuation: 56000000000,
    total_volume: 2100000000,
    high_24h: 102.5,
    low_24h: 96.8,
    price_change_24h: -0.5,
    price_change_percentage_24h: -0.5,
    market_cap_change_24h: -210000000,
    market_cap_change_percentage_24h: -0.5,
    circulating_supply: 426800000,
    total_supply: 569000000,
    max_supply: null,
    ath: 259.96,
    ath_change_percentage: -62.2,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 0.500801,
    atl_change_percentage: 19550.3,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: new Date().toISOString(),
    sparkline_in_7d: {
      price: generateSparkline(98.4, 0.06),
    },
    price_change_percentage_24h_in_currency: -0.5,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    current_price: 0.62,
    market_cap: 33000000000,
    market_cap_rank: 6,
    fully_diluted_valuation: 62000000000,
    total_volume: 1800000000,
    high_24h: 0.64,
    low_24h: 0.61,
    price_change_24h: 0.008,
    price_change_percentage_24h: 1.31,
    market_cap_change_24h: 430000000,
    market_cap_change_percentage_24h: 1.32,
    circulating_supply: 53175000000,
    total_supply: 100000000000,
    max_supply: 100000000000,
    ath: 3.4,
    ath_change_percentage: -81.8,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 22984.6,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: new Date().toISOString(),
    sparkline_in_7d: {
      price: generateSparkline(0.62, 0.04),
    },
    price_change_percentage_24h_in_currency: 1.31,
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    current_price: 0.55,
    market_cap: 19300000000,
    market_cap_rank: 8,
    fully_diluted_valuation: 24800000000,
    total_volume: 420000000,
    high_24h: 0.56,
    low_24h: 0.54,
    price_change_24h: -0.006,
    price_change_percentage_24h: -1.08,
    market_cap_change_24h: -210000000,
    market_cap_change_percentage_24h: -1.08,
    circulating_supply: 35000000000,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 3.09,
    ath_change_percentage: -82.2,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 0.01925275,
    atl_change_percentage: 2756.5,
    atl_date: "2020-03-13T02:22:55.044Z",
    roi: null,
    last_updated: new Date().toISOString(),
    sparkline_in_7d: {
      price: generateSparkline(0.55, 0.05),
    },
    price_change_percentage_24h_in_currency: -1.08,
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    current_price: 0.08,
    market_cap: 11500000000,
    market_cap_rank: 10,
    fully_diluted_valuation: null,
    total_volume: 580000000,
    high_24h: 0.084,
    low_24h: 0.077,
    price_change_24h: 0.0064,
    price_change_percentage_24h: 8.7,
    market_cap_change_24h: 920000000,
    market_cap_change_percentage_24h: 8.7,
    circulating_supply: 143750000000,
    total_supply: 143750000000,
    max_supply: null,
    ath: 0.731578,
    ath_change_percentage: -89.1,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 0.0000869,
    atl_change_percentage: 92000.5,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    last_updated: new Date().toISOString(),
    sparkline_in_7d: {
      price: generateSparkline(0.08, 0.08),
    },
    price_change_percentage_24h_in_currency: 8.7,
  },
];

// Mock coin details (extended data structure)
export const MOCK_COIN_DETAILS: Record<string, any> = {
  bitcoin: {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    asset_platform_id: null,
    platforms: {},
    block_time_in_minutes: 10,
    hashing_algorithm: "SHA-256",
    categories: ["Cryptocurrency", "Store of Value"],
    description: {
      en: "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.",
    },
    links: {
      homepage: ["https://bitcoin.org/"],
      blockchain_site: ["https://blockchain.com/explorer"],
    },
    image: {
      thumb: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      small: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      large: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    },
    market_data: {
      current_price: { usd: 45234.5 },
      market_cap: { usd: 885000000000 },
      market_cap_rank: 1,
      fully_diluted_valuation: { usd: 950000000000 },
      total_volume: { usd: 28500000000 },
      high_24h: { usd: 46200 },
      low_24h: { usd: 44100 },
      price_change_24h: 1432.5,
      price_change_percentage_24h: 3.27,
      market_cap_change_24h: 28000000000,
      market_cap_change_percentage_24h: 3.27,
      circulating_supply: 19567890,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: { usd: 69045 },
      ath_change_percentage: { usd: -34.5 },
      ath_date: { usd: "2021-11-10T14:24:11.849Z" },
      atl: { usd: 67.81 },
      atl_change_percentage: { usd: 66587.2 },
      atl_date: { usd: "2013-07-06T00:00:00.000Z" },
    },
  },
  ethereum: {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    description: {
      en: "Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.",
    },
    image: {
      thumb: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      small: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      large: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    market_data: {
      current_price: { usd: 2960.2 },
      market_cap: { usd: 355000000000 },
      market_cap_rank: 2,
      total_volume: { usd: 15200000000 },
      high_24h: { usd: 3010 },
      low_24h: { usd: 2920 },
      price_change_24h: 52.3,
      price_change_percentage_24h: 1.8,
      circulating_supply: 120000000,
      total_supply: 120000000,
    },
  },
  solana: {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    description: {
      en: "Solana is a highly functional open source project that banks on blockchain technology's permissionless nature to provide decentralized finance (DeFi) solutions. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland.",
    },
    image: {
      thumb: "https://cryptologos.cc/logos/solana-sol-logo.png",
      small: "https://cryptologos.cc/logos/solana-sol-logo.png",
      large: "https://cryptologos.cc/logos/solana-sol-logo.png",
    },
    market_data: {
      current_price: { usd: 98.4 },
      market_cap: { usd: 42000000000 },
      market_cap_rank: 5,
      total_volume: { usd: 2100000000 },
      high_24h: { usd: 102.5 },
      low_24h: { usd: 96.8 },
      price_change_24h: -0.5,
      price_change_percentage_24h: -0.5,
      circulating_supply: 426800000,
      total_supply: 569000000,
    },
  },
};

// Mock chart data generator
export const getMockChartData = (
  coinId: string,
  days: string,
): MarketChartData => {
  const coin = MOCK_MARKET_COINS.find((c) => c.id === coinId);
  const basePrice = coin?.current_price || 100;
  const daysNum = parseInt(days) || 7;

  return {
    prices: generateChartData(basePrice, daysNum),
    market_caps: generateChartData(basePrice * 1000000000, daysNum),
    total_volumes: generateChartData(basePrice * 50000000, daysNum),
  };
};

// Get mock coin details
export const getMockCoinDetails = (coinId: string) => {
  // Return details if available, otherwise generate basic details
  if (MOCK_COIN_DETAILS[coinId]) {
    return MOCK_COIN_DETAILS[coinId];
  }

  const coin = MOCK_MARKET_COINS.find((c) => c.id === coinId);
  if (!coin) {
    throw new Error("Coin not found");
  }

  return {
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    description: {
      en: `${coin.name} is a cryptocurrency.`,
    },
    image: {
      thumb: coin.image,
      small: coin.image,
      large: coin.image,
    },
    market_data: {
      current_price: { usd: coin.current_price },
      market_cap: { usd: coin.market_cap },
      market_cap_rank: coin.market_cap_rank,
      total_volume: { usd: coin.total_volume },
      high_24h: { usd: coin.high_24h },
      low_24h: { usd: coin.low_24h },
      price_change_24h: coin.price_change_24h,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      circulating_supply: coin.circulating_supply,
      total_supply: coin.total_supply,
      max_supply: coin.max_supply,
    },
  };
};
