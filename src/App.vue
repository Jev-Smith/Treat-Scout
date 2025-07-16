<template>
  <h1>Treat Scout</h1>

  <UserForm/>

  <nav>
    <router-link to="/" class="nav-link">
      <span class="text">Snacks</span>
      <IceCreamCone />
    </router-link>

    <router-link to="/saved" class="nav-link">
      <span class="text">Saved</span>
      <Heart />
    </router-link>
  </nav>
  <router-view/>
</template>

<script>
  import UserForm from './components/UserForm';
  import { IceCreamCone, Heart } from 'lucide-vue-next';

  export default{
    components: {UserForm, IceCreamCone, Heart}
  }
</script>

<style>
  @font-face {
    font-family: 'halo-dek';
    src: url(../fonts/halo_dek/Halo\ Dek.ttf) format('truetype');
  }

  @font-face {
    font-family: 'milky-nice';
    src: url(../fonts/milky_nice/MilkyNice.ttf) format('truetype');
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'milky-nice', sans-serif;
  }

  :root{
    --primary: #FCA3CC;
    --secondary: #BCE6EB;
    --third: #962DB3;
    --fourth: #FDF4F5;
    --active: #c40f64;
    --height-50: 50px;
  }

  /* Shared styles */
  nav, .nav-link{  
    display: flex;
  }
  /* End of shared styles */

  body{
    background: linear-gradient(var(--primary), var(--secondary));
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  #app{
    max-width: 900px;
    width: 95%;
    margin: 0 auto;
  }

  h1{
    font-family: 'halo-dek', sans-serif;
    text-align: center;
    font-size: 3rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: var(--fourth);
    text-shadow: 5px 5px var(--third);
  }

  nav {
    justify-content:space-evenly;
    margin-top: 2rem; 
  }

  .nav-link {
    width: 25%;
    height: var(--height-50);
    background: var(--fourth);
    text-decoration: none;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
  }

  .nav-link:hover{
    background: var(--third);
    color: var(--fourth);
  }

  .text{
    margin-right: 4px;
  }

  nav a.router-link-exact-active {
    color: var(--fourth);
    background: var(--active);
  }
</style>
