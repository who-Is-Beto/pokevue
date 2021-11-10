<template>
  <div class="options-container">
    <pokemon-option />
    <pokemon-option />
    <pokemon-option />
    <pokemon-option />
  </div>
</template>

<script lang="ts">
import PokemonOption from "./PokemonOption.vue";
export default {
  name: "PokemonOptions",
  components: {
    PokemonOption,
  },
};
</script>

<style scoped>
.options-container {
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 185px;
}
</style>
