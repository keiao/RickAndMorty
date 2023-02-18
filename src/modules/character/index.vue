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

      <modal @Click="toggleModal" :modalActive="modalActive" class="modalM">

        <!-- <img class="closeButton" src="../../assets/closet.svg" alt=""> -->

        <div class="Perfil">
          <img  class="circleImg" :src="character.image" alt="characterImg">
          <span class="perfilText">{{ character.status }}</span>
          <h3 class="perfilName">{{ character.name }}</h3>
          <span class="perfilText">{{ character.species }}</span>
        </div>

        <div class="informacion">
          <h2 class="infoH2">Información</h2>

          <section class="infoContainer">
            <div class="infoBorder">
              <h5 class="infoName">
                <img src="../../assets/i.svg" alt="">
                Gender
              </h5>
              <span class="infoText">{{ character.gender }}</span>
            </div>

            <div class="infoBorder">
              <h5 class="infoName">
                <img src="../../assets/i.svg" alt="">
                Origin
              </h5>
              <span class="infoText">{{ character?.origin?.name }}</span>
            </div>

            <div class="infoBorder">
              <h5 class="infoName">
                <img src="../../assets/i.svg" alt="">
                Type
              </h5>
              <span class="infoText">{{ character.type }}</span>
            </div>

          </section>
        </div>

        <div class="episodios">
          <h2 class="epiH2">Episodios</h2>

          <section class="epiContainer">

            <div class="epiBorder">
              <h5 class="epiName">
                pilot
              </h5>
              <div>{{ character?.episode?.name }}</div>
            </div>
          </section>
        </div>

        <button class="mdButton">Compartir personaje</button>
      </modal>

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
import modal from '../../components/main/modal.vue';

export default {
  components: {
    Buttons,
    modal,
  },
  setup() {
    const characters = ref([])
    const character = ref("");
    const page = ref(1);
    const pages = ref(1);
    const search = ref("");
    const modalActive = ref(false);

    async function toggleModal(id) {
      modalActive.value = !modalActive.value;

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
      }else{
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