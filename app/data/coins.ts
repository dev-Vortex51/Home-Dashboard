export type CoinCatalogItem = {
  coinId: string;
  symbol: string;
  name: string;
  logo: string;
  price: number;
};

export const COIN_CATALOG = {
  btc: {
    coinId: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    price: 45234.5,
  },
  eth: {
    coinId: "eth",
    symbol: "ETH",
    name: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    price: 2960.2,
  },
  sol: {
    coinId: "sol",
    symbol: "SOL",
    name: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    price: 98.4,
  },
  doge: {
    coinId: "doge",
    symbol: "DOGE",
    name: "Dogecoin",
    logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    price: 0.08,
  },
  ada: {
    coinId: "ada",
    symbol: "ADA",
    name: "Cardano",
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    price: 0.55,
  },
  xrp: {
    coinId: "xrp",
    symbol: "XRP",
    name: "XRP",
    logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    price: 0.62,
  },
  usdt: {
    coinId: "usdt",
    symbol: "USDT",
    name: "Tether",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    price: 1.0,
  },
} as const satisfies Record<string, CoinCatalogItem>;

export const COIN_LIST = Object.values(COIN_CATALOG);

export const SEND_ASSETS = [
  { ...COIN_CATALOG.btc, balance: 0.5423 },
  { ...COIN_CATALOG.eth, balance: 4.2 },
  { ...COIN_CATALOG.sol, balance: 18.75 },
];

export const SWAP_ASSETS = {
  BTC: {
    id: "1",
    ...COIN_CATALOG.btc,
    icon: "logo-bitcoin",
    color: "#F7931A",
    balance: 1.2,
  },
  ETH: {
    id: "2",
    ...COIN_CATALOG.eth,
    icon: "logo-electron",
    color: "#627EEA",
    balance: 15.0,
  },
  USDT: {
    id: "3",
    ...COIN_CATALOG.usdt,
    icon: "cash-outline",
    color: "#26A17B",
    balance: 5000,
  },
} as const;
