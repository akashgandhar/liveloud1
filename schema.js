// schema.js
import { gql } from "apollo-server";

const typeDefs = gql`
  type Profile {
    id: ID!
    username: String!
    name: String!
    bio: String
    avatarURL: String
    coverURL: String
    followersCount: Int!
    followingCount: Int!
    postsCount: Int!
    followers:[Profile]
    following:[Profile]
    
  }

  type Publication {
  id: ID!
  profile: Profile!
  title: String!
  content: String!
  mediaURLs: [String]
  createdAt: String!
  likesCount: Int!
  commentsCount: Int!
  likedByMe: Boolean!
  collectedByMe: Boolean!
}

  type User {
    id: ID!
    name: String!
    username: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    content: String!
    author: User!
    createdAt: String!
  }

  type Mutation {
    createProfile(username: String!, name: String!, bio: String, avatarURL: String, coverURL: String): Profile!,
    followProfile(profileId: ID!, followedProfileId: ID!): String!,
  }

  type Query {
    getUser(id: ID!): User,
    getProfile(id: ID!): Profile,
    getPublication(id: ID!): Publication,
    getAllProfile: [Profile]
  }
`;

export default typeDefs;
