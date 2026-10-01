
# MediChain – Blockchain-Based Healthcare Record Management System

MediChain is a blockchain-based healthcare record management system designed to provide secure, transparent, and verifiable management of medical records. The system allows patients to control access to their healthcare records while enabling authorized doctors to manage medical information.

## 📌 Project Overview

Traditional healthcare systems often rely on centralized databases for storing medical records. This can create challenges related to data integrity, controlled access, and verification.

MediChain uses blockchain technology and smart contracts to provide a tamper-evident and auditable layer for healthcare records and access permissions.

The application provides separate interfaces for:

* 👤 Patients
* 👨‍⚕️ Doctors
* 👨‍💼 Administrators

## 🎯 Aim

To develop a secure and user-friendly healthcare record management system using blockchain technology for record integrity, controlled access, and verification.

## ✨ Objectives

* Securely manage healthcare record information.
* Allow patients to control access to their medical records.
* Allow authorized doctors to add medical records.
* Store cryptographic hashes of records on the blockchain.
* Provide a mechanism for verifying record integrity.
* Maintain an auditable record of important blockchain activities.

## 🛠️ Technologies Used

| Technology   | Purpose                                        |
| ------------ | ---------------------------------------------- |
| React.js     | Frontend user interface                        |
| JavaScript   | Application logic                              |
| CSS          | Website styling                                |
| Solidity     | Smart contract development                     |
| Hardhat      | Blockchain development, testing and deployment |
| Ethers.js    | Communication between frontend and blockchain  |
| MetaMask     | Wallet and transaction signing                 |
| Git & GitHub | Version control                                |
| Vercel       | Frontend hosting                               |

## 🏗️ System Architecture

                    MediChain Website
                           |
                     React.js UI
                           |
                       Ethers.js
                           |
                       MetaMask
                           |
                  Solidity Smart Contract
                           |
                Ethereum-Compatible Network
                           |
                      Blockchain
```

## 👥 User Roles

### Patient

Patients can:

* View their healthcare records.
* Manage their profile.
* Grant access to authorized doctors.
* Revoke doctor access.
* Participate in blockchain-based transactions.

### Doctor

Doctors can:

* View authorized patients.
* Add medical records.
* Manage access-related requests.
* Interact with the smart contract when authorized.

### Administrator

Administrators can:

* Monitor users.
* Manage doctor and hospital information.
* View system information.
* Monitor blockchain-related activity.

## 🔗 Blockchain Functionality

The MediChain smart contract is written in Solidity and manages important blockchain operations such as:

* Adding medical records.
* Granting doctor access.
* Revoking doctor access.
* Checking access permissions.
* Retrieving authorized records.
* Recording important events.

Examples of smart-contract functions include:

```text
grantAccess()
revokeAccess()
hasAccess()
addMedicalRecord()
getMedicalRecord()
recordExists()
```

## 🔐 Record Integrity

Instead of storing an entire medical document directly on the blockchain, a cryptographic hash can be generated for the record.

```text
Medical Record
      |
      ↓
Cryptographic Hash
      |
      ↓
Blockchain
```

The hash acts as a digital fingerprint of the record. If the record is modified, its hash will change, allowing the stored hash to be used to help detect changes.

Sensitive medical documents should remain off-chain and be protected using appropriate secure storage and encryption in a production implementation.

## 🔄 Working Process

1. The user opens the MediChain website.
2. The user connects a MetaMask wallet.
3. The frontend communicates with the blockchain through Ethers.js.
4. A patient can grant or revoke access for a doctor.
5. An authorized doctor can add a medical record.
6. The Solidity smart contract checks the required permissions.
7. Blockchain transactions record the relevant information and events.
8. Record hashes can be used to verify the integrity of medical records.

## 📂 Project Structure

```text
MediChain/
│
├── blockchain/
│   ├── contracts/
│   │   └── MediChain.sol
│   ├── scripts/
│   │   └── deploy.ts
│   ├── test/
│   │   └── MediChain.ts
│   ├── hardhat.config.ts
│   └── package.json
│
├── src/
│   ├── blockchain/
│   │   ├── contract.js
│   │   └── wallet.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── AccessManagement.jsx
│   │   ├── AddMedicalRecord.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── PatientDashboard.jsx
│   │   ├── MedicalRecords.jsx
│   │   └── Profile.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/tannusingh191206-boop/MediChain.git
cd MediChain/medichain
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The Vite development server will provide a local URL, usually similar to:

```text
http://localhost:5173
```

## ⛓️ Running the Local Blockchain

Open a separate terminal and go to the blockchain directory:

```bash
cd blockchain
```

Start the Hardhat local blockchain:

```bash
npx hardhat node
```

Keep this terminal running.

## 📜 Deploy the Smart Contract

In another terminal:

```bash
cd blockchain
npx hardhat run scripts/deploy.ts --network localhost
```

The command will deploy the MediChain smart contract to the local Hardhat network and display the contract address.

The frontend contract configuration should use the deployed contract address and ABI.

## 🦊 MetaMask Configuration

For local development, MetaMask can be connected to the Hardhat local network.

Typical local network settings are:

```text
Network Name: MediChain Local
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Currency Symbol: ETH
```

For testing, a Hardhat development account can be imported into MetaMask using one of the private keys displayed by:

```bash
npx hardhat node
```

> ⚠️ Hardhat accounts and private keys are for local development only. Never use or publish these keys for a real network.

## 🧪 Testing

The smart contract can be tested using Hardhat:

```bash
cd blockchain
npx hardhat test
```

The tests verify important smart-contract functionality such as deployment, access management, and medical-record operations.

## 🌐 Deployment

The frontend can be deployed using Vercel or another web-hosting service.

The blockchain used during development is a local Hardhat network. A production deployment would require a suitable public blockchain/test network and additional security considerations.

## ⚠️ Limitations

This project is currently a prototype/demo implementation. It is not intended to store real patient medical information.

A production healthcare system would require:

* Strong user identity verification.
* Encrypted off-chain medical storage.
* Secure authentication and authorization.
* Hospital/healthcare-provider integration.
* Privacy and regulatory compliance.
* A carefully designed public blockchain or permissioned blockchain architecture.
* Comprehensive security auditing.

## 🔮 Future Scope

Future improvements could include:

* Encrypted IPFS or secure cloud storage.
* Public testnet/mainnet deployment.
* Mobile application.
* Hospital and laboratory integration.
* Advanced identity verification.
* Complete document-hash verification.
* Appointment and prescription management.
* Improved audit and monitoring features.

## 📌 Conclusion

MediChain demonstrates how blockchain technology can be integrated with a modern web application to improve healthcare record integrity, access control, and transparency.

The project combines React.js, Solidity, Hardhat, Ethers.js, and MetaMask to create a prototype healthcare record management system where blockchain provides a trusted layer for permissions, record hashes, and important transaction activity.

## 👩‍💻 Project

**MediChain – Blockchain-Based Healthcare Record Management System**

Built as an academic/project prototype to demonstrate the application of blockchain technology in healthcare record management.

