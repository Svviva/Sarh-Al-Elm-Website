import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    date: z.date(),
    coverImage: z.string(),
    excerpt: z.string().optional(),
  }),
});

const heroSlides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hero-slides' }),
  schema: z.object({
    order: z.number(),
    image: z.string(),
    headline: z.string(),
    headline_ar: z.string().optional(),
    subhead: z.string().optional(),
    subhead_ar: z.string().optional(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
  }),
});

const gallerySingles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery-singles' }),
  schema: z.object({
    image: z.string(),
    caption: z.string().optional(),
    caption_ar: z.string().optional(),
    date: z.date().optional(),
  }),
});

const galleryAlbums = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery-albums' }),
  schema: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    date: z.date(),
    coverImage: z.string(),
    images: z.array(z.string()),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    quote_ar: z.string().optional(),
    parentName: z.string(),
    order: z.number().optional(),
  }),
});

const settings = defineCollection({
  loader: file('./src/content/settings/site.md', {
    parser: (text) => {
      // single-entry frontmatter file, expose it under id "site"
      const fm = text.split('---')[1] ?? '';
      const data: Record<string, string> = {};
      fm.split('\n').forEach((line) => {
        const idx = line.indexOf(':');
        if (idx === -1) return;
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        value = value.replace(/^"(.*)"$/, '$1');
        if (key) data[key] = value;
      });
      return [{ id: 'site', ...data }];
    },
  }),
  schema: z.object({
    facebookUrl: z.string().optional(),
    instagramUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    twitterUrl: z.string().optional(),
    address: z.string().optional(),
    address_ar: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    mapEmbedUrl: z.string().optional(),
    silaLoginUrl: z.string().optional(),
    principalName: z.string().optional(),
    principalPhoto: z.string().optional(),
    principalMessage: z.string().optional(),
    principalMessage_ar: z.string().optional(),
  }),
});

export const collections = {
  news,
  'hero-slides': heroSlides,
  'gallery-singles': gallerySingles,
  'gallery-albums': galleryAlbums,
  testimonials,
  settings,
};
