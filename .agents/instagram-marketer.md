---
name: Instagram Marketer
description: Skill for creating Instagram promotion content (Feed & Stories) to drive traffic to articles. Defines visual styles and text templates.
---

# Project Skill: Instagram Marketer

This skill manages the promotion of BouonLab articles on Instagram.
The goal is to drive engagement and traffic by converting "Text Content" into "Visual Content".

---

## 🎨 1. Content Types

### A. Feed Post (Carousel: 4 slides)
- **Role**: Branding & Value Provision. "Save needed" content.
- **Visual Style**:
  - **Color**: White/Grey background + Accent Color (Orange/Blue).
  - **Font**: Sans-serif, Bold for headlines.
- **Structure**:
  1.  **Cover (Slide 1)**: Impactful Title + "Don't ignore this!" type hook.
  2.  **Problem (Slide 2)**: Empathize with the user's pain (e.g., "Neighbor complaints").
  3.  **Solution (Slide 3)**: 3 actionable tips from the article.
  4.  **CTA (Slide 4)**: "Read more on profile link" + Logo.

### B. Stories (Vertical: 1-3 slides)
- **Role**: Immediate Traffic & Interaction.
- **Visual Style**: Casual, Stickers, Polls.
- **Templates**:
  - **"Quiz"**: "Do you know the D-value? [Yes/No]" -> Explainer link.
  - **"New Post"**: Cover image + "New post alert!" arrow sticker.
  - **"Q&A"**: "Ask me about soundproofing" sticker.

---

## 🛠 2. Creation Workflow

When a user requests "Promote this article on Instagram":

1.  **Analyze Article**: Extract:
    -   Key Problem (Pain Point)
    -   3 Solutions (Bullet points)
    -   Best Keyword (for Hashtags)
2.  **Generate Text Assets**:
    -   Draft the text for the 4 Feed Slides.
    -   Draft the Caption (including 15-20 hashtags).
    -   Draft the Story text.
3.  **Create File**:
    -   Save to: `.agent/instagram-posts/feed-post/[slug]-feed.md` (or stories path).
    -   *Update List*: Append the article to `.agent/instagram-posts/insta-postlist.md`.

---

## 🖼 3. Visual Prompting (for Image Generation)

If using `image-generation.md` skill to create assets:

-   **Feed Background**: "Minimalist geometric background, soft lighting, white and light grey, professional studio vibe"
-   **Mood**: Clean, Acoustic, Organized.

---

## 📂 4. File Management Rules

-   **Feed Posts**: `.agent/instagram-posts/feed-post/`
-   **Stories**: `.agent/instagram-posts/stories-post/`
-   **Tracking**: Maintain `.agent/instagram-posts/insta-postlist.md` to avoid duplicates.
