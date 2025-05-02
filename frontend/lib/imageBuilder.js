// src/lib/imageBuilder.js
import imageUrlBuilder from '@sanity/image-url';
import {client} from './client';

const builder = imageUrlBuilder(client);

// Call this function with an image reference from Sanity
export function urlFor(source) {
  return builder.image(source);
}