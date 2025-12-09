# Token Tuner Monorepo

This repository is the official monorepo for 
[Token Tuner](https://tokentuner.xyz).

## Directory Structure

The code is divided into three main directories, the web-server, the onchain 
elements, and the indexer.

- [`server`](./server) This contains code for the web-server. Uses Django as 
the backend framework to allow for [htmx](https://htmx.org). 
[See why](./server/README.md#why-htmx).

- [`onchain`](./onchain) This directory contains all code related to any 
onchain elements. For now, these include the two sub-directories,
  - [`sol`](./onchain/sol/) Contains all Solidity contracts for EVM targets
  - [`cdc`](./onchain/cdc/) Contains all Cadence code to leverage FLOW's [Forte
  upgrades](https://developers.flow.com/blockchain-development-tutorials/forte/scheduled-transactions/scheduled-transactions-introduction).

- [`indexer`](./indexer) This directory contains the code for the self-hosted 
indexer, [HyperIndex](https://docs.envio.dev/docs/HyperIndex/self-hosting).

## License Information

All code is currently licensed under [Apache-2.0](./LICENSE). This however is
subject to change.