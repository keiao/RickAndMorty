<template>
  <div class="home">
    <img src="../public/rick and morty.svg" class="logo" alt="logoRM" />

    <h1>Bienvenido a Rick and Morty</h1>

    <p>
      En esta prueba, evaluaremos su capacidad para construir la aplicación
      mediante el análisis de código y la reproducción del siguiente diseño.
    </p>

  </div>

  <img src="../public/Welcome.svg" class="svg" alt="rickAndMorty" />
  
  <buttons />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    buttons: defineAsyncComponent(() =>
      import(
        /*webpackChunkName: "NavBar"*/ "./shared/components/buttons.vue"
      )
    ),
  },
  
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 200px 200px 0 ;
  padding: 0;
  position: fixed;
}

.logo {
  z-index: 1;
}

.svg {
  position: fixed;
  left: 0px;
  top: -100px;
  z-index: -1;
}

h1 {
  color: var(--one-color);
  font-weight: 300;
  font-size: 36px;
}

p {
  max-width: 80%;
  text-align: center;
  color:  var(--one-color);
  font-weight: 200;
  font-size: 18px;
  padding-bottom: 15px;
}

</style>
