import { getCollection } from 'astro:content';

export async function GET() {
  const knowledge = await getCollection('knowledge');
  const solutions = await getCollection('solutions');
  const useCase = await getCollection('use-case');
  const company = await getCollection('company');
  const column = await getCollection('column');

  const allPosts = [...knowledge, ...solutions, ...useCase, ...company, ...column];

  const searchIndex = allPosts.map(post => {
    const parts = post.id.split('/');
    const lang = post.data.lang || 'ja';
    const category = post.collection;
    const slugParts = parts.filter(p => p !== lang && p !== 'index');
    const slug = slugParts.join('/');
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
