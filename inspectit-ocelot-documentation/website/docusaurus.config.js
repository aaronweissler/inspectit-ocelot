module.exports={
  "title": "inspectIT Ocelot Documentation",  // Title for your website.
  "tagline": "Documentation of the inspectIT Ocelot Java Agent",
  "url": "https://inspectit.github.io", // Your website URL
  "baseUrl": "/inspectit-ocelot/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  // Used for publishing and more
  "projectName": "inspectit-ocelot",
  "organizationName": "inspectIT",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": [],
    "markdownPlugins": [
      null
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/inspectit/inspectit-ocelot-documentation/edit/master/docs/",
          "path": "../docs",
          "sidebarPath": require.resolve('./sidebars.json'),
        },
        "blog": {},
        "theme": {
          "customCss": [require.resolve('./src/css/customTheme.css')],
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "inspectIT Ocelot Documentation",
      "logo": {
        "src": "img/ocelot_head_sil_logo.svg"
      },
      "items": [
        {
          "href": "https://inspectit.rocks/",
          "label": "inspectIT Ocelot Website",
          "position": "left"
        },
        {
          "href": "https://github.com/inspectIT/inspectit-ocelot",
          "label": "GitHub Repository",
          "position": "left"
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022 Novatec Consulting GmbH",
      "logo": {
        "src": "img/ocelot_head_sil_logo.svg"
      }
    },
    "algolia": {
      "appId": "P7JV0ZK66K",
      "apiKey": "01ee152d9d7574e5b50cc597e0d69bdf",
      "indexName": "inspectit-ocelot",
      "algoliaOptions": {
        "facetFilters": [
          "version:VERSION"
        ]
      }
    }
  }
}