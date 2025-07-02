<template>
    <label>
      {{ label }}
      <input :type="type" :value="value" @input="$emit('input', $event.target.value)" />
    </label>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      type: {
        type: String,
        default: 'text'
      },
      value: String
    },
    emits: ['input']
  }
  </script>
  