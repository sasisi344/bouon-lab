import { getCollection } from 'astro:content';
import { resolvePostSlugSegment } from '../../utils/resolvePostSlugSegment';

export async function GET() {
  const allPosts = (await getCollection('posts'))
    .filter((post) => post.data.draft !== true);

  const searchIndex = allPosts.map(post => {
    const lang = post.data.lang || 'ja';
    const category = post.data.category;
    const slug = resolvePostSlugSegment(post) ?? '';
    const url = slug ? `/${lang}/${category}/${slug}/` : `/${lang}/${category}/`;

    return {
      title: post.data.title,
      description: post.data.description,
      url: url,
      lang: lang,
      category: [post.data.category, post.data.subcategory].filter(Boolean).join(' / '),
      tags: post.data.tags || []
    };
  });

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
