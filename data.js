// data.js

// Sample data representing users and posts
const users = [
  { id: "1", name: "John Doe", username: "johndoe" },
  { id: "2", name: "Jane Smith", username: "janesmith" },
];

const Profiles = [
  {
    id: "123456789",
    username: "john_doe",
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatarURL: "https://example.com/avatar.png",
    coverURL: "https://example.com/cover.png",
    followersCount: 1000,
    followingCount: 500,
    postsCount: 250,
    followers: [],
    following: [],
  },
  {
    id: "987654321",
    username: "jane_smith",
    name: "Jane Smith",
    bio: "Passionate about art and photography.",
    avatarURL: "https://example.com/avatar/jane_smith.png",
    coverURL: "https://example.com/cover/jane_smith.png",
    followersCount: 1500,
    followingCount: 700,
    postsCount: 300,
    followers: [],
    following: [],
  },
];

const publications = [
  {
    id: "1",
    profileId: "123456789",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mediaURLs: [
      "https://example.com/media1.png",
      "https://example.com/media2.png",
    ],
    createdAt: "2023-06-16",
    likesCount: 100,
    commentsCount: 50,
    likedByMe: true,
    collectedByMe: false,
  },
];

const posts = [
  { id: "1", content: "Hello, world!", authorId: "1", createdAt: "2023-06-16" },
  {
    id: "2",
    content: "GraphQL is awesome!",
    authorId: "2",
    createdAt: "2023-06-15",
  },
  {
    id: "3",
    content: "Working on my social media app!",
    authorId: "1",
    createdAt: "2023-06-14",
  },
];

export { Profiles, publications, posts };
