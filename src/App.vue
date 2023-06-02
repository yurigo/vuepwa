<template>
  <Header />

  <ReloadPrompt />

  <main>
    <div class="viewer mt-24 w-full flex flex-col gap-10 items-center justify-center">
      <audio ref="player" controls src="/audio/1.mp3" class="w-full" />
    </div>

    <!-- <footer>
      <BottomNavigation />
    </footer> -->
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
// import BottomNavigation from './components/BottomNavigation.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

const something = ref('')
const extra = ref('')

onMounted(() => {
  something.value = navigator.mediaSession

  if ('mediaSession' in navigator) {
    const player = document.querySelector('audio')

    navigator.mediaSession.metadata = new MediaMetadata({
      title: 'Elefants',
      artist: 'Oques Grasses',
      album: 'A tope amb la vida',
      artwork: [
        {
          src: '/atopeamblavida-512x512.jpg',
          sizes: '512x512',
          type: 'image/jpeg'
        },
        {
          src: '/atopeamblavida-192x192.jpg',
          sizes: '192x192',
          type: 'image/jpeg'
        }
      ]
    })

    extra.value = player

    navigator.mediaSession.setActionHandler('play', () => player.play())
    navigator.mediaSession.setActionHandler('pause', () => player.pause())
    navigator.mediaSession.setActionHandler('seekbackward', (details) => {
      const skipTime = details.seekOffset || 1
      player.currentTime = Math.max(player.currentTime - skipTime, 0)
    })

    navigator.mediaSession.setActionHandler('seekforward', (details) => {
      const skipTime = details.seekOffset || 1
      player.currentTime = Math.min(player.currentTime + skipTime, player.duration)
    })

    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.fastSeek && 'fastSeek' in player) {
        player.fastSeek(details.seekTime)
        return
      }
      player.currentTime = details.seekTime
    })

    navigator.mediaSession.setActionHandler('previoustrack', () => {
      player.currentTime = 0
    })
  }
})
</script>

<style>
audio {
  width: 100%;
  object-fit: cover;
  object-position: center;
  background-color: #000;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 100px);
  padding: 1em;
}

.viewer {
  height: 100%;
}

/* footer {
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 3em 1em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
} */
</style>
