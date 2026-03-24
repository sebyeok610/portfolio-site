Place image assets here.

- `thumbs/`: project list thumbnails
- `details/`: project detail images
- `common/`: shared images such as logos, icons, and hero assets

Naming convention used by the site:

- Home hero: `common/home-hero.jpg`
- Header logo: `common/logo.png`
- Thumbnail: `thumbs/{project-slug}.png`
- Detail cover: `details/{project-slug}/cover.png` (optional, falls back to thumbnail)
- Detail gallery: `details/{project-slug}/detail-1.jpg`
- Detail gallery: `details/{project-slug}/detail-2.jpg`
- Detail gallery: `details/{project-slug}/detail-3.jpg`
- Detail gallery video: `details/{project-slug}/detail-1.mp4`
- Detail gallery video: `details/{project-slug}/detail-2.mp4`
- Detail gallery video: `details/{project-slug}/detail-3.mp4`

Thumbnail display mode:

- Default: full image fill (`thumbFit` omitted or `"cover"`)
- PNG object on background: set `thumbFit: "contain"` in `script.js`
- Custom thumbnail file path: set `thumbSrc` in `script.js`
