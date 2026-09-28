import { describe, it } from "node:test";
import assert from "node:assert/strict";
import hre from "hardhat";

describe("MediChain", async () => {
  async function deployMediChain() {
    const { viem } = await hre.network.connect();

    const publicClient = await viem.getPublicClient();
    const walletClients = await viem.getWalletClients();

    const patient = walletClients[0];
    const doctor = walletClients[1];
    const anotherUser = walletClients[2];

    const mediChain = await viem.deployContract("MediChain");

    return {
      publicClient,
      mediChain,
      patient,
      doctor,
      anotherUser,
    };
  }

  // TEST 1
  await it("should deploy the MediChain contract", async () => {
    const { mediChain } = await deployMediChain();

    assert.ok(mediChain.address);
  });

  // TEST 2
  await it("should allow a patient to grant doctor access", async () => {
    const {
      publicClient,
      mediChain,
      patient,
      doctor,
    } = await deployMediChain();

    await patient.writeContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "grantAccess",
      args: [doctor.account.address],
    });

    const hasAccess = await publicClient.readContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "hasAccess",
      args: [
        patient.account.address,
        doctor.account.address,
      ],
    });

    assert.equal(hasAccess, true);
  });

  // TEST 3
  await it("should allow a patient to revoke doctor access", async () => {
    const {
      publicClient,
      mediChain,
      patient,
      doctor,
    } = await deployMediChain();

    await patient.writeContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "grantAccess",
      args: [doctor.account.address],
    });

    await patient.writeContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "revokeAccess",
      args: [doctor.account.address],
    });

    const hasAccess = await publicClient.readContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "hasAccess",
      args: [
        patient.account.address,
        doctor.account.address,
      ],
    });

    assert.equal(hasAccess, false);
  });

  // TEST 4
  await it("should allow a patient to add a medical record", async () => {
    const {
      publicClient,
      mediChain,
      patient,
    } = await deployMediChain();

    await patient.writeContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "addMedicalRecord",
      args: [
        patient.account.address,
        "Blood Test",
        "QmDemoHash123",
      ],
    });

    const record = await publicClient.readContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "getMedicalRecord",
      args: [1n],
      account: patient.account.address,
    });

    assert.equal(record[0], 1n);

    assert.equal(
      record[1].toLowerCase(),
      patient.account.address.toLowerCase()
    );

    assert.equal(
      record[2].toLowerCase(),
      patient.account.address.toLowerCase()
    );

    assert.equal(record[3], "Blood Test");

    assert.equal(
      record[4],
      "QmDemoHash123"
    );
  });

  // TEST 5
  await it("should allow an authorized doctor to add a medical record", async () => {
    const {
      publicClient,
      mediChain,
      patient,
      doctor,
    } = await deployMediChain();

    await patient.writeContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "grantAccess",
      args: [doctor.account.address],
    });

    await doctor.writeContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "addMedicalRecord",
      args: [
        patient.account.address,
        "X-Ray",
        "QmXRayHash456",
      ],
    });

    const record = await publicClient.readContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "getMedicalRecord",
      args: [1n],
      account: doctor.account.address,
    });

    assert.equal(
      record[1].toLowerCase(),
      patient.account.address.toLowerCase()
    );

    assert.equal(
      record[2].toLowerCase(),
      doctor.account.address.toLowerCase()
    );

    assert.equal(record[3], "X-Ray");

    assert.equal(
      record[4],
      "QmXRayHash456"
    );
  });

  // TEST 6
  await it("should confirm that a record exists", async () => {
    const {
      publicClient,
      mediChain,
      patient,
    } = await deployMediChain();

    await patient.writeContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "addMedicalRecord",
      args: [
        patient.account.address,
        "Prescription",
        "QmPrescriptionHash789",
      ],
    });

    const exists = await publicClient.readContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "recordExists",
      args: [1n],
    });

    assert.equal(exists, true);

    const missing = await publicClient.readContract({
      address: mediChain.address,
      abi: mediChain.abi,
      functionName: "recordExists",
      args: [999n],
    });

    assert.equal(missing, false);
  });
});