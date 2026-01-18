export function generateReport(distribution) {
  console.log("----- NFT Airdrop Report -----");

  distribution.forEach(entry => {
    console.log("User:", entry.address, "NFT:", entry.nft, "Claimed:", entry.claimed);
  });

  console.log("------------------------------");
}
