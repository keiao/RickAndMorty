<template>
  <modal @close="closeModal" :modalActive="modelValue" class="modalM">

    <div class="portada__modal">
      <img class="modal__banner" src="../../../assets/bgModal.png" alt="banner modal">
    </div>

    <div class="box__color">
      <div class="perfil">
        <img class="circle__img" :src="character?.image" alt="characterImg">
        <span class="perfil__text">{{ character?.status }}</span>
        <h3 class="perfil__name">{{ character?.name }}</h3>
        <span class="perfil__text">{{ character?.species }}</span>
      </div>
    </div>

    <div class="content">

      <div class="information">
        <h2 class="info__title">Información</h2>

        <section class="info__container">
          <div class="info__border">
            <h5 class="info__name">
              <img src="../../../assets/information.svg">
              Gender
            </h5>
            <span class="info_-text">{{ character?.gender }}</span>
          </div>

          <div class="info__border">
            <h5 class="info__name">
              <img src="../../../assets/information.svg">
              Origin
            </h5>
            <span class="info-text">{{ character?.origin?.name }}</span>
          </div>

          <div class="info__border">
            <h5 class="info__name">
              <img src="../../../assets/information.svg">
              Type
            </h5>
            <span class="info-text">{{ character?.type }}</span>
          </div>

        </section>
      </div>

      <div class="episodios">
        <h2 class="epi__title">Episodios</h2>

        <section class="epi__container">
          <div v-for="(episode, index) in episodes" :key="episode.id" class="epi__content">
            <div class="epi-Text">{{ episode.name }}</div>
            <div class="epi-Episodios"> {{ episode.episode }}</div>
            <div class="epi-Text"> {{ episode.air_date }}</div>
          </div>
        </section>
      </div>
    </div>
    <button class="button">Compartir personaje</button>

  </modal>
</template>

<script>
import { computed, watch, ref } from "vue";
import modal from '../../../components/main/modal.vue';
import { episodeClient } from './../../../api'
export default {
  props: {
    character: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    modal,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const episodes = ref(null);

    const characterEpisodesId = computed(() => {
      if (!props.character) return [];
      return props.character.episode.map((char) => char.split('/').at(-1))
    })

    watch(characterEpisodesId, (isCharacterId) => {
      if (isCharacterId.length) {
        characterEpisodes();
      }
    })

    async function characterEpisodes() {
      const promises = characterEpisodesId.value.map(async (id) => {
        const episode = await episodeClient.getEpisode(id);
        return episode;
      });

      const resultEposides = await Promise.allSettled(promises);


      episodes.value = resultEposides.map(episode => episode.value.data);
    }

    async function closeModal() {
      emit('update:modelValue', false)
    }

    return {
      closeModal,
      characterEpisodesId,
      episodes,
    }
  }
}

</script>


<style lang="scss" scoped>
.portada__modal {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 150px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  @media screen and (min-width: 700px) {
    &::after {
      height: 100%;
    }
  }

}

.modal__banner {
  object-fit: cover;
  object-position: center;
  height: 150px;

  @media screen and (min-width: 700px) {
    height: 100%;
  }
}

.box__color {
  position: static;
  z-index: 10;
  background-color: var(--six-color);
  padding: 15px 0;
  width: 100%;

  @media screen and (min-width: 700px) {
    padding: 20px 0;
  }
}

.perfil {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
  margin-top: -100px;

  @media screen and (min-width: 700px) {
    margin-top: -120px;
  }
}

.circle__img {
  border-radius: 50%;
  width: 120px;
  height: auto;
  border: 5px solid var(--one-color);

  @media screen and (min-width: 700px) {
    width: 155px;
  }
}

.perfil__name {
  font-size: 15px;
  font-weight: 600;

  @media screen and (min-width: 700px) {
    font-size: 20px;
  }
}

.perfil__text {
  font-size: 13px;
  color: var(--seven-color);

  @media screen and (min-width: 700px) {
    font-size: 14px;
  }
}


.information {
  display: flex;
  flex-direction: column;
  padding: 20px 0px 30px 0px;
  border-bottom: 1px solid var(--five-color);
  width: 300px;

  @media screen and (min-width: 700px) {
    display: block;
    padding: 20px 0px 30px 0px;
    width: 650px;
  }
}

.info__container {
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 700px) {
    justify-content: space-around;
    flex-direction: row;
  }
}

.info__title {
  font-size: 18px;
  margin-bottom: 20px;

  @media screen and (min-width: 700px) {
    font-size: 23px;
    margin-left: -20px;
  }
}

.info__border {
  border: 1px solid var(--five-color);
  padding: 10px 10px;
  border-radius: 8px;

  @media screen and (min-width: 700px) {
    border: 1px solid var(--five-color);
    padding: 15px 40px;
    border-radius: 8px;
  }
}

.info__name {
  font-size: 11px;
  color: var(--seven-color);
  display: flex;
  align-items: center;
  gap: 3px;
}

.info-text {
  font-size: 14px;
  font-weight: 500;

  @media screen and (min-width: 700px) {
    font-size: 17px;
    font-weight: 500;
  }
}


.episodios {
  display: flex;
  flex-direction: column;
  padding: 20px 0px 30px 0px;
  border-bottom: 1px solid var(--five-color);
  width: 300px;
  @media screen and (min-width: 700px) {
    display: block;
    width: 650px;
  }
}

  .epi__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media screen and (min-width: 700px) {
      grid-template-columns: repeat(4, 1fr)
  }
  }

  .epi__title {
    font-size: 18px;
    margin-bottom: 20px;
    @media screen and (min-width: 700px) {
      font-size: 23px;
      margin-left: -20px;
      margin-bottom: 20px;
  }
  }

  .epi__content {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border: 1px solid var(--five-color);
    border-radius: 8px;
    padding: 15px;
  }

  .epi-Text {
    font-size: 11px;
    color: var(--seven-color);
    @media screen and (min-width: 700px) {
      width: 100%;
  }
  }

  .epi-Episodios {
    font-size: 16px;
    font-weight: 500;
    gap: 5;
    @media screen and (min-width: 700px) {
      font-size: 18px;
      font-weight: 500;
  }
  }



    .epi__container {
     
    }

    .epi__title {
     
    }

    .epi-Text {
     
    }

    .epi-Episodios {
      
    }



.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--two-color);
  color: var(--one-color);
  border: none;
  border-radius: 60px;
  padding: 15px 30px;
  font-size: 15px;
  margin: 30px;

  @media screen and (min-width: 700px) {
    padding: 18px 30px;
    margin-left: 480px;
  }
}
</style>