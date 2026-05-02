import csv
from pathlib import Path

# Paths
posts_ja_dir = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\src\content\posts\ja")
gsc_csv = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\dataset\bouonlab-20260315-sc - SAS_2026-03-15_16-56-46.csv")

# 1. Get all local slugs (JA)
local_slugs = set()
if posts_ja_dir.exists():
    for p in posts_ja_dir.rglob("*.md"):
        local_slugs.add(p.stem)
else:
    print(f"Error: {posts_ja_dir} does not exist")

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
else:
    print(f"Error: {gsc_csv} does not exist")

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
    for s in sorted(ghost_articles)[:10]:
        print(f"- {s}")
