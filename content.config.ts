import {defineCollection, defineContentConfig} from '@nuxt/content'
import {z} from 'zod'

export default defineContentConfig({
    collections: {
        technologies: defineCollection({
            type: 'data',
            source: 'technologies.csv',
            schema: z.object({
                label: z.string(),
                fa_icon: z.string(),
                link: z.string().url()
            })
        }),
        projects: defineCollection({
            type: 'data',
            source: 'projects.csv',
            schema: z.object({
                name: z.string(),
                short_description: z.string(),
                order: z.number(),
                github_link: z.string().url(),
                technology_ids: z.string(),
            })
        }),
        companies: defineCollection({
            type: 'data',
            source: 'companies.csv',
            schema: z.object({
                name: z.string(),
                role: z.string(),
                start_date: z.date(),
                end_date: z.date(),
                order: z.number(),
                technology_ids: z.string(),
            })
        }),
        schools: defineCollection({
            type: 'data',
            source: 'schools.csv',
            schema: z.object({
                name: z.string(),
                branch: z.string(),
                start_date: z.date(),
                end_date: z.date(),
            })
        })
    }
})
