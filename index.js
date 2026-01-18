import { connectRPC } from "./rpc.client.js";
import { loadUsers } from "./user.registry.js";
import { checkEligibility } from "./eligibility.engine.js";
import { distributeNFTs } from "./nft.distributor.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 NFT Airdrop Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const users = loadUsers();

const eligible = checkEligibility(users);
const distribution = distributeNFTs(eligible, "GenesisNFT");

generateReport(distribution);
