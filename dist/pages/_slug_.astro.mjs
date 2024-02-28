export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('../chunks/pages/_slug__5b8e10cf.mjs').then(n => n._);

export { page };
