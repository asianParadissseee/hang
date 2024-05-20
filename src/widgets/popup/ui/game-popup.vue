<script setup lang="ts">

import {GameButton} from "@/shared/ui/button";
import {ref} from "vue";
import {Status} from "@/shared/types/game-status";

interface GamePopupProps {
  word: string
}

const {} = defineProps<GamePopupProps>()
const gameStatus = ref<Status | null>(null)
const isVisiblePopup = ref(false)
const toggleOpenPopup = (status: Status) => {
  gameStatus.value = status
  isVisiblePopup.value = true
}
const toggleClosePopup = () => {
  isVisiblePopup.value = false
}

const emit = defineEmits<{
  (e: 'restart'): void
}>()

defineExpose({
  toggleClosePopup,
  toggleOpenPopup
})
</script>

<template>
  <div v-show="isVisiblePopup" class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
    <div class="bg-green-500 rounded-md shadow-lg shadow-gray-300 p-5 text-center">
      <h2 v-if="gameStatus === 'win'">
        Поздравляю, вы победили !
      </h2>
      <h2 v-else>
        Вы проиграли
      </h2>
      <h3>
        ...имя {{ word}}
      </h3>
      <game-button @click="emit('restart')">
        Сыграть еще раз
      </game-button>
    </div>
  </div>
</template>

<style scoped>

</style>