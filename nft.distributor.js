export function distributeNFTs(users, nftName) {
  console.log("Distributing NFTs...");

  return users.map(user => {
    return {
      address: user.address,
      nft: nftName,
      claimed: false
    };
  });
}
