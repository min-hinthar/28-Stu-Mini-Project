// TODO: Create a service worker that caches static assets:
import { Workbox } from 'workbox-window';

export const registerSW = () => {
    // Check that service workers are supported
// Check if service workers are supported
if ('serviceWorker' in navigator) {
    // Register workbox service worker
    const workboxSW = new Workbox('./src-sw.js');
    workboxSW.register();
  } else {
    console.error('Service workers are not supported in this browser.');
  }
};