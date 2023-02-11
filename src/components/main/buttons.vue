<template>
  <div class="buttons">
    <div class="btc">
      <div class="buttonsContainer">
        <button @click="onClick('all')" class="buttonMain">All</button>
        <button @click="onClick('unknown')" class="buttonMain">Unknown</button>
        <button @click="onClick('female')" class="buttonMain">Female</button>
        <button @click="onClick('male')" class="buttonMain">Male</button>
        <button @click="onClick('genderless')" class="buttonMain">Genderless</button>
      </div>
    </div>
  </div>

</template>


<script>

export default {
  setup(props, { emit }) {
    function onClick(name) {
      emit('select', name)
    }

    return {
      onClick,
    }
  }
}
</script>


<style lang="scss" scoped>
.buttons {
  border-bottom: 1px solid var(--five-color);
  width: 100%;
  background-color: var(--six-color);

  .btc {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .buttonsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    height: 50px;
    max-width: 1000px;
    padding: 0px 25px;
  }

  .buttonMain {
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
    color: #000;
    &:hover {
     border-bottom: 1px solid #34C759;
    }
  }


  @media screen and (min-width: 845px) {
    .buttonsContainer {
      height: 80px;
      width: 100%;
      max-width: 1200px;
      padding: 0;
    }

    .ButtonMain {
      font-size: 18px;
    }
  }
}
</style>