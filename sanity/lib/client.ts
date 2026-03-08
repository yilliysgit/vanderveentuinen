import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'u7yib9po',
  dataset: 'production',
  apiVersion: '2026-02-18',
  useCdn: false,
})