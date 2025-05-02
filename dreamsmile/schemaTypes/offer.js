export default {
    name: 'offer',
    title: 'Offer',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Offer Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Offer Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'validTill',
        title: 'Valid Till Date',
        type: 'datetime',
      },
      {
        name: 'image',
        title: 'Main image',
        type: 'image',
        options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', 
      },
    },
    ],
  }