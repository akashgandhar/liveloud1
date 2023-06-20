// data.js

import { Profiles, posts, publications } from "./data.js";

// Function to fetch a profile by ID
async function fetchProfileById(id) {
  return Profiles.find((profile) => profile.id === id);
}
async function fetchAllProfile() {
  return Profiles.map((profile) => ({
    id: profile.id,
    username: profile.username,
    name: profile.name,
    bio: profile.bio,
    avatarURL: profile.avatarURL,
    coverURL: profile.coverURL,
    followersCount: profile.followersCount,
    followingCount: profile.followingCount,
    postsCount: profile.postsCount,
  }));
}
async function fetchPublicationById(id) {
  return publications.find((publication) => publication.id === id);
}

// Function to fetch a user by ID
async function fetchUserById(id) {
  return users.find((user) => user.id === id);
}

// Function to create a new user
async function createUser(name, username) {
  const newUser = { id: String(users.length + 1), name, username };
  users.push(newUser);
  return newUser;
}

// Function to fetch posts for a user
async function fetchUserPosts(userId) {
  return posts.filter((post) => post.authorId === userId);
}

async function followProfile(profileId, followedProfileId) {
  const profile = await fetchProfileById(profileId);
  const followedProfile = await fetchProfileById(followedProfileId);

  if (profile && followedProfile) {
    profile.following.push(followedProfile);
    followedProfile.followers.push(profile);
  }
  return profile.id;
}

export {
  fetchUserById,
  createUser,
  fetchUserPosts,
  fetchProfileById,
  fetchPublicationById,
  fetchAllProfile,
  followProfile,
};
