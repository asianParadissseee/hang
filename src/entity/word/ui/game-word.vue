<script setup lang="ts">


interface GameWordProps {
  word: string
  correctLetters: string[]
}

const {word} = defineProps<GameWordProps>()
</script>

<template>
  <div class="absolute bottom-10 left-1/2 translate-x-1/2 flex gap-3">
    <span v-for="(letter,id) in word" :key="id"
          class="inline-flex border-b-2 border-b-black text-xl items-center justify-center my-3 h-12 w-4">
      {{ correctLetters.includes(letter) ? letter : ''}}
    </span>
  </div>
</template>

<style scoped>

</style>