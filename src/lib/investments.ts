export type Investment = {
  name: string;
  logo: string;
  url: string;
};

export const investments: Investment[] = [
  {
    name: "Bitcoin",
    logo: "/investments/bitcoin.svg",
    url: "https://bitcoin.org",
  },
  {
    name: "Ethereum",
    logo: "/investments/ethereum.svg",
    url: "https://ethereum.org",
  },
  {
    name: "Solana",
    logo: "/investments/solana.svg",
    url: "https://solana.com",
  },
  {
    name: "Coinbase",
    logo: "/investments/coinbase.svg",
    url: "https://www.coinbase.com",
  },
  {
    name: "Circle",
    logo: "/investments/circle.svg",
    url: "https://www.circle.com",
  },
  {
    name: "Polymarket",
    logo: "/investments/polymarket.png",
    url: "https://polymarket.com",
  },
];
