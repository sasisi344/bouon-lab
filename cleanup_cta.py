import os
import re

def cleanup_cta():
    content_dir = r'c:\Users\sasis\344ob\344ob\08_blog-master\03_bouon-lab\src\content'
    
    # Pattern to match <CTA ... /> regardless of spaces/newlines inside
    # We use re.DOTALL if it matches across lines, but usually CTA is one line
    # However, let's be safe.
    cta_pattern = re.compile(r'<CTA\s+[^>]*/>', re.IGNORECASE | re.DOTALL)

    count = 0
    for root, dirs, files in os.walk(content_dir):
        for file in files:
            if file.endswith(('.mdx', '.md')):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = cta_pattern.sub('', content)
                
                # Also clean up potential double newlines left behind
                new_content = re.sub(r'\n\n\n+', '\n\n', new_content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Cleaned: {path}")
                    count += 1
    
    print(f"Total files cleaned: {count}")

if __name__ == "__main__":
    cleanup_cta()
