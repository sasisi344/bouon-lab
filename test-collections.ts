
import { getCollection } from 'astro:content';

async function test() {
  const company = await getCollection('company');
  console.log('Company collection size:', company.length);
  company.forEach(post => {
    console.log('Post ID:', post.id);
    console.log('Post Collection:', post.collection);
    console.log('Post Lang:', post.data.lang);
  });
}

test();
