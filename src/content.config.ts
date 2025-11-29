import { defineCollection, z } from 'astro:content'

const bio = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string().email().optional(),
    image: z.string().optional(),
    cv_url: z.string().optional(),
    contact: z.object({
      phone: z.object({
        value: z.string(),
        icon: z.string(),
      }),
      email: z.object({
        value: z.string().email(),
        icon: z.string(),
      }),
      address: z.object({
        value: z.string(),
        icon: z.string(),
      }),
    }).optional(),
    socialLinks: z.array(z.object({
      text: z.string(),
      href: z.string().url(),
    })).optional(),
  })
})

const sup_pages = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string()
  })
})

const hidden = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    summary: z.string().optional(),
    status: z.enum(['current', 'past']).optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    tags: z.array(z.string()).optional(),
    founding_entity: z.string().optional(),
    grant_number: z.string().optional(),
    investigators: z.array(z.string()).optional(),
    publications: z.array(z.string()).optional(),
    project_site: z.string().url().optional(),
  })
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    author: z.string(),
    preprint: z.string().optional(),
    journalLink: z.string().url().optional(),
    pdfFile: z.string().optional(),
    keywords: z.array(z.string()),
    publicationDate: z.coerce.date(),
    lang: z.enum(['pl', 'en']),
  })
});

export const collections = { bio, sup_pages, hidden, projects, publications }
