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


    </header>
    <main>
      <div class="buttons">
        <div class="buttons-container">
          <button class="ButtonMain">All</button>
          <button class="ButtonMain">Unknown</button>
          <button class="ButtonMain">Female</button>
          <button class="ButtonMain">Male</button>
          <button class="ButtonMain">Genderless</button>
        </div>
      </div>

      <div class="cards">

        <div class="cards-container" v-for=" character in characters" :key="character.id">
          <div class="characterImg">
            <img :src="character.image" alt="characterImg">
          </div>

          <div class="cardsTexts">
            <div class="card-status">
              <div class="circle"></div>{{ character.status }} - {{ character.species }}
            </div>
            <h5 class="card-name">{{ character.name }}</h5>
            <p class="card-text">{{ character.type }}</p>
            <p class="card-text">{{ character.gender }}</p>

            <p>Last known location:</p>
            <p class="card-text">{{ character.location.name }}</p>
          </div>
        </div>
      </div>

      <nav class="pagination">
        <a class="ButtonsPagination" v-on:click="changePage(page - 1);">Anterior</a>

        <ul class="paginationList">
          <li>
            <a class="pLiNK">{{ page }}</a>
          </li>
        </ul>

        <a class="ButtonsPagination" v-on:click="changePage(page + 1);">Siguiente</a>
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
import { characterClient } from "../../api"

export default {
  setup() {
    const characters = ref([])
    const character = ref(null);
    const page =  ref(1);
    const pages = ref(1);
    const search = ref("");


    function changePage(page) {
      page.value = page.value <= 0 || page.value > pages.value ? page.value : page.value;
      getCharacters();
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
      changePage,
      page,
      pages,
      search,
    }
  }

}
</script>

<style lang="scss" scoped>
.Page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-image: url('../../assets/headermobil.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;

  .RickAndMorty {
    z-index: 2;
    width: 300px;
    height: 82px;
    margin-top: 80px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 400px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  @media screen and (min-width: 845px) {
    background-image: url('../../assets/header.png');
    width: 100%;
    height: 400px;

    .RickAndMorty {
      z-index: 2;
      width: 347px;
      height: 122px;
      margin-top: 80px;
    }
  }
}

.headerLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;

  .iconsInput {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    .searchSvg {
      position: absolute;
      left: 8px;
      z-index: 2;
      background: none;
      border: none;
      width: 30px;
      height: auto;
    }

    .filterSvg {
      position: absolute;
      right: 18px;
      z-index: 2;
      width: 22px;
      height: auto;
    }
  }

  input {
    font-weight: 200;
    color: var(--one-color);
    width: 150px;
    height: 50px;
    padding: 0px 60px;
    background-color: var(--four-color);
    border: 2px solid var(--one-color);
    border-radius: 6px;
    font-size: 18px;
  }

  ::placeholder {
    color: var(--one-color);
    height: 22px;
    font-size: 14px;
    font-weight: 100;
  }

  @media screen and (min-width: 845px) {
    .iconsInput {
    .searchSvg {
      left: 8px;
      border: none;
      width: 36px;
      height: auto;
    }

    .filterSvg {
      right: 18px;
      width: 25px;
      height: auto;
    }
  }
    input {
      width: 300px;
      height: 60px;
      padding: 0px 80px;
    }

  

    ::placeholder {
      padding: 0;
      font-size: 18px;
      font-weight: 100;
    }

  }
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
}

.buttons {
  border-bottom: 1px solid var(--five-color);
  width: 100%;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 50px;
  background-color: var(--six-color);


  .ButtonMain {
    border: none;
    background: none;
    font-size: 12px;
    cursor: pointer;
  }

  @media screen and (min-width: 845px) {
    gap: 100px;
    width: 100%;
    height: 80px;

    .ButtonMain {
      border: none;
      background: none;
      font-size: 16px;
    }
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  margin: 30px 0px;
  gap: 30px;


  .cards-container {
    display: flex;
    flex-direction: column;
  }

  .characterImg {
    display: flex;
    justify-content: center;

    img {
      border-radius: 15px 15px 0 0;
    }
  }

  .cardsTexts {
    border: 1px solid var(--five-color);
    gap: 8px;
    padding: 15px 5px;

    .card-text {
      color: var(--seven-color);
    }

    .card-status {
      display: flex;
      align-items: center;
      color: var(--seven-color);
      gap: 5px;
    }

    .circle {
      width: 10px;
      height: 10px;
      background-color: #27AE60;
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 845px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    padding: 0px 15px;

    .cards-container {
      flex-direction: row;
    }

    .characterImg {
      img {
        border-radius: 10% 0 0 10%;
      }
    }

    .cardsTexts {
      width: 100%;
      border-radius: 0 20px 20px 0;

      .card-name {
        font-size: 20px;

      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0;
  margin: 20px 0px;

  .ButtonsPagination {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--two-color);
    border-radius: 50px;
    width: 120px;
    height: 50px;
    color: var(--two-color);
    cursor: pointer;
  }

  .pLiNK {
    padding: 10px;
    border-radius: 5px;
    background-color: var(--two-color);
    color: var(--one-color);
  }

  @media screen and (min-width: 845px) {
    gap: 50px;
  }


}


footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-top: auto;
  background-image: url('../../assets/footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 80px;
  z-index: -1;

  .suazo {
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 80px;
    margin: 0;
    padding: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  @media screen and (min-width: 845px) {
    width: 100%;
    height: 80px;
  }
}
</style>