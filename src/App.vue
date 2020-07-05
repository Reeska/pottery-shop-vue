<template>
  <div id="app">
    <ui-header>
      <h1><router-link to="/">Pottery Shop Vue</router-link></h1>
      <ui-navbar>
        <ui-search/>
        <router-link to="/cart">
          <ui-cart-link :count="2"></ui-cart-link>
        </router-link>
      </ui-navbar>
    </ui-header>
    <ui-main>
      <router-view/>
    </ui-main>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: black;
    text-decoration: none;
  }
</style>
