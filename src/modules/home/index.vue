<template>
  <div class="home">
    <img src="../../assets/rick-and-morty.svg" class="rMorty" alt="logoRM" />

    <h1 class="title">Bienvenido a Rick and Morty</h1>

    <p class="description">
      En esta prueba, evaluaremos su capacidad para construir la aplicación
      mediante el análisis de código y la reproducción del siguiente diseño.
    </p>
    <m-button class="Mbutton" @click="onClick">
      Continuar
    </m-button>

  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import MButton from "../../components/button.vue";
import Buttons from '../../components/main/buttons.vue';
export default {
  components: {
    MButton,
    Buttons
  },
  setup() {
    const router = useRouter();

    function onClick() {
      router.push({ name: 'primary' })
    }

    return {
      onClick,
      onSaludo() {
        alert('Saludar')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-height: 100vh;
  background-image: url('../../assets/welcomeMobil.jpg');
  background-size: cover;
  background-position: center;

  .rMorty {
    z-index: 2;
    width: 320px;
  }

  &::after {
    content: "";
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  @media screen and (min-width: 700px) {
    background-image: url('../../assets/welcome.jpg');
    padding: 30px 25px;

    &::after {
      padding-bottom: 60px;
    }

    .rMorty {
      width: 600px;
      margin-top: 80px;
    }

  }

}

.title {
  color: var(--one-color);
  font-weight: 300;
  font-size: 23px;
  text-align: center;
  margin: 30px;
  z-index: 2;

  @media screen and (min-width: 700px) {
    font-weight: 300;
    font-size: 36px;
    margin: -20px 0px 20px;
  }
}

.description {
  text-align: center;
  color: var(--one-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.7;
  z-index: 2;

  @media screen and (min-width: 700px) {
    max-width: 55%;
    font-size: 18px;
  }
}

.Mbutton {
  z-index: 2;
  margin-top: 30px;
}
</style>