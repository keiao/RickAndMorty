<template>
  <div class="options-container">
    <ul>
      <li v-for="rickM in rickMs" :key="rickM.id">
        {{ rickM.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    rickMs: {
      type: Array,
      requited: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>