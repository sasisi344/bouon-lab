import { getCollection } from 'astro:content';

export async function GET() {
  const knowledge = await getCollection('knowledge');
  const solutions = await getCollection('solutions');
  const useCase = await getCollection('use-case');
  const company = await getCollection('company');
  const column = await getCollection('column');

  const allPosts = [...knowledge, ...solutions, ...useCase, ...company, ...column]
    .filter(post => post.data.draft !== true);

  const searchIndex = allPosts.map(post => {
    const lang = post.data.lang || 'ja';
    const category = post.collection;
    const preferredSlug = post.data.slug?.trim();
    const parts = post.id.split('/');
    const slugParts = parts.filter(p => p !== lang && p !== 'index');
    const fallbackSlug = slugParts.join('/');
    const slug = preferredSlug || fallbackSlug;
    const url = slug ? `/${lang}/${category}/${slug}/` : `/${lang}/${category}/`;

    return {
      title: post.data.title,
      description: post.data.description,
      url: url,
      lang: lang,
      category: category.toUpperCase(),
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
