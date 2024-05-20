<script setup lang="ts">

import {reactive} from "vue";

const letters = reactive(
    Array.from({length: 5})
);
</script>

<template>
  <div class="flex absolute bottom-10 left-1/2 translate-x-1/2 flex gap-3">
    <span v-for="(letter,id) in letters" :key="id"
          class="inline-flex border-b-2 border-b-black text-xl items-center justify-center my-3 h-12 w-4"></span>
  </div>
</template>

<style scoped>

</style>