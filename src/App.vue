<template lang="">
  <div>
    <div class='header'>
      <h1>
        Recipes
      </h1>
      <div class='buttons'>
        <router-link to="/">
          <p>All recipes</p>
        </router-link>
        <router-link to="/">
          <p>Favorite</p>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
  export default{
    
  }
</script>
<style>
  .header{
    display: flex;
    flex-direction: row;
    justify-content:space-around;

  }
  .buttons{
    display: flex;
    gap: 10px;
  }
</style>