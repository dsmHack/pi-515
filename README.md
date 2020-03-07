# Pursuit of Innovation: Pi515

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

'This repo is the main webpage for Pi515. It is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.


## Tech Stack 🥞
- Hosting/Build: [Netlify](http://netlify.com/)
- Website:
  - [Gatsby](https://www.gatsbyjs.org/)
  - [React](https://reactjs.org/)
- Styling: [Bulma](https://bulma.io/)
- CMS: [Netlify CMS](https://www.netlifycms.org)
- Database: [Firebase](https://firebase.google.com/docs/reference/js/?authuser=0) (don't use yet but might in the future)

## Development

### Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

### Running Locally

Clone this repository and do the following
```
npm install
gatsby develop
```

This will create a local version of website that hot-reloads to show changes as you make them

### Testing CMS locally
To test the CMS locally, you'll need to run a production build of the site:

```
$ npm run build
$ netlify dev
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.
