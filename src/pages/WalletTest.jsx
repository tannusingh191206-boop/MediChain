import { useState } from "react";
import { connectWallet } from "../blockchain/wallet";

function WalletTest() {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const handleConnect = async () => {
    try {
      setStatus("Connecting to MetaMask...");

      const wallet = await connectWallet();

      setAddress(wallet.address);
      setStatus("Wallet connected successfully!");
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Failed to connect wallet.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fb",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1>MediChain Wallet Test</h1>

        <p style={{ color: "#667085", lineHeight: "1.6" }}>
          Connect MetaMask to the MediChain Local blockchain network.
        </p>

        <button
          onClick={handleConnect}
          style={{
            marginTop: "20px",
            padding: "14px 24px",
            border: "none",
            borderRadius: "10px",
            background: "#111827",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Connect MetaMask
        </button>

        {status && (
          <p
            style={{
              marginTop: "25px",
              color: status.includes("successfully")
                ? "#15803d"
                : "#475467",
            }}
          >
            {status}
          </p>
        )}

        {address && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#f2f4f7",
              borderRadius: "10px",
              wordBreak: "break-all",
              fontSize: "14px",
            }}
          >
            <strong>Connected Address</strong>
            <br />
            {address}
          </div>
        )}
      </div>
    </div>
  );
}

export default WalletTest;