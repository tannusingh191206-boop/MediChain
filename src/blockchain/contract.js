import { ethers } from "ethers";

export const CONTRACT_ADDRESS =
  "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export const CONTRACT_ABI = [
  "function grantAccess(address doctor)",
  "function revokeAccess(address doctor)",
  "function hasAccess(address patient,address doctor) view returns (bool)",
  "function addMedicalRecord(address patient,string recordType,string recordHash) returns (uint256)",
  "function getMedicalRecord(uint256 recordId) view returns (uint256 id,address patient,address doctor,string recordType,string recordHash,uint256 timestamp)",
  "function recordExists(uint256 recordId) view returns (bool)",
  "function getNextRecordId() view returns (uint256)"
];