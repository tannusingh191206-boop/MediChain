import { ethers } from "ethers";

const CHAIN_ID = "0x7a69"; // 31337
const RPC_URL = "http://127.0.0.1:8545";

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed.");
  }

  try {
    // Try to switch MetaMask to MediChain Local
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: CHAIN_ID }],
    });
  } catch (error) {
    // If MetaMask does not know this network, add it
    if (error.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: CHAIN_ID,
            chainName: "MediChain Local",
            nativeCurrency: {
              name: "Ether",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: [RPC_URL],
          },
        ],
      });
    } else {
      throw error;
    }
  }

  // Request wallet connection
  await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  return {
    provider,
    signer,
    address,
  };
}