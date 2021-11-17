<template>
  <div class="pokemon-container fade-in">
    <!-- <img :src="imgSource" class="hidden-pokemon" alt="pokemon" />
    <img :src="imgSource" alt="pokemon" /> -->
    {{ pokemon.imgSource }}
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "PokemonPicture",
  props: {
    pokemon: {
      type: String,
      required: true,
    },
  },
  setup(props: any) {
    const imgSource = ref(props.pokemon);
    console.log(imgSource.value);
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
