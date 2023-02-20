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

        <div v-for=" char in characters" :key="char.id" @click="toggleModal(char.id)" class="cardsContainer">

          <div class="characterImg">
            <img :src="char.image" alt="charImg">
          </div>


          <div class="cardsTexts">
            <div class="cardStatus">
              <span :class="{ 'active': char.status === 'Alive' }" class="circle" />
              {{ char.status }} - {{ char.species }}
            </div>
            <h5 class="cardName">{{ char.name }}</h5>
            <p>Last known location:</p>
            <p class="cardText">{{ char.location.name }}</p>
            <p>First seen in:</p>
            <p class="cardtext">{{ char.dimension }}</p>
          </div>
        </div>
      </div>

      <nav class="pagination">
        <button class="ButtonsPagination" v-on:click="prevPage">Anterior</button>
        <a class="pLiNK">{{ page }}</a>    
        <button class="ButtonsPagination" v-on:click="nextPage">Siguiente</button>
      </nav>
    </main>

    <footer>
      <img src="../../assets/suazo.svg" class="suazo" alt="suazo">
    </footer>


    <ModalCharacter v-model="modalActive" :character="character" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { characterClient } from "../../api";
import Buttons from '../../components/main/buttons.vue'
import ModalCharacter from './sections/modalCharacter.vue';


export default {
  components: {
    Buttons,
    ModalCharacter
  },
  setup() {
    const characters = ref([])
    const character = ref(null);
    const page = ref(1);
    const pages = ref(1);
    const search = ref("");
    const modalActive = ref(false);

    async function toggleModal(id) {
      modalActive.value = !modalActive.value

      if (typeof id === 'number') {
        const { data } = await characterClient.getCharacter(id)
        character.value = data
      }
    }

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

    async function searchData(char) {
      if (char) {
        page.value = 1
        getCharacters();
      } else {
        console.log("no se encuentra");
      }

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
      modalActive,
      toggleModal,
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