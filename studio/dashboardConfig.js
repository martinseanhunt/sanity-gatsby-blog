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
                  buildHookId: '5d9f48e0bfb93f2765f9af38',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p9qaunuc',
                  apiId: '417edfbb-efe4-45e9-9a93-66cc9c978f30'
                },
                {
                  buildHookId: '5d9f48e08b130138d4dd28d8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5bf2zixa',
                  apiId: '0bbefecc-3e59-4b56-8b97-5f4ccd00ab4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martinseanhunt/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5bf2zixa.netlify.com', category: 'apps'}
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
