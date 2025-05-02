import {createClient} from '@sanity/client' 

export const client = createClient({
    projectId: '64jk2ach', // Replace with your project ID
    dataset: 'production',        // Replace with your dataset
    apiVersion: '2023-01-01',     // Use a specific date
    useCdn: false,               // `true` if you want fast, cached data
});