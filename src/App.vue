<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
// import BottomNavigation from './components/BottomNavigation.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

const barcolor = ref('deeppink')
</script>

<template>
  <Header />

  <ReloadPrompt />

  <main>
    <div class="viewer mt-24 w-full flex flex-col-reverse gap-10 items-center justify-center">
      <av-bars
        :bar-width="10"
        :bar-space="10"
        :bar-color="barcolor"
        canv-fill-color="transparent"
        src="/audio/1.mp3"
        canv-width="500"
        canv-height="1000"
        :symmetric="false"
        :fft-size="2048"
      ></av-bars>
    </div>

    <!-- <footer>
      <BottomNavigation />
    </footer> -->
  </main>
</template>

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
