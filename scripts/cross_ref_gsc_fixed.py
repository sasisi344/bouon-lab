import os
import csv
from pathlib import Path

# Paths
posts_ja_dir = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\src\content\posts\ja")
gsc_csv = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\dataset\bouonlab-20260315-sc - SAS_2026-03-15_16-56-46.csv")

# 1. Get all local slugs (JA)
# Articles are directories containing index.mdx
local_slugs = set()
categories = ["knowledge", "rent", "room"]
for cat in categories:
    cat_dir = posts_ja_dir / cat
    if cat_dir.exists():
        for p in cat_dir.iterdir():
            if p.is_dir():
                local_slugs.add(p.name)

# 2. Get GSC slugs and impressions
gsc_data = {}
if gsc_csv.exists():
    with open(gsc_csv, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row["Page"]
            if "/posts/" in url:
                slug = url.split("/posts/")[-1].strip("/")
                impressions = int(row["Impressions"])
                gsc_data[slug] = gsc_data.get(slug, 0) + impressions

# 3. Compare
ghost_articles = []
low_perf_articles = []
good_perf_articles = []

for slug in local_slugs:
    impressions = gsc_data.get(slug, 0)
    if impressions == 0:
        ghost_articles.append(slug)
    elif impressions < 20:
        low_perf_articles.append((slug, impressions))
    else:
        good_perf_articles.append((slug, impressions))

print(f"Total Local JA Articles: {len(local_slugs)}")
print(f"Ghost Articles (0 impressions): {len(ghost_articles)}")
print(f"Low Performance (< 20 impressions): {len(low_perf_articles)}")
print(f"Good Performance (>= 20 impressions): {len(good_perf_articles)}")

if ghost_articles:
    print("\n--- Example Ghost Articles (0 impressions) ---")
    for s in sorted(ghost_articles)[:15]:
        print(f"- {s}")

if low_perf_articles:
    print("\n--- Example Low Performance (1-19 impressions) ---")
    for s, i in sorted(low_perf_articles, key=lambda x: x[1], reverse=True)[:15]:
        print(f"- {s}: {i}")
