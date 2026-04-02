import csv
from collections import defaultdict

file_path = r'c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\.workspace\.task\query-analyize\bouonlab-query-20251222-20260321-date - SAS_2026-03-24_06-33-33.csv'

stats = defaultdict(lambda: {'clicks': 0, 'impressions': 0, 'weighted_pos': 0.0})

with open(file_path, mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        q = row['Query']
        c = int(row['Clicks'])
        i = int(row['Impressions'])
        try:
            p = float(row['Position'])
        except ValueError:
            p = 0.0
        
        stats[q]['clicks'] += c
        stats[q]['impressions'] += i
        stats[q]['weighted_pos'] += (p * i)

results = []
for q, data in stats.items():
    if data['impressions'] > 0:
        avg_pos = data['weighted_pos'] / data['impressions']
        ctr = (data['clicks'] / data['impressions']) * 100
        results.append({
            'query': q,
            'clicks': data['clicks'],
            'impressions': data['impressions'],
            'ctr': ctr,
            'pos': avg_pos
        })

# Sort by impressions for overview
results_by_imp = sorted(results, key=lambda x: x['impressions'], reverse=True)

print("--- TOP 20 IMPRESSIONS ---")
for r in results_by_imp[:20]:
    print(f"{r['query']}: Imp={r['impressions']}, Clicks={r['clicks']}, CTR={r['ctr']:.1f}%, Pos={r['pos']:.1f}")

# Opportunity: High Impressions, Low CTR (CTR < 2%)
opportunities = [r for r in results if r['impressions'] > 50 and r['ctr'] < 3]
opportunities = sorted(opportunities, key=lambda x: x['impressions'], reverse=True)

print("\n--- OPPORTUNITIES (High Imp, Low CTR) ---")
for r in opportunities[:20]:
    print(f"{r['query']}: Imp={r['impressions']}, Clicks={r['clicks']}, CTR={r['ctr']:.1f}%, Pos={r['pos']:.1f}")

# Niche Winners: High CTR (> 15%) & Reasonable Imp (> 10)
winners = [r for r in results if r['impressions'] > 10 and r['ctr'] > 15]
winners = sorted(winners, key=lambda x: x['clicks'], reverse=True)

print("\n--- NICHE WINNERS (High CTR) ---")
for r in winners[:20]:
    print(f"{r['query']}: Imp={r['impressions']}, Clicks={r['clicks']}, CTR={r['ctr']:.1f}%, Pos={r['pos']:.1f}")
