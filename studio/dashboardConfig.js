export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633c740c245a64004bca6a34',
                  title: 'Sanity Studio',
                  name: 'tmtm-studio',
                  apiId: '4adcebb2-4582-4b78-bc99-c0539a71d0e9'
                },
                {
                  buildHookId: '633c740c9ad562004c8ff809',
                  title: 'Blog Website',
                  name: 'tmtm-web',
                  apiId: '4167c3a6-aa18-42fb-b9bd-126a1bd4a0c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/tmtm',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tmtm-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
