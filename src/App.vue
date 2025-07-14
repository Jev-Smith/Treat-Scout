<template>
  <h1>Treat Scout</h1>

  <UserForm/>

  <nav>
    <router-link to="/">Snacks</router-link> |
    <router-link to="/saved">Saved</router-link>
  </nav>
  <router-view/>
</template>

<script>
  import UserForm from './components/UserForm';

  export default{
    components: {UserForm}
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --primary: #FCA3CC;
  --secondary: #BCE6EB;
  --third: #BA90C6;
  --fourth: #FDF4F5;
}

@font-face {
  font-family: 'halo-dek';
  src: url(../fonts/halo_dek/Halo\ Dek.ttf) format('truetype');
}

@font-face {
  font-family: 'milky-nice';
  src: url(../fonts/milky_nice/MilkyNice.ttf) format('truetype');
}

/* Shared styles */
body, option, button{
  font-family: 'milky-nice', sans-serif;
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
  margin: 1rem 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
