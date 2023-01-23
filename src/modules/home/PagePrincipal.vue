<template>
  <div class="Page">
    <header>
      <div class="headerInput">
        <img src="../../assets/rick-and-morty.svg" class="RickAndMorty" alt="RickAndMorty">
        <input type="search" class="iconsInput" placeholder="Buscar personaje" />
      </div>
    </header>
    <main>
    </main>
    <footer>
      <img src="../../assets/suazo.svg" class="suazo" alt="suazo">
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.Page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-image: url('../../assets/header.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;

  .RickAndMorty {
    z-index: 2;
    width: 347px;
    height: 122px;
    margin-top: 80px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 400px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
}

.headerInput {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}

input {
  font-weight: 200;
  color: var(--one-color);
  width: 500px;
  height: 60px;
  background: var(--four-color);
  border-color: var(--one-color);
  background-image: url('../../assets/filter.svg');
  background-repeat: no-repeat;
  background-size: 24px;
  background-position:  450px;

}

::placeholder {
  color: var(--one-color);
  padding-left: 50px;
  font-size: 18px;
  font-weight: 100;
  background-image: url('../../assets/search.svg');
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: 10px;

}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-top: auto;
  background-image: url('../../assets/footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100px;
  z-index: -1;

  .suazo {
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
}
</style>