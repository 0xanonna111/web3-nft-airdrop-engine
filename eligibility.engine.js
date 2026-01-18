export function checkEligibility(users) {
  console.log("Checking NFT airdrop eligibility...");

  return users.filter(user => user.nftCount >= 1);
}
