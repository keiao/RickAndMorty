<template >
  <div class="cards">

<div class="cards-container" v-for=" character in characters" :key="character.id">
 <div class="characterImg">
   <img :src="character.image" alt="characterImg">
 </div>

 <div class="cardsTexts">
   <div class="card-status">
     <span :class="{ 'active': character.status === 'Alive' }" class="circle" />
     {{ character.status }} - {{ character.species }}
   </div>
   <h5 class="card-name">{{ character.name }}</h5>
   <p>Last known location:</p>
   <p class="card-text">{{ character.location.name }}</p>
   <p>First seen in:</p>
   <p class="card-text">{{ character.dimension }}</p>
 </div>
</div>
</div>
</template>


<script  >
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { characterClient } from "../../../api";
export default {
  component:{

  },
 setup() {
   const characters = ref([])
   const character = ref(null);
   const page = ref(1);
   const pages = ref(1);
   const search = ref("");
   
   // function prevPage() {
   //   if (page.value > 1) {
   //     page.value -= 1;
   //     getCharacters();
   //   }
   // };

   // function nextPage() {
   //   if (page.value < pages.value) {
   //     page.value += 1;
   //     getCharacters();
   //   }
   // };

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
     // nextPage,
     // prevPage,
     page,
     pages,
     search,
   }
 }

}
</script>

<style lang="scss" scoped>
@use '../../../modules/character/styles.scss';
</style>