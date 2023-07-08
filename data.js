function getData() {
  // Implement the logic to fetch data from your database or external API
  return null;
}

function updateData() {
  // Implement the logic to update data in your database or external API
  return null;
}

export const dummyProfiles = [
  {
    id: "profile1",
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet.",
    handle: "johndoe",
    picture: {
      onChain: {
        contractAddress: "0xcontract1",
        tokenId: "token1",
        uri: "https://example.com/image1.jpg",
        chainId: 1,
        verified: true,
      },
      original: {
        uri: "https://example.com/image1.jpg",
      },
    },
    ownedBy: "0xowner1",
    dispatcher: {
      address: "0xdispatcher1",
      canUseRelay: true,
      sponsor: false,
    },
    stats: {
      id: "profile1",
      totalFollowers: 100,
      totalFollowing: 50,
      totalPosts: 200,
      totalComments: 300,
      totalMirrors: 150,
      totalPublications: 100,
      totalCollects: 50,
      commentsTotal: 50,
      postsTotal: 100,
      mirrorsTotal: 75,
      publicationsTotal: 75,
    },
    onChainIdentity: {
      proofOfHumanity: true,
      ens: {
        name: "johndoe.eth",
      },
      sybilDotOrg: {
        verified: true,
        source: {
          twitter: {
            handle: "@johndoe",
          },
        },
      },
      worldcoin: {
        isHuman: true,
      },
    },
    interests: ["Music", "Sports"],
  },
  // Add more profiles as needed
];


export { getData, updateData };
