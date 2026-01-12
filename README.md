# Grace King Photography Website

Professional photography portfolio website built with Astro and Tailwind CSS, hosted on Cloudflare Pages.

## Features

- 🚀 Built with Astro 5 for optimal performance
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🖼️ Image optimization built-in
- 📊 Cloudflare Web Analytics integration
- 📧 Contact form with email forwarding
- 🎭 Pixel-perfect recreation of original design

## Tech Stack

- **Framework**: Astro 5
- **Styling**: Tailwind CSS 4
- **Gallery**: Swiper.js
- **Hosting**: Cloudflare Pages
- **Analytics**: Cloudflare Web Analytics

## Color Palette

- Cream: `#f6f3ee` (primary background)
- Light Brown: `#d2c5b9` (accent)

## Typography

- Headers: Playfair Display (serif)
- Body: Montserrat
- Light text: Lato (weight 300)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is automatically deployed to Cloudflare Pages on every push to the `main` branch.

**Build settings:**
- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: Astro

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Site pages
│   └── styles/         # Global styles
├── public/             # Static assets
│   ├── images/         # Photography portfolio images
│   ├── logo/           # Logo files
│   └── fonts/          # Custom fonts (if any)
└── functions/          # Cloudflare Pages Functions
```

## Content Updates

To update portfolio images:
1. Add images to `public/images/gallery/`
2. Update gallery components to reference new images
3. Commit and push changes
4. Site will automatically redeploy

## Contact

For questions about this website, contact: scott@scottjking.com
