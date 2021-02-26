import { render, h } from 'preact';
import {
  defineCustomElements,
  applyPolyfills,
} from 'stencil-hostref-bug/loader';

applyPolyfills().then(() => defineCustomElements(window));

render(
  h('div', {
    children: [
      h('p', { children: ['from Preact'] }),
      h('my-component', { chidlren: ['from my component'], first: 'Tyler' }),
    ],
  }),
  document.body
);
