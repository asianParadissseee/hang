<script setup lang="ts">

import {GameButton} from "@/shared/ui/button";
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
    <div class="bg-green-500 rounded-md shadow-lg shadow-gray-300 p-5 text-center">
      <h2>
        Поздравляю, вы победили !
      </h2>
      <game-button>
        Сыграть еще раз
      </game-button>
    </div>
  </div>
</template>

<style scoped>

</style>