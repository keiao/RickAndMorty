<template>
  <div class="PrincipalPage">
    <header>
      <div class="searchBar">
        <div class="iconsSearchBar">
          <!-- <img src="../../assets/search.svg" alt="search">
       <img src="../../assets/filter.svg" alt="filter"> -->
        </div>
        <input
          type="search"
          class="headerInput"
          placeholder="Buscar personaje"
        />
      </div>
      <img src="../../assets/bg.svg" class="headerImg" alt="headerImg" />
    </header>
    <main><h1>titulo</h1></main>
    <footer>
      <img src="../../assets/footer.png" alt="" />
    </footer>
  </div>
</template>

<style scoped>
.PrincipalPage{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.searchBar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  color: var(--one-color);
  width: 500px;
  height: 60px;
  background: var(--four-color);
  border-color: var(--one-color);
}

.headerInput::placeholder {
  background-image: url(../../assets/search.svg), url(../../assets/filter.svg);
  background-repeat: no-repeat;
}

::placeholder {
  height: 45px;
  color: var(--one-color);
  padding-left: 80px;
  font-size: 18px;
}

.headerImg {
  margin: 0;
  padding: 0;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}
</style>