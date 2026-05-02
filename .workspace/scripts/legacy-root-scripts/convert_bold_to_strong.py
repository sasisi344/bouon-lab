import os
import re

def replace_bold_with_strong(directory):
    # Regex for **text**
    bold_pattern = re.compile(r'\*\*([^\*]+)\*\*')
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.mdx', '.md')):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = bold_pattern.sub(r'<strong>\1</strong>', content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {path}")

if __name__ == "__main__":
    target_dir = r'c:\Users\sasis\344dev\bouon-lab\src\content'
    replace_bold_with_strong(target_dir)
