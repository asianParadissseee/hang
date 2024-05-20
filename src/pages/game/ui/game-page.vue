<template>
  <main>
    <section class="px-20 w-2/3  relative m-auto min-height-96">
      <game-figure/>
      <game-errors/>
      <game-word/>
    </section>
    <game-popup v-if="false"/>
    <game-notification v-if="false"/>
  </main>
</template>

<script setup lang="ts">
import {GameNotification} from "@/widgets/notification";
import {GamePopup} from "@/widgets/popup";
import {GameFigure} from "@/entity/figure";
import {GameErrors} from "@/entity/errors";
import {GameWord} from "@/entity/word";



</script>

<style scoped>

</style>