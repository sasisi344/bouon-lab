---
name: Visual Content Designer
description: Strategy and rules for creating functional visuals (Infographics, Diagrams) to enhance knowledge retention and user engagement.
---

# Project Skill: Visual Content Designer

This skill defines the "Golden Ratio" of text-to-visuals for BouonLab.
Unlike decorative images, our goal is **"Functional Graphics"** that act as information shortcuts.

---

## 🎨 1. The Golden Ratio of Visuals

For a Knowledge Base site, the ideal balance is:
**Per 2,000 characters: 1 Hero Image + 2-3 Functional Graphics.**

| Placement            | Type                      | Role & Effect                                                      |
| :------------------- | :------------------------ | :----------------------------------------------------------------- |
| **Top (Under H1)**   | **Hero Image (Abstract)** | Visualizes the "Theme". Builds professional trust.                 |
| **Early (1st H2)**   | **Summary Diagram**       | "Map" of the article. Shows the whole picture to prevent bounce.   |
| **Middle (Complex)** | **Comparison/Structure**  | Replaces heavy text (140+ chars) or tables with a logical diagram. |
| **End (Summary)**    | **Checklist Card**        | Visualizes "Takeaway Knowledge". Encourages save/share.            |

---

## 🛠 2. Iron Rules of Functional Graphics

**"Can you understand the meaning without reading the text?"**
This is the ultimate criteria.

### Type A: Comparison -> Matrix (Not Tables)

If explaining "A is X, but B is Y" takes over 100 characters:

- **Action**: Convert to a **2-Axis Matrix** or Split Diagram.
- **Reason**: Tables require horizontal scrolling on mobile (bad UX). Images capture the full contrast instantly.

### Type B: Flow/Steps -> Vertical Diagram

For settings or learning steps:

- **Action**: Vertical flow chart using arrows.
- **Reason**: Matches the user's vertical scroll behavior. Keeps the reading rhythm unbroken.

### Type C: Definitions -> Card Style

For important terms or core concepts:

- **Action**: Summarize in a single "Card" (Boxed design).
- **Reason**: Creates a "Visual Chunk" that stops the user's scroll.

---

## 🔍 3. SEO & Accessibility Rules

To ensure search engines "read" the graphics:

1.  **Alt Text**: Must describe the information, not just the visual (e.g., "Diagram showing Sound Masking covering speech frequencies" vs "Waveform image").
2.  **Text Reinforcement**:
    - **Best Practice**: Place a text summary _immediately below_ the infographic.
    - **Effect**: Ensures accessibility and explicitly tells Google "This content is comprehensive".

---

## 📝 4. Execution Workflow

### Phase A: Draft (Prompt Injection)

When drafting the article (in `.draft/`), if you identify a need for a graphic but cannot generate it yet:

1.  **Define the Visual**: Determine what type (Matrix, Flow, Card).
2.  **Insert Comment Prompt**: Insert an English prompt in HTML comment format.
    ```markdown
    <!-- IMAGE_PROMPT: [Type: Matrix] Comparison of Noise Canceling (Erasing) vs Sound Masking (Hiding). Minimalist style. -->
    ```

### Phase B: Finalization (Generation & Embed)

When converting the draft to the final article:

1.  **Read Prompts**: Extract the English prompts from the draft.
2.  **Execute Generation**: Use the project script or available tools to generate the image.
    - _Script_: `node .agent/scripts/generate-image.js "PROMPT" "path/to/image.jpg"`
3.  **Embed**: Replace the comment with the standard Markdown image syntax.
    - **Alt Text**: Detailed description for SEO.
    - **Caption**: `*Fig: ...*` below the image.

---

## 🖼 5. Generation Prompts (Style Guide)

When using `image-generation.md` or external tools:

- **Style**: Minimalist, "Knowledge Base" aesthetic.
- **Colors**: BouonLab Brand Colors (Consult system settings) + White/Grey space.
- **Avoid**: Cluttered text (AI often fails spelling). Use icons and abstract shapes to represent logic.
