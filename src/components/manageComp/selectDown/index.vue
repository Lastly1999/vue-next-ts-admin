<template>
  <a-select :defaultActiveFirstOption="true" default-value="lucy" style="width: 120px" @change="handleChange">
    <a-select-option v-for="d in data" :key="d.value">
      {{ d.text }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  name: 'selectDown',
  setup() {

    return {}
  }
})
</script>

<style scoped>

</style>