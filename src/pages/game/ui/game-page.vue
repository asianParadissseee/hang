<template>
  <main>
    <section class="px-20 w-2/3  relative m-auto min-height-96">
      <game-figure :wrong-letters-count="wrongLetters.length"/>
      <game-errors :wrong-letters="wrongLetters"/>
      <game-word :word="word" :correct-letters="correctLetters"/>
    </section>
    <game-popup ref="popup" :word="word" @restart="restart"/>
    <game-notification ref="notification"/>
  </main>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {GameNotification} from "@/widgets/notification";
import {GamePopup} from "@/widgets/popup";
import {GameFigure} from "@/entity/figure";
import {GameErrors} from "@/entity/errors";
import {GameWord} from "@/entity/word";
import {useRandomWord} from "@/shared/composables/useRandomWord";
import {useLetters} from "@/shared/composables/useLetters";
import {useNotification} from "@/shared/composables/useNotification";

const {word, getRandomWord} = useRandomWord()
const {
  letters,
  correctLetters,
  wrongLetters,
  isStatusWin,
  isStatusLose,
  addLetter,
  resetLetters
} = useLetters(word)
const {showNotification, notification} = useNotification()
const popup = ref<InstanceType<typeof GamePopup> | null>(null)


const restart = async () => {
  await getRandomWord()
  resetLetters()
  popup.value?.toggleClosePopup()
}

watch(wrongLetters, () => {
  if (isStatusLose.value) {
    popup.value?.toggleOpenPopup('lose')
  }
})
watch(correctLetters, () => {
  if (isStatusWin.value) {
    popup.value?.toggleOpenPopup('win')
  }
})
window.addEventListener('keydown', ({key}: { key: string }) => {
  if (isStatusLose.value || isStatusWin.value) {
    return;
  }
  if (letters.value.includes(key)) {
    showNotification()
  }
  addLetter(key)
})
</script>

<style scoped>

</style>