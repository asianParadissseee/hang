<script setup lang="ts">

import {ref} from "vue";


const isVisible = ref(false)

const toggleOpenNotification = () => {
  isVisible.value = true
}
const toggleCloseNotification = () => {
  isVisible.value = false
}
defineExpose({
  toggleCloseNotification,
  toggleOpenNotification
})
</script>

<template>
  <div v-show="isVisible" class="transition duration-700">
    <div
        :class="[ `bg-black bg-opacity-30 rounded-t-lg px-5 py-4 absolute bottom-0 left-1/3  transition-transform duration-300 ease-in-out`]">
      <p class="text-white">Вы уже вводили этот символ</p>
    </div>
  </div>
</template>

<style scoped>

</style>