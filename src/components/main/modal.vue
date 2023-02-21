<template>
  <div v-if="modalActive" class="modal">
    <div class="modal__content">
      <button @click="closeClick" type="button" class="close__button">
        <img src="../../assets/closet.svg">
      </button>
      <slot />
    </div>
</div>
</template>

<script>
import { watch } from "vue";

export default {
  props: {
    modalActive: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const bodyHtml = document.querySelector('body');

    watch(() => props.modalActive, (isActive) => {
      if (isActive) {
        bodyHtml.style.overflow = 'hidden';
      } else {
        bodyHtml.style.overflow = 'inherit';
      }
    })

    function closeClick(e){
      emit('close', e)
    }
    return {
      closeClick,
    }
  }
}

</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 700px){
    position: fixed;
  }
}

.modal__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: var(--one-color);
  width: 350px;
  height: 85%;
  overflow-y: auto;

  @media screen and (min-width: 700px){
    width: 740px;
  }
}

.close__button {
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
}


</style>