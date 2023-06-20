// resolvers.js

import {
  createUser,
  fetchAllProfile,
  fetchProfileById,
  fetchPublicationById,
  fetchUserById,
  followProfile,
} from "./functions.js";

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      const user = await fetchUserById(id);
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        posts: user.posts,
      };
    },
    getProfile: async (_, { id }) => {
      const profile = await fetchProfileById(id);
      return {
        id: profile.id,
        username: profile.username,
        name: profile.name,
        bio: profile.bio,
        avatarURL: profile.avatarURL,
        coverURL: profile.coverURL,
        followersCount: profile.followersCount,
        followingCount: profile.followingCount,
        postsCount: profile.postsCount,
      };
    },
    getAllProfile: async (_) => {
      const profiles = await fetchAllProfile();
      return profiles;
    },
    getPublication: async (_, { id }) => {
      const publication = await fetchPublicationById(id);
      const profile = await fetchProfileById(publication.profileId);
      return {
        id: publication.id,
        profile: {
          id: profile.id,
          username: profile.username,
          name: profile.name,
          avatarURL: profile.avatarURL,
        },
        title: publication.title,
        content: publication.content,
        mediaURLs: publication.mediaURLs,
        createdAt: publication.createdAt,
        likesCount: publication.likesCount,
        commentsCount: publication.commentsCount,
        likedByMe: publication.likedByMe,
        collectedByMe: publication.collectedByMe,
      };
    },
  },
  Mutation: {
    createProfile: async (_, { username, name, bio, avatarURL, coverURL }) => {
      const profile = await createUser(
        username,
        name,
        bio,
        avatarURL,
        coverURL
      );
      return {
        id: profile.id,
        username: profile.username,
        name: profile.name,
        bio: profile.bio,
        avatarURL: profile.avatarURL,
        coverURL: profile.coverURL,
        followersCount: profile.followersCount,
        followingCount: profile.followingCount,
        postsCount: profile.postsCount,
      };
    },
    followProfile: ({ profileId, followedProfileId }) => {
      return followProfile(profileId, followedProfileId);
    },
  },
  User: {
    posts: async (user) => {
      const userPosts = await fetchUserPosts(user.id);
      return userPosts;
    },
  },
};

export default resolvers;
