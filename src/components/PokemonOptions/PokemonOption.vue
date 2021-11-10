<template>
  <button class="btn">Option</button>
</template>

<script lang="ts">
export default {
  name: "PokemonOption",
};
</script>

<style scoped>
.btn {
  transition-duration: 0.1s;
  height: 50px;
  width: 100%;
  align-self: center;
  border: none;
  background-color: var(--color-tertiary);
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
}

.btn:hover {
  border: 2px solid var(--color-secondary);
  color: var(--color-primary);
  transform: scale(1.1);
  letter-spacing: 0.1rem;
  font-weight: var(--button-font-weight-hover);
}

.btn:active {
  transform: scale(0.9);
}
</style>
