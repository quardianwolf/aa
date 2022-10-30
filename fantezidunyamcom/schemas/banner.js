export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
          },
          {
            name: 'name',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'tarih',
            title: 'Tarih',
            type: 'string',
        },
        {
            name: 'slogan1',
            title: 'Slogan1',
            type: 'string',
        },
        {
            name: 'slogan1_1',
            title: 'Slogan1 2.Kisim',
            type: 'string',
        },
        {
            name: 'slogan2',
            title: 'slogan2',
            type: 'string',
        },
        {
            name: 'slogan2_2',
            title: 'Slogan2 2.Kisim',
            type: 'string',
        },
        {
            name: 'slide_text1',
            title: 'Slider Yazi1',
            type: 'string',
        },
        {
            name: 'slide_text2',
            title: 'Slider Yazi2',
            type: 'string',
        }
    ],
  };