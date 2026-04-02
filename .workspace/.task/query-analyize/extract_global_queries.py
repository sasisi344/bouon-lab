import csv
from collections import defaultdict

file_path = r'c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\.task\query-analyize\bouonlab-query-20251222-20260321-date - SAS_2026-03-24_06-33-33.csv'

# Dictionary to aggregate statistics for non-JPN queries
non_jpn_stats = defaultdict(lambda: {'clicks': 0, 'impressions': 0, 'countries': set(), 'weighted_pos': 0.0})

with open(file_path, mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        country = row['Country'].lower()
        if country != 'jpn':
            q = row['Query']
            c = int(row['Clicks'])
            i = int(row['Impressions'])
            try:
                p = float(row['Position'])
            except ValueError:
                p = 0.0
            
            non_jpn_stats[q]['clicks'] += c
            non_jpn_stats[q]['impressions'] += i
            non_jpn_stats[q]['countries'].add(row['Country'])
            non_jpn_stats[q]['weighted_pos'] += (p * i)

# Calculate results
results = []
for q, data in non_jpn_stats.items():
    if data['impressions'] > 0:
        avg_pos = data['weighted_pos'] / data['impressions']
        ctr = (data['clicks'] / data['impressions']) * 100
        results.append({
            'query': q,
            'clicks': data['clicks'],
            'impressions': data['impressions'],
            'ctr': ctr,
            'pos': avg_pos,
            'countries': ", ".join(sorted(list(data['countries'])))
        })

# Sort by impressions
results = sorted(results, key=lambda x: x['impressions'], reverse=True)

# Output to markdown file for user
output_path = r'c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\.task\query-analyize\non_jpn_queries.md'
with open(output_path, 'w', encoding='utf-8') as out:
    out.write("# Global Queries (Non-JPN)\n\n")
    out.write("| Query | Countries | Impressions | Clicks | CTR | Avg Pos |\n")
    out.write("| :--- | :--- | :--- | :--- | :--- | :--- |\n")
    for r in results:
        out.write(f"| {r['query']} | {r['countries']} | {r['impressions']} | {r['clicks']} | {r['ctr']:.1f}% | {r['pos']:.1f} |\n")

print(f"Extracted {len(results)} distinct non-JPN queries to {output_path}")
