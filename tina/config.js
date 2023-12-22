import { defineConfig } from 'tinacms';

import { guide_fields } from './templates';
// import { acronymsFields } from './templates';
// import { translation_fields } from './templates';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'dist'
  },
  media: {
    tina: {
      mediaRoot: '_assets/images',
      publicFolder: 'dist'
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: 'md',
        label: 'Guide',
        name: 'guide',
        path: 'content',
        match: {
          include: 'en/guide/*',
          exclude: '**/guide/acronyms'
        },
        fields: [...guide_fields()]
      }
    ]
  }
});
