<p align='center'>
    <img src='./img/logo_square.png'/>
</p>

# Hecobase

Hecobase is a starter project for connecting and testing your smart contracts on Heco networks (testnet and mainnet).

Bootstrap your projects and get deploying on the Heco main and test networks in no time. Use Hecobase to:

1. Create and connect wallets.
2. Connect to existing deployed Heco smart contracts.
3. Call methods on your existing smart contracts.

Going after the <a href="https://hecochain-hackathon.devpost.com/rules" target="_blank">Toolkits on HECO</a> category challenge for the hecochain hackathon.

## Motivation

## Deploying and linking contract

- Update hardhat.config.js to your target network (Heco or other Eth based platform).
- To use deploy script, ensure you have a heco wallet with sufficient funds.
- Update TARGET_NETWORK to point to same network.

## Quick Start

Prerequisites: [Node](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork 🏗 hecobase:

```bash
git clone https://github.com/cbonoz/hecobase.git
```

> install and start your 👷‍ Hardhat chain:

```bash
cd hecobase
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd hecobase
yarn start
```

> in a third terminal window, 🛰 deploy your contract:

```bash
cd hecobase
yarn deploy
```

🔏 Edit your smart contract `YourHecoContract.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app

## Useful links

### Mainnet:

- https://docs.hecochain.com/#/en-us/mainnet

### Testnet:

- https://docs.hecochain.com/#/en-us/testnet
- https://scan-testnet.hecochain.com/faucet

Heco contracts

- https://testnet.hecoinfo.com/address/0x7af326b6351c8a9b8fb8cd205cbe11d4ac5fa836#contracts
