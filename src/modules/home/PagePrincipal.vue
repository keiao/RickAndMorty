<template>
  <div class="Page">
    <header>
      <div class="headerInput">
        <img src="../../assets/rick-and-morty.svg" class="RickAndMorty" alt="RickAndMorty">
        <input type="search" class="iconsInput" placeholder="Buscar personaje" />
      </div>
    </header>
    <main>
      <div v-if="rickM">
        <apiPicture :rickAndMortyId="rickM.id" />
        <h2>{{ rickM.name }}</h2>
        <apiOptions :rickM="rickArr" />
        
      </div>
    </main>
    <footer>
      <img src="../../assets/suazo.svg" class="suazo" alt="suazo">
    </footer>
  </div>
</template>

<script>
import apiPicture from "../../components/apiPicture.vue";
import apiOptions from "../../components/apiOptions.vue";


import getRickAndMortyOptions from "../../helpers/getRickAndMortyOptions";


export default {
  components: { apiPicture, apiOptions },
  data() {
    return {
      rickArr: [],
      rickM: null
    }
  },
  methods: {
    async mixRickArray() {
      this.rickArr = await getRickAndMortyOptions()
    
      const rndInt = Math.floor( Math.random() * 4 )
      this. rickM = this.rickArr[ rndInt ]
  }
},

  mounted() {
    this.mixRickArray()
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

.headerInput {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}

input {
  font-weight: 200;
  color: var(--one-color);
  width: 300px;
  height: 50px;
  background: var(--four-color);
  border-color: var(--one-color);
  background-image: url('../../assets/filter.svg');
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 260px;

  @media screen and (min-width: 845px) {
    width: 500px;
    height: 60px;
    background-position: 450px;
  }

}

::placeholder {
  color: var(--one-color);
  height: 22px;
  padding-left: 90px;
  font-size: 14px;
  font-weight: 100;
  background-image: url('../../assets/search.svg');
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: 10px;

  @media screen and (min-width: 845px) {
    padding-left: 50px;
    font-size: 18px;
    font-weight: 100;
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