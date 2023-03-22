<template>
  <div class="home">
    <div class="content">
      <img src="../../assets/rick-and-morty.svg" class="logo" alt="logoRM" />
  
      <h1 class="title">Bienvenido a Rick and Morty</h1>
  
      <p class="description">
        En esta prueba, evaluaremos su capacidad para construir la aplicación
        mediante el análisis de código y la reproducción del siguiente diseño.
      </p>
      <m-button class="button" @click="onClick">
        Continuar
      </m-button>
    </div>
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
      router.push({ name: 'primary' })
    }

    return {
      onClick,
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('../../assets/welcomeMobil.jpg');
  background-size: cover;
  background-position: center;
  padding: 30px;
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 5;
  }

  @media screen and (min-width: 700px) {
    background-image: url('../../assets/welcome.jpg');
    padding: 30px 25px;
  }
}

.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 320px;
  margin-bottom: 10px;
  @media screen and (min-width: 700px) {
    width: 600px;
  }
}

.title {
  color: var(--one-color);
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 700px) {
    font-size: 36px;
  }
}

.description {
  text-align: center;
  color: var(--one-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.7;
  max-width: 800px;

  @media screen and (min-width: 700px) {
    font-size: 18px;
  }
}

.button {
  margin-top: 30px;
}
</style>