import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Enable prerendering by default through the adapter
      prerender: {
        default: true
      }
    })
  },
};

export default config;
