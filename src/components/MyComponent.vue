<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <button @click="$emit('on-submit')">Emitir evento</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    title: {
      type: String,
      default: 'Hola desde mi componente!'
    }
  }
}
</script>

<style scoped>
.my-component {
  border: 2px dashed blue;
  padding: 1rem;
}

.my-component h2 {
  color: red !important;
}

.my-component button {
  color: green !important;
}
</style>