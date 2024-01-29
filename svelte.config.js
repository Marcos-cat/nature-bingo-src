import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : '/nature-bingo',
        },
    },
};

export default config;
