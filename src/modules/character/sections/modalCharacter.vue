<template>
<modal @close="closeModal" :modalActive="modelValue" class="modalM">

  <div class="portadaModal">
    <img class="modalBanner" src="../../../assets/bgModal.png" alt="banner modal">
  </div>

  <div class="boxColor">
    <div class="perfil">
      <img  class="circleImg" :src="character?.image" alt="characterImg">
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
            <img src="../../../assets/i.svg" alt="">
            Gender
          </h5>
          <span class="infoText">{{ character?.gender }}</span>
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
          <span class="infoText">{{ character?.type }}</span>
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
  </div>

</modal>
</template>

<script>
import modal from '../../../components/main/modal.vue';
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

    async function closeModal() {
      emit('update:modelValue', false)
    }

    return {
      closeModal,
    }
  }
}

</script>


<style lang="scss" scoped>
.boxColor {
  position: static;
  z-index: 10;
  background-color: var(--six-color);
  padding: 30px 0;
  width: 100%;

  @media screen and (min-width: 845px){
    padding: 30px  0;
  }
}

.perfil {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  z-index: 2;
  margin-top: -130px;

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

  @media screen and (min-width: 845px) {
    top: -350px;
    gap: 10px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 20px 0px 30px 0px;
  border-bottom: 1px solid var(--five-color);
  width: 300px;

  .infoContainer {
    display: flex;
    gap: 5px;
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

  @media screen and (min-width: 845px) {
    display: block;
    padding: 20px 0px 30px 0px;
    width: 650px;

    .infoContainer {
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    }

    .infoH2 {
      font-size: 23px;
      margin-left: -20px;
      margin-bottom: 20px;
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

.episodios{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 10px 0px 30px 0px;
  border-bottom: 1px solid var(--five-color);
  width: 300px;

  .epiContainer {
    display: flex;
    gap: 5px;
  }

  .epiH2 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .epiBorder {
    border: 1px solid var(--five-color);
    padding: 10px 10px;
    border-radius: 8px;
  }

  .epiName {
    font-size: 11px;
    color: var(--seven-color);
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .epiText {
    font-size: 14px;
    font-weight: 500;
  }

  @media screen and (min-width: 845px) {
    display: block;
    padding: 20px 0px 30px 0px;
    width: 650px;

    .epiContainer {
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    }

    .epiH2 {
      font-size: 23px;
      margin-left: -20px;
      margin-bottom: 20px;
    }

    .epiName {
      padding: 15px 40px;
      border-radius: 8px;
    }
    .epiText {
      font-size: 17px;
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
  width: 180px;
  height: 42px;
  font-size: 15px;
  z-index: 2;
  margin-top: 80px;

  @media screen and (min-width: 845px) {
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-top: auto;
  background-image: url("../../assets/footer.png");
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


.portadaModal {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

}

.modalBanner {
  object-fit: cover;
  object-position: center;
  height: 150px;
  @media screen and (min-width: 845px){
    height: 220px;
  }
}
</style>
