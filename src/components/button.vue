<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  setup(props, { emit }) {
    function onClick(e) {
      e.preventDefault();
      emit('click', e)
    }

    return {
      onClick,
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  background: var(--two-color);
  color: var(--one-color);
  border: none;
  border-radius: 60px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: inline-block;
  width: 250px;
  height: 50px;
  cursor: pointer;
  font-weight: 300;
  font-size: 18px;

  @media screen and (min-width: 845px) {
    width: 150px;
    height: 50px;
  }
}

button:hover {
  color: var(--two-color);
}

button:after {
  content: "";
  background: var(--three-color);
  position: absolute;
  z-index: -1;
  padding: 16px 20px;
  display: block;
  border-radius: 50%;
  left: -50%;
  right: -50%;
  top: -150%;
  bottom: -150%;
  transform: scale(0, 0);
  transition: all 0.4s ease;
}

button:hover::after {
  transition: all 0.6s ease-out;
  transform: scale(1, 1);
}
</style>




<!-- setup() {
  const characters = ref([])
  const character = ref(null);
  const page = ref(1);
  const pages = ref(1);
  const search = ref("");
  
  function prevPage() {
    if (page.value > 1) {
      page.value -= 1;
      getCharacters();
    }
  };

  function nextPage() {
    if (page.value < pages.value) {
      page.value += 1;
      getCharacters();
    }
  };

  function searchData() {
    page.value = 1
    getCharacters();
  }


  async function getCharacters() {
    const { data } = await characterClient.getCharacters({
      page: page.value,
      name: search.value
    });
    characters.value = data.results;
    pages.value = data.info.pages;
    console.log(data);
  }


  onMounted(() => {
    getCharacters();
  })


  return {
    characters,
    character,
    searchData,
    nextPage,
    prevPage,
    page,
    pages,
    search,
  }
}

} -->