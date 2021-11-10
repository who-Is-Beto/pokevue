<template>
  <pokemon-page />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PokemonPage from "./views/PokemonPage.vue";
import "./styles/animations.css";
import "./styles/main.css";

@Options({
  components: {
    PokemonPage,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
