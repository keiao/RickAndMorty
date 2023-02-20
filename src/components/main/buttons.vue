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
    font-size: 15px;
    cursor: pointer;
    color: var(--four-color);
    padding: 18px 0px;

    &:hover {
      border-bottom: 1px solid var(--eight-color);
    }
  }


  @media screen and (min-width: 700px) {
    .buttonsContainer {
      height: 80px;
      max-width: 1200px;
    }

    .buttonMain {
      font-size: 18px;
      padding: 30px 50px;
    }
  }
}
</style>