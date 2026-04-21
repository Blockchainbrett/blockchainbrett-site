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
    name: "Filecoin",
    logo: "/investments/filecoin.svg",
    url: "https://filecoin.io",
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
