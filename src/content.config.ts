// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ 
    base: "./src/content/blog", 
    pattern: "**/*.md" 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    authorSlug: z.string().optional(),
    category: z.enum(['Home Decor', 'Gardening', 'DIY', 'Kitchen']),
    categorySlug: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readTime: z.string(),
    heroImage: z.string(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog };