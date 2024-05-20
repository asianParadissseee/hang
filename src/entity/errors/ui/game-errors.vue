<script setup lang="ts">

interface GameErrorProps {
  wrongLetters: string[]
}

const {wrongLetters} = defineProps<GameErrorProps>()

</script>

<template>
  <div v-if="wrongLetters.length" class="absolute top-0  right-96 flex flex-col text-right">
    <div>
      <p>Ошибки</p>
      <span v-for="(letter,id) in wrongLetters" :key="id">
  {{ id + 1 === wrongLetters.length -1 ? letter : `${letter}, `}}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>