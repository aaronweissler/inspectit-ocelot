module.exports={
  "title": "inspectIT Ocelot Documentation",
  "tagline": "Documentation of the inspectIT Ocelot Java Agent",
  "url": "https://inspectit.github.io",
  "baseUrl": "/inspectit-ocelot/",
  "organizationName": "inspectIT",
  "projectName": "inspectit-ocelot",
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
          "path": "..\\docs",
          "sidebarPath": "..\\website\\sidebars.json"
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