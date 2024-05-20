<template>
  <main>
    <section class="px-20 w-2/3  relative m-auto min-height-96">
      <game-figure/>
      <game-errors :wrong-letters="wrongLetters"/>
      <game-word :word="word" :correct-letters="correctLetters"/>
    </section>
    <game-popup v-if="false"/>
    <game-notification ref="notification"/>
  </main>
</template>

<script setup lang="ts">
import {GameNotification} from "@/widgets/notification";
import {GamePopup} from "@/widgets/popup";
import {GameFigure} from "@/entity/figure";
import {GameErrors} from "@/entity/errors";
import {GameWord} from "@/entity/word";
import {computed, ref} from "vue";

const word = ref('василий')
const letters = ref<string[]>([])
const correctLetters = computed(() => letters.value.filter(letter => word.value.includes(letter)))
const wrongLetters = computed(() => letters.value.filter(letter => !word.value.includes(letter)))
const notification = ref<InstanceType<typeof GameNotification> | null>(null)

window.addEventListener('keydown', ({key}: { key: string }) => {
  if (letters.value.includes(key)) {
    notification.value?.toggleOpenNotification()
    setTimeout(() => notification.value?.toggleCloseNotification(), 2000)
    return;
  }
  if (/[а-яА-Яеё]/.test(key)) {
    letters.value.push(key.toLowerCase())
  }
})
</script>

<style scoped>

</style>