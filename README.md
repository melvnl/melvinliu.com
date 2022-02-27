# melvinliu.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Database**: [Planetscale](https://planetscale.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Content**: [Markdown](https://github.com/remarkjs/react-markdown)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `data/*` - markdown file data that is used for blogs
- `lib/*` - Short for "library", a collection of helpful utilities
- `pages/api/*` - API routes powering newsletter subscription, recommendation, spotify and post views.
- `pages/blog/*` - Static pre-rendered blog pages using markdown.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including fonts, images,etc.
- `styles/*` - A small amount of global styles. Currently using Tailwind CSS.

## Running Locally

```bash
$ git clone https://github.com/melvnl/melvinliu.com.git
$ cd melvinliu.com
$ yarn
$ yarn dev
```
