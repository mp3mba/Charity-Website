<template>
  <nav>
    <div class="container">
      <router-link :to="{name: 'home'}">
      <h1>charity</h1>
    </router-link>
    <ul>
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'about'}">About</router-link>
      <router-link :to="{name: 'team'}">team</router-link>
      <router-link :to="{name:'causes'}">causes</router-link>
      <router-link :to="{name: 'news'}">news</router-link>
      <router-link :to="{name: 'faqs'}">faqs</router-link>
      <router-link :to="{name: 'contacts'}">contacts</router-link>
    </ul>
    <router-link :to="{name: 'donate'}" class="btn">
      <p>donate now</p>
    </router-link>

    <div class="toggle-button" @click="navToggle">
      <span :class="[show ? 'active' : 'inactive']"><i class="fa-solid fa-x"></i></span>
      <span :class="[!show ? 'active' : 'inactive']"><i class="fa-solid fa-bars"></i></span>
    </div>
    </div>
    
    <ul class="responsive"  :class="[show ? 'active' : '']">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'about'}">About</router-link>
        <router-link :to="{name: 'team'}">team</router-link>
        <router-link :to="{name:'causes'}">causes</router-link>
        <router-link :to="{name: 'news'}">news</router-link>
        <router-link :to="{name: 'faqs'}">faqs</router-link>
        <router-link :to="{name: 'contacts'}">contacts</router-link>
    </ul>
  </nav>
  <router-view/>
  <MyFooter />
</template>

<script>
import MyFooter from './components/FooterView.vue';
  export default{
    data(){
      return{
        show: false,
      }
    },
    components: {
      MyFooter,
    },
    methods: {
      navToggle(){
          this.show = !this.show;
      },
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(46, 46, 46);
  padding: 0 100px;
  text-transform: uppercase;
  height: 60px;
}

.responsive{
  display: none;
}

nav .container{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  font-weight: 600;
  color: #fbfdfe;
  padding: 0 10px;
  text-decoration: none;
  font-size: 14px;
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
}

nav h1{
  font-size: 30px;
  color: rgb(236, 236, 0);
}

nav p{
  background-color: yellow;
  color: black;
  text-align:center;
  padding: 10px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: rgb(236, 236, 0);
}

.toggle-button {
  display: none;
}

@media (min-width: 768px) {
  nav{
    justify-content: center;
    width: 100%;
    padding: 0 20px;
  }

  .container{
    width: 100%;
  }

}

@media (max-width: 768px) {
  nav{
   padding: 0 20px;
  }

  nav h1{
    font-size: 20px;
  }

  nav ul, .btn {
    display: none;
  }

  .toggle-button {
    display: block;
    cursor: pointer;
  }

  /* .toggle-button span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
  } */

  span{
    font-size: 20px;
  }

  .responsive.active {
    display: flex;
    flex-direction: column;
    background-color: rgb(46, 46, 46);
    width: 100vw;
  }

  .responsive.active a{
    font-size: 16px;
    font-weight: 900;
  }

  
  span.inactive{
    color: white;
    display: none;
  }

  span i{
    color: white;
    font-size: 25px;
  }

}
</style>
