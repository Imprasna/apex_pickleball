import { blogPosts } from "./blogPosts";

export const posts = Object.entries(blogPosts).map(([id, post]) => ({
  id,
  title: post.title,
  description: post.content.substring(0, 150) + "...", // Shortened preview
  image: post.image,
  date: post.date,
  readTime: post.readTime,
}));
