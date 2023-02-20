<template>
  <modal @close="closeModal" :modalActive="modelValue" class="modalM">

    <div class="portadaModal">
      <img class="modalBanner" src="../../../assets/bgModal.png" alt="banner modal">
    </div>

    <div class="boxColor">
      <div class="perfil">
        <img class="circleImg" :src="character?.image" alt="characterImg">
        <span class="perfilText">{{ character?.status }}</span>
        <h3 class="perfilName">{{ character?.name }}</h3>
        <span class="perfilText">{{ character?.species }}</span>
      </div>
    </div>

    <div class="content">

      <div class="information">
        <h2 class="infoH2">Información</h2>

        <section class="infoContainer">
          <div class="infoBorder">
            <h5 class="infoName">
              <img src="../../../assets/information.svg">
              Gender
            </h5>
            <span class="infoText">{{ character?.gender }}</span>
          </div>

          <div class="infoBorder">
            <h5 class="infoName">
              <img src="../../../assets/information.svg">
              Origin
            </h5>
            <span class="infoText">{{ character?.origin?.name }}</span>
          </div>

          <div class="infoBorder">
            <h5 class="infoName">
              <img src="../../../assets/information.svg">
              Type
            </h5>
            <span class="infoText">{{ character?.type }}</span>
          </div>

        </section>
      </div>

      <div class="episodios">
        <h2 class="epiH2">Episodios</h2>

        <section class="epiContainer">
          <div v-for="(episode, index) in episodes" :key="episode.id" class="epiContent">
            <div class="epiText">{{ episode.name }}</div>
            <div class="epiEpisodios"> {{ episode.episode }}</div>
            <div class="epiText"> {{ episode.air_date }}</div>
          </div>
        </section>
      </div>
    </div>
    <button class="mdButton">Compartir personaje</button>

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
.portadaModal {
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

.modalBanner {
  object-fit: cover;
  object-position: center;
  height: 150px;

  @media screen and (min-width: 700px) {
    height: 100%;
  }
}

.boxColor {
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

  .circleImg {
    border-radius: 50%;
    width: 120px;
    height: auto;
    border: 5px solid var(--one-color);
  }

  .perfilName {
    font-size: 15px;
    font-weight: 600;
  }

  .perfilText {
    font-size: 13px;
    color: var(--seven-color);
  }

  @media screen and (min-width: 700px) {
    margin-top: -120px;

    .circleImg {
      width: 155px;
    }

    .perfilName {
      font-size: 20px;
    }

    .perfilText {
      font-size: 14px;
    }
  }
}

.information {
  display: flex;
  flex-direction: column;
  padding: 20px 0px 30px 0px;
  border-bottom: 1px solid var(--five-color);
  width: 300px;

  .infoContainer {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .infoH2 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .infoBorder {
    border: 1px solid var(--five-color);
    padding: 10px 10px;
    border-radius: 8px;
  }

  .infoName {
    font-size: 11px;
    color: var(--seven-color);
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .infoText {
    font-size: 14px;
    font-weight: 500;
  }

  @media screen and (min-width: 700px) {
    display: block;
    padding: 20px 0px 30px 0px;
    width: 650px;

    .infoContainer {
      justify-content: space-around;
      flex-direction: row;
    }

    .infoH2 {
      font-size: 23px;
      margin-left: -20px;
    }

    .infoBorder {
      border: 1px solid var(--five-color);
      padding: 15px 40px;
      border-radius: 8px;
    }

    .infoText {
      font-size: 17px;
      font-weight: 500;
    }
  }
}

.episodios {
  display: flex;
  flex-direction: column;
  padding: 20px 0px 30px 0px;
  border-bottom: 1px solid var(--five-color);
  width: 300px;

  .epiContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .epiH2 {
    font-size: 18px;
    margin-bottom: 20px;

  }

  .epiContent {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border: 1px solid var(--five-color);
    border-radius: 8px;
    padding: 15px;
  }

  .epiText {
    font-size: 11px;
    color: var(--seven-color);
  }

  .epiEpisodios {
    font-size: 16px;
    font-weight: 500;
    gap: 5;
  }

  @media screen and (min-width: 700px) {
    display: block;
    width: 650px;

    .epiContainer {
      grid-template-columns: repeat(4, 1fr)
    }

    .epiH2 {
      font-size: 23px;
      margin-left: -20px;
      margin-bottom: 20px;
    }

    .epiText {
      width: 100%;
    }

    .epiEpisodios {
      font-size: 18px;
      font-weight: 500;
    }
  }
}


.mdButton {
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