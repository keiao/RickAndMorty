<template>
  <div class="Page">
    <header>
      <div class="headerLogo">
        <img src="../../assets/rick-and-morty.svg" class="RickAndMorty" alt="RickAndMorty">
      </div>

      <div class="search">
        <div class="iconsInput">
          <button class="searchSvg" v-on:click="searchData"> <img src="../../assets/search.svg" alt="search"> </button>

          <input v-model="search" type="text" v-on:keyup.enter="searchData" placeholder="Buscar personaje" />
          <img src="../../assets/filter.svg" class="filterSvg" alt="filter">
        </div>
      </div>

      <div class="filterDesplegable">
        <button class="filterButton">
          <span class="filterTextGreen">Filtro aplicados:</span>
          Status, Origin
        </button>
      </div>

    </header>
    <main>
      <Buttons @select="getCharacters" />

      <div class="cards">

        <div class="cardsContainer" v-for=" character in characters" :key="character.id">
          <div class="characterImg">
            <img :src="character.image" alt="characterImg">
          </div>

          <div class="cardsTexts">
            <div class="cardStatus">
              <span :class="{ 'active': character.status === 'Alive' }" class="circle" />
              {{ character.status }} - {{ character.species }}
            </div>
            <h5 class="cardName">{{ character.name }}</h5>
            <p>Last known location:</p>
            <p class="cardText">{{ character.location.name }}</p>
            <p>First seen in:</p>
            <p class="cardtext">{{ character.dimension }}</p>
          </div>
        </div>
      </div>

      <nav class="pagination">
        <button class="ButtonsPagination" v-on:click="prevPage">Anterior</button>

        <ul class="paginationList">
          <li>
            <a class="pLiNK">{{ page }}</a>
          </li>
        </ul>

        <button class="ButtonsPagination" v-on:click="nextPage">Siguiente</button>
      </nav>
    </main>
    <footer>
      <img src="../../assets/suazo.svg" class="suazo" alt="suazo">
    </footer>
  </div>
</template>

<script>

import axios from 'axios';
import { onMounted, ref } from 'vue';
import { characterClient } from "../../api";
import Buttons from '../../components/main/buttons.vue'


export default {
  components: {
    Buttons,
  },
  setup() {
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

    function onClick(name) {
      console.log('onClick', name);
    }


    async function getCharacters(gender = '') {
      const { data } = await characterClient.getCharacters({
        page: page.value,
        name: search.value,
        gender,
      });
      console.log(data)
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
      onClick,
      getCharacters,
      nextPage,
      prevPage,
      page,
      pages,
      search,
    }
  }

}
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>