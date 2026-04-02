import os
import shutil
from pathlib import Path
import re

# Paths
BASE_DIR = Path(r"c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab")
POSTS_DIR = BASE_DIR / "src" / "content" / "posts"
ARCHIVE_DIR = BASE_DIR / "src" / "content" / "_archived-posts"
CLEANUP_FILE = BASE_DIR / ".workspace" / "dataset" / "content_cleanup_list.md"

def move_articles():
    if not CLEANUP_FILE.exists():
        print(f"Error: {CLEANUP_FILE} not found.")
        return

    # 1. Create Archive Dir
    ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)

    # 2. Parse "4. 消す記事" section
    with open(CLEANUP_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # Find section "## 4. 消す記事"
    match = re.search(r"## 4\. 消す記事.*?\n(.*?)(?:\n##|$)", content, re.DOTALL)
    if not match:
        print("Error: Could not find '4. 消す記事' section.")
        return

    section_text = match.group(1)
    # Extract slugs from table rows: | `slug` | title | date |
    slugs = re.findall(r"\|\s*`(.*?)`", section_text)

    print(f"Found {len(slugs)} slugs to move.")

    moved_count = 0
    not_found_count = 0

    for slug_item in slugs:
        lang = "ja"
        slug = slug_item
        if slug_item.endswith(".en"):
            lang = "en"
            slug = slug_item[:-3]
        
        # Search for directory: src/content/posts/{lang}/**/{slug}
        lang_dir = POSTS_DIR / lang
        if not lang_dir.exists():
            print(f"Warning: Lang dir {lang_dir} does not exist.")
            continue

        # Use glob to find the directory within categories
        found_dirs = list(lang_dir.glob(f"**/{slug}"))
        
        # Filters: only directories
        found_dirs = [d for d in found_dirs if d.is_dir()]

        if not found_dirs:
            print(f"Not found on disk: {lang}/{slug} ({slug_item})")
            not_found_count += 1
            continue

        for source_dir in found_dirs:
            # Construct relative path from POSTS_DIR to preserve structure
            rel_path = source_dir.relative_to(POSTS_DIR)
            target_dir = ARCHIVE_DIR / rel_path

            # Create parent directories in archive
            target_dir.parent.mkdir(parents=True, exist_ok=True)

            print(f"Moving: {rel_path}")
            try:
                # If target already exists, remove it first to avoid error
                if target_dir.exists():
                    shutil.rmtree(target_dir)
                shutil.move(str(source_dir), str(target_dir))
                moved_count += 1
            except Exception as e:
                print(f"Failed to move {rel_path}: {e}")

    print("\n--- Summary ---")
    print(f"Planned: {len(slugs)}")
    print(f"Moved: {moved_count}")
    print(f"Not Found: {not_found_count}")
    print(f"Archive location: {ARCHIVE_DIR}")

if __name__ == "__main__":
    move_articles()
