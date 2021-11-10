<template>
  <h1>Who's that pokemon?</h1>
  <pokemon-picture :Pokemon="pokemon" />
  <pokemon-options />
</template>

<script lang="ts">
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions/PokemonOptions.vue";
import { ref } from "vue";
export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  setup() {
    const pokemon = ref("ajshdghaajsddhasd");
    return {
      pokemon,
    };
  },
};
</script>

PokemonOptions
