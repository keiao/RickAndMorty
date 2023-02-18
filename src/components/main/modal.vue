<template>
  <div v-show="modalActive" class="modal">
    <div v-show="modalActive" class="modalContent">
      <div class="portadaModal">
        <button @click="closeClick" type="button" class="closeButton">
          <img src="../../assets/closet.svg" alt="">
        </button>
      </div>
      <div class="boxColor"></div>
      <slot />
    </div>
</div>
</template>

<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    function closeClick(e){
      e.preventDefault();
      emit('click', e)
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
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 845px){
    position: fixed;
  }
}

.modalContent {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: var(--one-color);
  width: 350px;
  height: 600px;

  @media screen and (min-width: 845px){
    width: 740px;
    height: 750px;
  }
}

.portadaModal {
  background-image: url("../../assets/bgModal.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 150px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  @media screen and (min-width: 845px){
    width: 100%;
    height: 220px;

    &::after {
    height: 220px;
  }
  }

}
.closeButton {
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
}

.boxColor {
  background-color: var(--six-color);
  padding: 30px 175px;

  @media screen and (min-width: 845px){
    padding: 60px 370px;
  }
}


</style>