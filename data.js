function getData() {
  // Implement the logic to fetch data from your database or external API
  return null;
}

function updateData() {
  // Implement the logic to update data in your database or external API
  return null;
}

// data.js

const profiles = [
  {
    id: 'profile1',
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    handle: 'johndoe',
    picture: {
      onChain: {
        contractAddress: '0x1234567890abcdef',
        tokenId: '123',
        uri: 'https://example.com/profile1/image',
        chainId: 1,
        verified: true,
      },
      original: {
        uri: 'https://example.com/profile1/original',
      },
      optimized: {
        uri: 'https://example.com/profile1/optimized',
      },
      small: {
        uri: 'https://example.com/profile1/small',
      },
    },
    ownedBy: '0xabcdef1234567890',
    dispatcher: {
      address: '0xabcdef1234567890',
      canUseRelay: true,
      sponsor: false,
    },
    stats: {
      id: 'profile1',
      totalFollowers: 1000,
      totalFollowing: 500,
      totalPosts: 200,
      totalComments: 100,
      totalMirrors: 50,
      totalPublications: 10,
      totalCollects: 20,
      commentsTotal: {
        forSources: ['source1', 'source2'],
      },
      postsTotal: {
        forSources: ['source1', 'source2'],
      },
      mirrorsTotal: {
        forSources: ['source1', 'source2'],
      },
      publicationsTotal: {
        forSources: ['source1', 'source2'],
      },
    },
    onChainIdentity: {
      proofOfHumanity: true,
      ens: {
        name: 'johndoe.eth',
      },
      sybilDotOrg: {
        verified: true,
        source: {
          twitter: {
            handle: 'johndoe_twitter',
          },
        },
      },
      worldcoin: {
        isHuman: true,
      },
    },
    interests: ['Sports', 'Music'],
    isFollowedByMe: true,
    isFollowing: true,
  },
  {
    id: 'profile2',
    name: 'Jane Smith',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    handle: 'janesmith',
    picture: {
      onChain: {
        contractAddress: '0x1234567890abcdef',
        tokenId: '456',
        uri: 'https://example.com/profile2/image',
        chainId: 1,
        verified: true,
      },
      original: {
        uri: 'https://example.com/profile2/original',
      },
      optimized: {
        uri: 'https://example.com/profile2/optimized',
      },
      small: {
        uri: 'https://example.com/profile2/small',
      },
    },
    ownedBy: '0xabcdef1234567890',
    dispatcher: {
      address: '0xabcdef1234567890',
      canUseRelay: true,
      sponsor: false,
    },
    stats: {
      id: 'profile2',
      totalFollowers: 2000,
      totalFollowing: 300,
      totalPosts: 150,
      totalComments: 50,
      totalMirrors: 20,
      totalPublications: 5,
      totalCollects: 10,
      commentsTotal: {
        forSources: ['source1', 'source2'],
      },
      postsTotal: {
        forSources: ['source1', 'source2'],
      },
      mirrorsTotal: {
        forSources: ['source1', 'source2'],
      },
      publicationsTotal: {
        forSources: ['source1', 'source2'],
      },
    },
    onChainIdentity: {
      proofOfHumanity: true,
      ens: {
        name: 'janesmith.eth',
      },
      sybilDotOrg: {
        verified: true,
        source: {
          twitter: {
            handle: 'janesmith_twitter',
          },
        },
      },
      worldcoin: {
        isHuman: true,
      },
    },
    interests: ['Art', 'Technology'],
    isFollowedByMe: false,
    isFollowing: true,
  },
  {
    id: 'profile3',
    name: 'Michael Johnson',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    handle: 'michaeljohnson',
    picture: {
      onChain: {
        contractAddress: '0x1234567890abcdef',
        tokenId: '789',
        uri: 'https://example.com/profile3/image',
        chainId: 1,
        verified: true,
      },
      original: {
        uri: 'https://example.com/profile3/original',
      },
      optimized: {
        uri: 'https://example.com/profile3/optimized',
      },
      small: {
        uri: 'https://example.com/profile3/small',
      },
    },
    ownedBy: '0xabcdef1234567890',
    dispatcher: {
      address: '0xabcdef1234567890',
      canUseRelay: true,
      sponsor: false,
    },
    stats: {
      id: 'profile3',
      totalFollowers: 500,
      totalFollowing: 800,
      totalPosts: 100,
      totalComments: 80,
      totalMirrors: 10,
      totalPublications: 3,
      totalCollects: 5,
      commentsTotal: {
        forSources: ['source1', 'source2'],
      },
      postsTotal: {
        forSources: ['source1', 'source2'],
      },
      mirrorsTotal: {
        forSources: ['source1', 'source2'],
      },
      publicationsTotal: {
        forSources: ['source1', 'source2'],
      },
    },
    onChainIdentity: {
      proofOfHumanity: true,
      ens: {
        name: 'michaeljohnson.eth',
      },
      sybilDotOrg: {
        verified: true,
        source: {
          twitter: {
            handle: 'michaeljohnson_twitter',
          },
        },
      },
      worldcoin: {
        isHuman: true,
      },
    },
    interests: ['Photography', 'Fitness'],
    isFollowedByMe: true,
    isFollowing: false,
  },
  {
    id: 'profile4',
    name: 'Sarah Thompson',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    handle: 'sarahthompson',
    picture: {
      onChain: {
        contractAddress: '0x1234567890abcdef',
        tokenId: '987',
        uri: 'https://example.com/profile4/image',
        chainId: 1,
        verified: true,
      },
      original: {
        uri: 'https://example.com/profile4/original',
      },
      optimized: {
        uri: 'https://example.com/profile4/optimized',
      },
      small: {
        uri: 'https://example.com/profile4/small',
      },
    },
    ownedBy: '0xabcdef1234567890',
    dispatcher: {
      address: '0xabcdef1234567890',
      canUseRelay: true,
      sponsor: false,
    },
    stats: {
      id: 'profile4',
      totalFollowers: 300,
      totalFollowing: 600,
      totalPosts: 80,
      totalComments: 30,
      totalMirrors: 5,
      totalPublications: 2,
      totalCollects: 3,
      commentsTotal: {
        forSources: ['source1', 'source2'],
      },
      postsTotal: {
        forSources: ['source1', 'source2'],
      },
      mirrorsTotal: {
        forSources: ['source1', 'source2'],
      },
      publicationsTotal: {
        forSources: ['source1', 'source2'],
      },
    },
    onChainIdentity: {
      proofOfHumanity: true,
      ens: {
        name: 'sarahthompson.eth',
      },
      sybilDotOrg: {
        verified: true,
        source: {
          twitter: {
            handle: 'sarahthompson_twitter',
          },
        },
      },
      worldcoin: {
        isHuman: true,
      },
    },
    interests: ['Travel', 'Food'],
    isFollowedByMe: false,
    isFollowing: false,
  },
  {
    id: 'profile5',
    name: 'Emily Wilson',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    handle: 'emilywilson',
    picture: {
      onChain: {
        contractAddress: '0x1234567890abcdef',
        tokenId: '654',
        uri: 'https://example.com/profile5/image',
        chainId: 1,
        verified: true,
      },
      original: {
        uri: 'https://example.com/profile5/original',
      },
      optimized: {
        uri: 'https://example.com/profile5/optimized',
      },
      small: {
        uri: 'https://example.com/profile5/small',
      },
    },
    ownedBy: '0xabcdef1234567890',
    dispatcher: {
      address: '0xabcdef1234567890',
      canUseRelay: true,
      sponsor: false,
    },
    stats: {
      id: 'profile5',
      totalFollowers: 100,
      totalFollowing: 200,
      totalPosts: 50,
      totalComments: 20,
      totalMirrors: 2,
      totalPublications: 1,
      totalCollects: 2,
      commentsTotal: {
        forSources: ['source1', 'source2'],
      },
      postsTotal: {
        forSources: ['source1', 'source2'],
      },
      mirrorsTotal: {
        forSources: ['source1', 'source2'],
      },
      publicationsTotal: {
        forSources: ['source1', 'source2'],
      },
    },
    onChainIdentity: {
      proofOfHumanity: true,
      ens: {
        name: 'emilywilson.eth',
      },
      sybilDotOrg: {
        verified: true,
        source: {
          twitter: {
            handle: 'emilywilson_twitter',
          },
        },
      },
      worldcoin: {
        isHuman: true,
      },
    },
    interests: ['Fashion', 'Nature'],
    isFollowedByMe: false,
    isFollowing: false,
  },
];

export { profiles };



export { getData, updateData };
