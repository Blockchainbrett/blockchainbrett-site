// Twitter/X snowflake epoch (2010-11-04T01:42:54.657Z)
const X_EPOCH = 1288834974657n;

const xIdToTimestamp = (id: string): number => {
  return Number((BigInt(id) >> 22n) + X_EPOCH);
};

export type Article =
  | {
      type: "paragraph";
      title: string;
      date: string; // ISO
      url: string;
      description?: string;
      coverImage?: string;
    }
  | {
      type: "x";
      id: string; // X status ID
    };

const paragraphArticles: Article[] = [
  {
    type: "paragraph",
    title: "The Crypto Creator Economy",
    date: "2022-11-22",
    url: "https://paragraph.com/@blockchainbrett/the-crypto-creator-economy-2",
    description:
      "Foundational piece for the Creators GMI newsletter on the decentralized creator economy.",
    coverImage:
      "https://storage.googleapis.com/papyrus_images/7fef39d593c5d7ff44d6505d0d046f97cb35b6e753ced48cc806e72066754088.jpg",
  },
  {
    type: "paragraph",
    title: "Creator DAOs GMI",
    date: "2022-01-25",
    url: "https://paragraph.com/@blockchainbrett/creator-daos-gmi",
    description:
      "Token-based communities built by creators — structures, examples, and why they matter.",
    coverImage:
      "https://storage.googleapis.com/papyrus_images/661d34981f37d28dcb093910b3beb2ccb940369db52cf8faaec101fc37ca86de.jpg",
  },
  {
    type: "paragraph",
    title: "Music NFTs GMI",
    date: "2021-11-16",
    url: "https://paragraph.com/@blockchainbrett/music-nfts-gmi-2",
    description:
      "An overview of the music NFT movement: platforms, musician DAOs, and direct artist-to-collector monetization.",
    coverImage:
      "https://storage.googleapis.com/papyrus_images/e8558a1a0ab18716cc9ca7f18e6cd57ad003a3672ee473d2e19b968c82ce4b2c.jpg",
  },
];

const xArticles: Article[] = [
  { type: "x", id: "1902756237336268831" },
  { type: "x", id: "1930633901795352644" },
  { type: "x", id: "1935319355694166067" },
  { type: "x", id: "1937552149166104747" },
  { type: "x", id: "1938224085894381680" },
  { type: "x", id: "2018683420113588654" },
  { type: "x", id: "2024297598501134587" },
  { type: "x", id: "2024889788562595897" },
];

const articleTimestamp = (article: Article): number => {
  if (article.type === "x") return xIdToTimestamp(article.id);
  return new Date(article.date).getTime();
};

export const articles: Article[] = [...paragraphArticles, ...xArticles].sort(
  (a, b) => articleTimestamp(b) - articleTimestamp(a)
);

// Curated list of articles to feature on the homepage, in display order.
const highlightedXIds = [
  "2024889788562595897", // Real World Culture
  "2024297598501134587", // What AI Agents x Crypto Need to Go Mainstream
  "2018683420113588654", // Crypto: the Game of Making Money and Meaning
  "1938224085894381680", // Real Money Games x Crypto
  "1935319355694166067", // Card Collectibles x Crypto
  "1930633901795352644", // Have Fun, Make Money
];

export const highlightedArticles: Article[] = highlightedXIds
  .map((id) => articles.find((a) => a.type === "x" && a.id === id))
  .filter((a): a is Article => a !== undefined);
