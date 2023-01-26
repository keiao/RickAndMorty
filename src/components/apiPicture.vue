<template>
  <div>
    <img :src="imgSrc">
  </div>
</template>

<script>
export default {
  props: {
    rickAndMortyId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return `https://rickandmortyapi.com/api/character/avatar/${this.rickAndMortyId}.jpeg`;
    },
  },
};

</script>

<style lang="scss" scoped>

</style>