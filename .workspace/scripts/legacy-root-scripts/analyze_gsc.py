import csv
from collections import defaultdict

file_path = r'c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\dataset\bouonlab-20260315-sc - SAS_2026-03-15_16-56-46.csv'

page_data = defaultdict(lambda: {'total_impressions': 0, 'queries': []})

with open(file_path, mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        page = row['Page']
        impressions = int(row['Impressions'])
        query = row['Query']
        
        page_data[page]['total_impressions'] += impressions
        page_data[page]['queries'].append((query, impressions))

# Filter pages with total impressions < 20
to_exclude = []
to_keep = []

for page, data in page_data.items():
    if data['total_impressions'] < 20:
        to_exclude.append((page, data['total_impressions']))
    else:
        to_keep.append((page, data['total_impressions']))

# Sort by impressions
to_exclude.sort(key=lambda x: x[1], reverse=True)
to_keep.sort(key=lambda x: x[1], reverse=True)

print(f"Total Unique Pages monitored: {len(page_data)}")
print(f"Pages to Keep (>= 20 impressions): {len(to_keep)}")
print(f"Pages to Exclude (< 20 impressions): {len(to_exclude)}")

print("\n--- Summary of High Traffic Pages (Top 5) ---")
for p, imp in to_keep[:5]:
    print(f"- {p} ({imp} impressions)")

print("\n--- Summary of Pages to Exclude (All) ---")
for p, imp in to_exclude:
    print(f"{p},{imp}")

