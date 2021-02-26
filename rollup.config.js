import resolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/app.js',
  output: {
    dir: 'dist',
  },
  plugins: [
    resolve(),
    html(),
    copy({
      targets: [
        {
          src: './node_modules/stencil-hostref-bug/dist/esm/*',
          dest: './dist',
        },
      ],
    }),
    serve({ contentBase: 'dist' }),
  ],
};
