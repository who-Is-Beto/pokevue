<template>
  <div class="pokemon-container fade-in">
    <!-- <img :src="imgSource" class="hidden-pokemon" alt="pokemon" />
    <img :src="imgSource" alt="pokemon" /> -->
    {{ imgSource.Pokemon }}
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "PokemonPicture",
  setup(props: any) {
    const imgSource = ref(props);
    console.log(imgSource);
    return {
      imgSource,
    };
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
