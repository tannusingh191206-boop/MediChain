import hre from "hardhat";

async function main() {
  const { viem } = await hre.network.connect();

  console.log("Deploying MediChain...");

  const mediChain = await viem.deployContract("MediChain");

  console.log("MediChain deployed successfully!");
  console.log("Contract address:", mediChain.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});