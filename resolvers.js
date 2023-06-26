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
    getAllProfile: async () => {
      const profiles = await fetchAllProfile();
      return profiles.map((profile) => ({
        ...profile,
        followersCount: profile.followers.length,
        followingCount: profile.following.length,
      }));
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
    followProfile: async (_, { profileId, followedProfileId }) => {
      const profile = await followProfile(profileId, followedProfileId);
      return profile.id;
    },
  },
  Profile: {
    followers: async (profile) => {
      const followers = await Promise.all(
        profile.followers.map((followerId) => fetchProfileById(followerId))
      );
      return followers;
    },
    following: async (profile) => {
      const following = await Promise.all(
        profile.following.map((followingId) => fetchProfileById(followingId))
      );
      return following;
    },
  },
};

export default resolvers;
