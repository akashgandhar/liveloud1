import { profiles } from "./data.js";

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
    profileInterests: () => {
      // Extract profile interests from all profiles
      const interests = profiles.flatMap((profile) => profile.interests);
      // Remove duplicate interests and return the result
      return [...new Set(interests)];
    },
    profiles: (_, { request }) => {
      // Apply filters based on the request
      const filteredProfiles = profiles
        .filter((profile) => {
          if (request.profileIds && request.profileIds.length > 0) {
            return request.profileIds.includes(profile.id);
          }
          if (request.ownedBy && request.ownedBy.length > 0) {
            return request.ownedBy.includes(profile.ownedBy);
          }
          if (request.handles && request.handles.length > 0) {
            return request.handles.includes(profile.handle);
          }
          return true;
        });

      // Apply pagination
      const { limit, cursor } = request;
      const startIndex = cursor ? filteredProfiles.findIndex((profile) => profile.id === cursor) + 1 : 0;
      const endIndex = limit ? startIndex + limit : undefined;
      const paginatedProfiles = filteredProfiles.slice(startIndex, endIndex);

      return {
        items: paginatedProfiles,
        pageInfo: {
          prev: startIndex > 0 ? filteredProfiles[startIndex - 1].id : null,
          next: endIndex < filteredProfiles.length ? filteredProfiles[endIndex].id : null,
          totalCount: filteredProfiles.length,
        },
      };
    },
    
  },
  
  
};

export default resolvers;
