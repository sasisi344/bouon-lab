import os
import csv
from pathlib import Path
import re

# Paths
post_list_md = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\dataset\post-list.md")
gsc_csv = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\dataset\bouonlab-20260315-sc - SAS_2026-03-15_16-56-46.csv")

# 1. Load context from post-list.md
# We want full titles if possible
slug_to_title = {}
slug_to_date = {}
if post_list_md.exists():
    with open(post_list_md, mode="r", encoding="utf-8") as f:
        for line in f:
            match = re.search(r'\| (.*) \| `([^`]+)` \| (.*) \|', line)
            if match:
                title = match.group(1).strip()
                slug = match.group(2).strip()
                date = match.group(3).strip()
                slug_to_title[slug] = title
                slug_to_date[slug] = date

# 2. Load GSC Data
gsc_data = {}
if gsc_csv.exists():
    with open(gsc_csv, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row["Page"]
            if "/posts/" in url:
                slug = url.split("/posts/")[-1].strip("/")
                gsc_data[slug] = gsc_data.get(slug, 0) + int(row["Impressions"])

# 3. Categorize
keep_list = []      # Imp >= 20
delete_list = []    # Legacy Ghost (Imp < 1, Date < 2026)
review_list = []    # Low Performance (1-19)
new_ghost_list = [] # New (Imp < 1, Date >= 2026) -> Keep temporarily

for slug, date in slug_to_date.items():
    imp = gsc_data.get(slug, 0)
    title = slug_to_title.get(slug, slug)
    
    if imp >= 20:
        keep_list.append((slug, title, imp, date))
    elif imp > 0:
        review_list.append((slug, title, imp, date))
    else:
        # Ghost
        if date < "2026-01-01":
            delete_list.append((slug, title, date))
        else:
            new_ghost_list.append((slug, title, date))

# Sort
keep_list.sort(key=lambda x: x[2], reverse=True)
delete_list.sort(key=lambda x: x[2]) # Sort by date

# Output to markdown artifact
output_path = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\dataset\content_cleanup_list.md")

with open(output_path, mode="w", encoding="utf-8") as f:
    f.write("# 記事整理リスト（残す記事・消す記事・統合検討記事）\n\n")
    f.write(f"生成日: 2026-03-16\n\n")
    
    f.write("## 1. 残す記事 (Keep: Imp >= 20)\n")
    f.write("| Slug | タイトル | Impressions | 公開日 |\n| :--- | :--- | :---: | :--- |\n")
    for s, t, i, d in keep_list:
        f.write(f"| `{s}` | {t} | {i} | {d} |\n")
    
    f.write("\n## 2. 暫定維持 (New Ghost: 2026年以降公開、Imp 0)\n")
    f.write("| Slug | タイトル | 公開日 |\n| :--- | :--- | :--- |\n")
    for s, t, d in new_ghost_list:
        f.write(f"| `{s}` | {t} | {d} |\n")

    f.write("\n## 3. 統合検討記事 (Review: Imp 1-19)\n")
    f.write("| Slug | タイトル | Impressions | 公開日 |\n| :--- | :--- | :---: | :--- |\n")
    for s, t, i, d in sorted(review_list, key=lambda x: x[2], reverse=True):
        f.write(f"| `{s}` | {t} | {i} | {d} |\n")

    f.write("\n## 4. 消す記事 (Delete: Legacy Ghost, Imp 0, 2025以前)\n")
    f.write("| Slug | タイトル | 公開日 |\n| :--- | :--- | :--- |\n")
    for s, t, d in delete_list:
        f.write(f"| `{s}` | {t} | {d} |\n")

print(f"List generated at {output_path}")
