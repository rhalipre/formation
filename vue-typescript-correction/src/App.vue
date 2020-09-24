<template>
  <div id="app">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src="./assets/logo.jpg" alt="" />
            TV shows store
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" :to="{ name: 'Shows' }"
              >Shows</router-link
            >
            <router-link class="navbar-item" :to="{ name: 'Favorites' }"
              >Favorites</router-link
            >
          </div>
        </div>
      </nav>
      <section class="hero is-primary">
        <div class="hero-body">
          <router-view />
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.navbar-item.router-link-exact-active {
  color: #00d1b2 !important;
}
</style>
