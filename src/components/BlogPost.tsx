






import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../constants/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/" className="mt-4 inline-block bg-emerald-700 text-white px-4 py-2 rounded">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 px-6">
      <article className="py-8 mt-4 max-w-3xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
        />
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <div 
          className="prose prose-lg max-w-none prose-headings:text-emerald-900 prose-a:text-emerald-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-8">
          <Link to="/" className="inline-block bg-emerald-700 text-white px-4 py-2 rounded">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
