import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  featuredImage: string;
  categories: string[];
  tags: string[];
  excerpt: string;
  readTime: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title,
        author: matterResult.data.author,
        authorRole: matterResult.data.authorRole,
        date: matterResult.data.date,
        featuredImage: matterResult.data.featuredImage,
        categories: matterResult.data.categories || [],
        tags: matterResult.data.tags || [],
        excerpt: matterResult.data.excerpt || '',
        readTime: matterResult.data.readTime || '',
        content: matterResult.content,
      } as BlogPost;
    });

  // Sort posts by date descending
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Since Next.js App Router relies on this data for Static Generation, we read it
// at module load time. Alternatively, we could export getter functions that read it.
export const blogPosts: BlogPost[] = getAllPosts();

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) =>
    post.categories.some((c) => c.toLowerCase() === category.toLowerCase())
  );
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  blogPosts.forEach((post) =>
    post.categories.forEach((c) => categories.add(c))
  );
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
