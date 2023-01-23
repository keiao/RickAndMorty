<template>
  <div class="home">
    <img src="../../assets/rick-and-morty.svg" alt="logoRM" />

    <h1 class="title">Bienvenido a Rick and Morty</h1>

    <p class="description">
      En esta prueba, evaluaremos su capacidad para construir la aplicación
      mediante el análisis de código y la reproducción del siguiente diseño.
    </p>
    <m-button @click="onClick">
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
  padding: 30px 25px;
  min-height: 100vh;
  background-image: url('../../assets/welcome.svg');
  background-size: cover;
  background-position: center;
}

.title {
  color: var(--one-color);
  font-weight: 300;
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
}

.description {
  max-width: 75%;
  text-align: center;
  color: var(--one-color);
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 15px;
  line-height: 1.7;
}
</style>