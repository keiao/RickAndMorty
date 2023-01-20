<template>
  <div>
    <button @click="onClick">Continuar</button>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useRouter } from 'vue-router';

export default {
  name: "buttons",
  setup () {
    const router = useRouter();


    function onClick() {
      console.log('click')
      router.push({ path: '/Principal' })
    }

    return {
      onClick,
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 0;
  left: 0;
}

button {
  background: var(--two-color);
  color: var(--one-color);
  border: none; 
  border-radius: 60px; 
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: inline-block;
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-weight: 300;
  font-size: 18px;
  
}

button:hover {
  color:  var(--two-color);
}
button:after {
  content: "";
  background: var(--three-color); 
  position: absolute;
  z-index: -1;
  padding: 16px 20px;
  display: block;
  border-radius: 50%;
  left: -50%;
  right: -50%;
  top: -150%;
  bottom: -150%;
  transform: scale(0, 0);
  transition: all 0.4s ease;
}
button:hover::after {
  transition: all 0.6s ease-out;
  transform: scale(1, 1);
}
</style>