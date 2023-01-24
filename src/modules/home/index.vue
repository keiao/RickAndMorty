<template>
  <div class="home">
    <img src="../../assets/rick-and-morty.svg" class="RM" alt="logoRM" />

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
export default {
  components: {
    MButton,
  },
  setup() {
    const router = useRouter();

    function onClick() {
      router.push({ path: '/Principal' })
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
  padding: 30px 25px;
  min-height: 100vh;
  background-image: url('../../assets/welcomeMobil.jpg');
  background-size: cover;
  background-position: center;

  .RM {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::after {
    content: "";
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
    padding-bottom: 60px;
  }

  @media screen and (min-width: 845px) {
    background-image: url('../../assets/welcome.jpg');
  }

}

.title {
  color: var(--one-color);
  font-weight: 300;
  font-size: 26px;
  text-align: center;
  margin: 30px;
  z-index: 2;

  @media screen and (min-width: 845px) {
    font-weight: 300;
    font-size: 36px;
    margin: -10px 0px 30px 0px;
  }
}

.description {
  text-align: center;
  color: var(--one-color);
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 50px;
  line-height: 1.7;
  z-index: 2;

  @media screen and (min-width: 845px) {
    max-width: 55%;
    text-align: center;
    font-size: 18px;
    margin-bottom: 30px;
  }
}

.Mbutton {
  z-index: 2;
}
</style>