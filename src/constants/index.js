export const NetworkContextName = "Kovan Test Network";
export const ACTIVE_NETWORK = 42;
export const contractAddress = "0xB494DB91929ca1FcA9b740446B45Aa2B79403987";

export const RPC_URL =
  "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

export const NetworkDetails = [
  {
    chainId: "0x2A",
    chainName: "Kovan Test Network",
    nativeCurrency: {
      name: "Kovan Test Network",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [RPC_URL],
    blockExplorerUrls: ["https://kovan.etherscan.io"],
  },
];

// MAINNET CONFIG

// export const NetworkContextName = "Ethereum Mainnet";
// export const ACTIVE_NETWORK = 1;
// export const contractAddress = "MAINNET_CONTRACT_ADDRESS";

// export const RPC_URL =
//   "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

// export const NetworkDetails = [
//   {
//     chainId: "0x1",
//     chainName: "Ethereum Mainnet",
//     nativeCurrency: {
//       name: "Ethereum Mainnet",
//       symbol: "ETH",
//       decimals: 18,
//     },
//     rpcUrls: [RPC_URL],
//     blockExplorerUrls: ["https://etherscan.io"],
//   },
// ];
