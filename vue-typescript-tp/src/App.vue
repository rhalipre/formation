<template>
  <div id="app">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link class="navbar-item" :to="{ name: 'shows' }">
            <img src="logo.jpg" alt="" />
            TV shows store
          </router-link>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <router-link
              class="navbar-item is-active"
              :to="{ name: 'shows-favorites' }"
              >Favorites
            </router-link>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style></style>
