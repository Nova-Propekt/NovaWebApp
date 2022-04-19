<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1 class="mainPurple">Nova Prospekt</h1>
      <h3 >
        Making simple things not a pain in the ass
       <div class="text-center">
    <v-btn
      class="ma-2"
      outlined
      color="indigo"
    >
      Outlined Button
    </v-btn>
    <v-btn
      class="ma-2"
      outlined
      fab
      color="teal"
    >
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
    <v-btn
      class="ma-2"
      outlined
      large
      fab
      color="indigo"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
      </h3>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.mainPurple {
  text-decoration: none;
  color: hsl(262, 43%, 49%);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: #7B7B7B
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
    background-color: #252525;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
