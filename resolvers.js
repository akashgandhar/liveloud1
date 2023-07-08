import { dummyProfiles } from "./data.js";

const resolvers = {
  Query: {
    rel: (_, { request }) => {
      // Implementation for the 'rel' query
      // Fetch and return data based on the 'request' argument
      return null;
    },
    cur: (_, { request }) => {
      // Implementation for the 'cur' query
      // Fetch and return data based on the 'request' argument
      
      return ['Currency1', 'Currency2', 'Currency3'];
    },
    gdm: (_, { request }) => {
      // Implementation for the 'gdm' query
      // Fetch and return data based on the 'request' argument
      return ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'];
    },
    gct: (_, { request }) => {
      // Implementation for the 'gct' query
      // Fetch and return data based on the 'request' argument
      return ['Value1', 'Value2', 'Value3'];
    },
    iss: (_, { request }) => {
      // Implementation for the 'iss' query
      // Fetch and return data based on the 'request' argument
      return {
        ss: true,
        dd: false,
      };
    },
    challenge: (_, { request }) => {
      // Implementation for the 'challenge' query
      // Fetch and return data based on the 'request' argument
      return {
        text: 'Authentication challenge',
      };
    },
    verify: (_, { request }) => {
      const { accessToken } = request;
      // Perform verification logic based on the accessToken
      // Return a boolean indicating the verification result
      return true;
    },
    txIdToTxHash: (_, { txId }) => {
      // Perform logic to convert txId to TxHash
      return `TxHash-${txId}`;
    },
    claimableHandles: () => {
      // Fetch and return claimable handles data
      return {
        reservedHandles: [
          {
            id: 'claimableHandleId1',
            handle: 'Handle1',
            source: 'Source1',
            expiry: '2023-07-31T12:00:00Z',
          },
          {
            id: 'claimableHandleId2',
            handle: 'Handle2',
            source: 'Source2',
            expiry: '2023-07-31T12:00:00Z',
          },
        ],
        canClaimFreeTextHandle: true,
      };
    },
    claimableStatus: () => {
      // Perform logic to determine the claimable status
      return 'ALREADY_CLAIMED';
    },
    isIDKitPhoneVerified: () => {
      // Perform logic to check if IDKit phone is verified
      return true;
    },

    exploreProfiles: (_, { request }) => {
      // Perform logic to fetch explore profiles based on the request
      // You can use the request parameters (limit, cursor, sortCriteria, etc.) to customize the query

      // Get the explore profiles from the dummy data
      const exploreProfileData = dummyProfiles;

      return {
        items: exploreProfileData,
        pageInfo: {
          prev: null,
          next: null,
          totalCount: exploreProfileData.length,
        },
      };
    },
    
  },
};

export default resolvers;
