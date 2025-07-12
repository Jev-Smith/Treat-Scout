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

#app {

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
