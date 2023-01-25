import { dataset, projectId } from '@/lib/sanity/env'
import { schemaTypes } from '@/lib/sanity/schemas'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
