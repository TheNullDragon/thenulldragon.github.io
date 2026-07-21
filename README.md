# Null Dragon — Jekyll Portfolio

A dark, purple-accented vulnerability-research portfolio built with
Jekyll, ready to publish on GitHub Pages.

## 1. What's in here

```
_config.yml         site settings (title, social links, etc.)
_layouts/           default.html, page.html, post.html
_includes/          header, footer, sidebar, icons, hero artwork
_posts/             your blog posts (3 sample posts included)
_research/          "Research" collection (one example entry)
_tools/              "Tools" collection (one example entry)
assets/css/style.css  all styling
assets/images/logo.svg  the dragon logo mark
assets/js/main.js    mobile nav toggle
index.html           homepage
blog.html            full post listing
about.md / contact.md / research.html / tools.html / privacy.md / disclaimer.md
```

## 2. Publish it on GitHub Pages

You have two options for where this lives in your GitHub account
(`TheNullDragon`):

**Option A — a "user site" (recommended, simplest URLs)**
1. Create a new repo named **exactly** `TheNullDragon.github.io`.
2. Leave `baseurl: ""` in `_config.yml` (already set that way).
3. Your site will be live at `https://thenulldragon.github.io/`.

**Option B — a project site under any other repo name**
1. Create a repo with whatever name you like, e.g. `portfolio`.
2. In `_config.yml`, set `baseurl: "/portfolio"` (match the repo name).
3. Your site will be live at `https://thenulldragon.github.io/portfolio/`.

### Uploading the files

From this folder:

```bash
git init
git add .
git commit -m "Initial Null Dragon portfolio"
git branch -M main
git remote add origin https://github.com/TheNullDragon/<your-repo-name>.git
git push -u origin main
```

Then on GitHub: go to the repo → **Settings → Pages** → under
"Build and deployment," set **Source** to "Deploy from a branch,"
branch `main`, folder `/ (root)`. GitHub will build and publish the
site automatically within a minute or two (rebuilds happen on every
push).

## 3. Preview it locally (optional but recommended)

You'll need Ruby installed. Then, from this folder:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser. Any file you save will
auto-rebuild.

## 4. Customize the basics

Open `_config.yml` and update:

- `github_username`, `linkedin_url`, `email` — used in the header,
  footer, and sidebar "Connect" widget.
- `about_short` — the blurb in the homepage "About" widget.
- `description` — used as the hero paragraph and page `<meta
  description>`.

## 5. Add a blog post

Drop a new file in `_posts/` named `YYYY-MM-DD-your-title.md`:

```markdown
---
title: "Your Post Title"
date: 2026-01-15
categories: [Reverse Engineering]
icon: terminal   # optional: skull, lock, terminal, code, search, binary...
excerpt: "One or two sentences shown on the list pages."
---

Your post content here, in Markdown.
```

The **Categories** widget in the sidebar counts posts automatically —
you don't need to update any numbers by hand. Whatever you put in
`categories:` on each post is what shows up there.

## 6. Add a Research or Tools entry

Drop a markdown file into `_research/` or `_tools/` — copy
`_research/example-research.md` or `_tools/example-tool.md` as a
starting point and edit the front matter + body.

## 7. Replacing the hero art

The circular rune/dragon graphic on the homepage is an **original
SVG illustration** built directly into `_includes/hero-art.html` — a
stylized approximation of the mystical dragon-in-a-circle look from
your reference image, made entirely from CSS gradients and SVG
shapes (no external image file, so nothing to upload for it to work
out of the box).

If you'd rather use a specific piece of artwork (AI-generated,
commissioned, or your own), here's how to swap it in:

1. Add your image file to `assets/images/`, e.g. `assets/images/hero.jpg`.
2. Commit it and push — GitHub Pages serves anything in `assets/` as
   a static file automatically, no extra config needed.
3. In `_includes/hero-art.html`, delete (or comment out) the
   `<svg>...</svg>` block, and uncomment the `<img class="custom-image" ...>`
   line at the bottom, updating the filename if needed.
4. In `assets/css/style.css`, find `.hero-art .custom-image` and
   change `display: none;` to `display: block;`.

The same pattern works for the logo (`assets/images/logo.svg`,
referenced in `_includes/header.html` and `_includes/footer.html`) —
just replace that file with your own square logo image and update
the `src` path if you rename it.

## 8. Post thumbnail images

By default each post card shows a simple line icon. To use a real
thumbnail image instead:

1. Add an image to `assets/images/`, e.g. `assets/images/heap-post.png`.
2. Add `image: /assets/images/heap-post.png` to that post's front
   matter — the post card will automatically use it instead of the
   icon.

## 9. Custom domain (optional)

If you own a domain and want e.g. `nulldragon.io` instead of the
default `thenulldragon.github.io` URL: add a file named `CNAME`
(no extension) at the repo root containing just your domain, then
follow GitHub's ["Managing a custom domain"](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
guide to point your DNS at GitHub.

## 10. Troubleshooting

- **Site looks unstyled / 404s on CSS or images:** almost always a
  `baseurl` mismatch — see step 2 above.
- **Changes not showing up:** check the **Actions** tab on your repo
  for the Pages build log; GitHub Pages can take a minute to rebuild.
- **Local build fails:** make sure you're using a Ruby version
  compatible with the `github-pages` gem (check
  [pages.github.com/versions](https://pages.github.com/versions/) for
  the current supported Jekyll/Ruby versions).
