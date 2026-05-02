/**
 * `[...slug].astro` 用: `/{lang}/{category}/...` のスラッグ部分（subcategory/slug を含む）。
 * frontmatter の `slug` がフォルダ名のみで、`post.id` がより長いパスのときは id 側を優先する。
 * （`/ja/soundproof-room/knowledge/foo/` と内部リンク・フォルダ構造を一致させる）
 */
export function resolvePostSlugSegment(post: {
  id: string;
  data: { lang?: string; category: string; slug?: string };
}): string | undefined {
  const preferredSlug = post.data.slug?.trim();
  const parts = post.id.split('/');
  const lang = post.data.lang || 'ja';
  const category = post.data.category;
  const slugParts = parts.filter((p: string) => p !== lang && p !== category && p !== 'index');
  const fromPath = slugParts.length > 0 ? slugParts.join('/') : undefined;

  if (preferredSlug && fromPath) {
    if (fromPath === preferredSlug || fromPath.endsWith(`/${preferredSlug}`)) {
      return fromPath;
    }
  }

  if (preferredSlug) return preferredSlug;
  return fromPath;
}
