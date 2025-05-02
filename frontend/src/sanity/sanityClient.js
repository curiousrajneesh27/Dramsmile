import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'tumhara-project-id', // 🔥 Yaha apna projectId daalna
  dataset: 'production', // 🔥 Yaha apna dataset daalna
  apiVersion: '2023-01-01', // 🔥 koi bhi recent date
  useCdn: true, // 🔥 true = fast, but stale data possible
})

export default client;