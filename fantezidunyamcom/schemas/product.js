export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Resim',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Isim',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Fiyat',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Detaylar',
        type: 'string',
      },
      {
        name: 'sizes',
        type: 'array',
        title: 'Beden',
        of: [{ type: 'reference', to: { type: 'size'}}]
      },
      {
        name: 'color',
        title: 'Renk',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'categories',
        type: 'array',
        title: 'Kategoriler',
        of: [{ type: 'reference', to: { type: 'category'}}]
      },
      { 
        name: 'link',
        title: 'Amazon Link',
        type: 'string',
      }
    ]
  }