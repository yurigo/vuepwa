export default {
  mode: 'development',
  base: '/',
  includeAssets: ['icon-32x32.png'],
  manifest: {
    name: 'PWAbuela',
    short_name: 'PWAbuela',
    // display: 'fullscreen',

    // theme_color: 'black',
    // background_color: 'green',
    // accent_color: 'red',

    // theme_color
    // Default color for the application, sometimes affecting how the OS displays the site
    // (for instance, the window and title bar color on desktop, or the status bar color on mobile devices).
    // This color can be overridden by the HTML theme- color < meta > element.

    icons: [
      {
        src: 'icon-192x192.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512x512.png', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'icon-512x512.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },
  devOptions: {
    // enabled: process.env.SW_DEV === 'true',
    enabled: true,
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html'
  }
}
