<template>
  <header>
  <Compass :size="50" aria-hidden="true" id="compass"/>
  <h1>Treat Scout</h1>
  </header>
  
  <p>Note: Results are user generated, so there may be inaccuracies.</p>
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
  import { IceCreamCone, Heart, Compass } from 'lucide-vue-next';

  export default{
    components: {UserForm, IceCreamCone, Heart, Compass}
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

  header{
    justify-content: center;
    margin-top: 1rem;
  }

  #compass{
    position: relative;
    left: 10px;
    z-index: -1;
    color: var(--third);
  }

  /* Shared styles */
  nav, .nav-link, header{  
    display: flex;
  }

  header, p{
    margin-bottom: 2rem;
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
    font-size: 3rem;
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
