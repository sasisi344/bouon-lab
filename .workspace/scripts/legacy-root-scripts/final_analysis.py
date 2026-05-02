import os
import csv
from pathlib import Path
import re

# Paths
posts_ja_dir = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\src\content\posts\ja")
gsc_csv = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\dataset\bouonlab-20260315-sc - SAS_2026-03-15_16-56-46.csv")
post_list_md = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\dataset\post-list.md")

# 1. Get slugs and dates from post-list.md
post_dates = {}
if post_list_md.exists():
    with open(post_list_md, mode="r", encoding="utf-8") as f:
        for line in f:
            # Match | Title | `slug` | date |
            match = re.search(r'\|.*\|.*`([^`]+)`.*\|.*(\d{4}-\d{2}-\d{2})', line)
            if match:
                slug = match.group(1)
                date = match.group(2)
                post_dates[slug] = date

# 2. Get GSC data
gsc_data = {}
if gsc_csv.exists():
    with open(gsc_csv, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row["Page"]
            if "/posts/" in url:
                slug = url.split("/posts/")[-1].strip("/")
                gsc_data[slug] = gsc_data.get(slug, 0) + int(row["Impressions"])

# 3. Analyze
ghost_legacy = []
ghost_new = []
good = []
low = []

for slug, date in post_dates.items():
    impressions = gsc_data.get(slug, 0)
    if impressions >= 20:
        good.append((slug, impressions, date))
    elif impressions > 0:
        low.append((slug, impressions, date))
    else:
        # Ghost
        if date < "2026-01-01":
            ghost_legacy.append((slug, date))
        else:
            ghost_new.append((slug, date))

print(f"Good Performance (>= 20): {len(good)}")
print(f"Low Performance (1-19): {len(low)}")
print(f"Ghost Legacy (0, published before 2026): {len(ghost_legacy)}")
print(f"Ghost New (0, published 2026+): {len(ghost_new)}")

print("\n--- Ghost Legacy (Strong candidates for removal) ---")
for s, d in sorted(ghost_legacy)[:20]:
    print(f"- {s} ({d})")
