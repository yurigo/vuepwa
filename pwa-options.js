export default {
  mode: 'development',
  base: '/',
  includeAssets: ['icon-32x32.png', 'icon-192x192.png', 'icon-512x512.png', 'icon.png'],
  manifest: {
    name: 'PWAbuela',
    short_name: 'PWAbuela',
    description: 'Un PWA para governarlos a todos',
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
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'apple-touch-icon.png',
        sizes: '512x512',
        type: 'image/png'
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
