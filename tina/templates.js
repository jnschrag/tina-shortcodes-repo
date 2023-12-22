export function guide_fields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtitle'
    },
    {
      type: 'boolean',
      name: 'uses_forms',
      label: 'Uses Forms'
    },
    {
      type: 'number',
      name: 'menu_order',
      label: 'Order to appear in menu'
    },
    {
      type: 'object',
      name: 'image',
      label: 'Featured Image',
      fields: [
        {
          type: 'image',
          name: 'url',
          label: 'Featured Image'
        },
        {
          type: 'string',
          name: 'caption',
          label: 'Image Caption'
        }
      ]
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true,
      parser: {
        type: 'mdx',
        skipEscaping: 'all'
      },
      templates: [
        {
          name: 'figure',
          label: 'Figure',
          match: {
            name: 'figure',
            start: '{%',
            end: '%}'
          },
          fields: [
            {
              name: 'children',
              label: 'Image',
              type: 'rich-text'
            },
            {
              name: 'caption',
              label: 'Caption',
              type: 'string'
            },
            {
              name: 'class',
              label: 'Alignment',
              type: 'string',
              options: [
                {
                  value: 'center',
                  label: 'Center'
                },
                {
                  value: 'left',
                  label: 'Left'
                },
                {
                  value: 'right',
                  label: 'Right'
                }
              ]
            }
          ]
        }
        // {
        //   name: 'callout',
        //   label: 'Callout',
        //   match: {
        //     name: 'callout',
        //     start: '{%',
        //     end: '%}'
        //   },
        //   fields: [
        //     {
        //       name: 'title',
        //       label: 'Title',
        //       type: 'string'
        //     },
        //     {
        //       name: 'children',
        //       label: 'Content',
        //       type: 'rich-text'
        //     }
        //   ]
        // },
        // {
        //   name: 'textarea',
        //   label: 'Textarea',
        //   match: {
        //     name: 'textarea',
        //     start: '{%',
        //     end: '%}'
        //   },
        //   fields: [
        //     {
        //       name: 'label',
        //       label: 'Label',
        //       type: 'string'
        //     },
        //     {
        //       name: 'id',
        //       label: 'Id',
        //       type: 'string',
        //       description: 'Each textarea on a page needs a unique ID.'
        //     },
        //     {
        //       name: 'size',
        //       label: 'Size',
        //       type: 'string',
        //       options: [
        //         {
        //           value: 'small',
        //           label: 'Small'
        //         },
        //         {
        //           value: 'large',
        //           label: 'Large'
        //         }
        //       ]
        //     },
        //     {
        //       name: 'button',
        //       label: 'Show print button on individual field?',
        //       type: 'boolean'
        //     }
        //   ]
        // }
      ]
    }
  ];
}
