# Image Generation Skills

This skill defines the workflow and style rules for generating images in HUGO projects using a local script.

## 1. Project-Specific Style Rules

Define the visual identity for each project.

### 4thave Vibe (Personal Blog)

- **Concept**: "Simple, Abstract, Light". A personal notebook vibe.
- **Thumbnail (Index Card)**:
  - **Ratio**: `6:4` (Center-focused composition).
  - **Content**: Abstract symbols representing the topic. No heavy details.
  - **Text**: **Prohibited**.
- **Content Image**: `16:9` or `6:4`. Muted tones.

### Syllabus Hack (AI x Education)

- **Concept**: "Gentle, Monotone, Intellectual". Partners in learning.
- **Thumbnail**:
  - **Ratio**: `6:4`.
  - **Style**: Simple pictogram/illustration style.
  - **Text**: **Prohibited**.
- **Content Image**: `16:9`. Clean infographics with soft fonts.

### Bouon Lab (Soundproofing Knowledge)

- **Concept**: "Modern, Calm, Professional". Mental peace in a soundproof space.
- **Language Rule**:
  - **Prompt**: **ENGLISH** (for better generation quality).
  - **Text in Image**: **JAPANESE** (if text is included).
- **Thumbnail**:
  - **Ratio**: `6:4` (Center-focused).
  - **Content**: Imagery associated with the H1/Title.
  - **Text**: **Allowed (Max 8 chars)**. Place in center.
- **Content Image**: `16:9` or `4:6`. Backgrounds evoking a music room or quiet studio.

---

## 2. Technical Workflow

Use the local script to generate images via Gemini API. The script automatically loads the BouonLab context and supports presets for different image types.

### Script & Presets Paths

- **Script**: `.agents/scripts/generate-image.js`
- **Presets**: `.agents/scripts/prompts/bouon-presets.json`

### Resolution Limit

**1K (1024px max)** — The script is hard-limited to 1K resolution (`maxOutputTokens: 2048`). Web用途には十分な解像度で、API使用量を抑えます。

### Execution Commands

#### Basic (with auto BouonLab context)

```bash
node .agents/scripts/generate-image.js "YOUR_PROMPT_HERE" "./cover.png"
```

#### With Preset (recommended)

```bash
node .agents/scripts/generate-image.js --preset cover "防音室のある静かなリビング" "./cover.png"
node .agents/scripts/generate-image.js --preset content "吸音パネルの断面図" "./infographic.png"
```

#### List Available Presets

```bash
node .agents/scripts/generate-image.js --list-presets
```

### Available Presets

| Preset        | Label                    | Aspect Ratio | Use Case             |
| :------------ | :----------------------- | :----------- | :------------------- |
| `cover`       | 記事カバー画像           | 6:4          | 記事のヒーロー画像   |
| `content`     | 記事内画像               | 16:9         | 記事本文の挿入画像   |
| `portrait`    | 縦長画像                 | 4:6          | サイドバー・モバイル |
| `infographic` | インフォグラフィック素材 | —            | 図解・ダイアグラム   |
| `sns`         | SNS投稿用                | 1:1          | Instagram等          |

### Arguments

1. **`--preset <name>`** (optional): Preset name (`cover`, `content`, `portrait`, `infographic`, `sns`).
2. **Prompt**: Detailed description in English (preferred for accuracy). Must be enclosed in `"`.
3. **Output Path**: Destination path (e.g., `./cover.png`). **MANDATORY**: Use `.png` extension for all new assets.

## 3. Asset Integrity & Anti-Hallucination (Strict)

- **Existence Check**: NEVER guess an image path or extension. Always use `list_dir` or `glob` to verify the actual file exists in the directory before referencing it in Markdown.
- **Extension Preference**: **ALWAYS use `.png`** for cover images (`cover.png`). This is the project standard for all newly generated assets.
- **Relative Pathing**: Frontmatter `image` must use relative paths starting with `./` (e.g., `image: ./cover.png`). **DO NOT** use quotes.
- **Consistency**: The `image:` field in `index.mdx` MUST perfectly match the filename. Any mismatch will cause a fatal build error.

## 4. Important Notes

- **Ambiguity**: If the user's request is vague ("Make a cool image"), **YOU MUST ASK FOR CLARIFICATION**. Do not guess.
- **BouonLab Context**: The script automatically prepends BouonLab's visual identity context from `bouon-presets.json`. No need to describe the blog theme manually.
- **Resolution**: Hard-limited to 1K (1024px). The API supports up to 8K but this project caps at 1K for web performance and API cost efficiency.
- **API Key**: Ensure `GEMINI_API_KEY` is set in `.agent/scripts/.env`.
