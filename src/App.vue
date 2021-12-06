<template>
  <div id="app">
   <div class="container">
    <h3 class="text-center mt-5 text-dark font-weight-bolder " >Şirket Çalışanları</h3>
     <div class="d-flex justify-content-center mb-2 shadow-lg mb-2 p-3 text-center align-items-center">
   <router-link to="List" tag="button" class="btn btn-outline-info mr-2">Çalışanlar</router-link>
       <router-link to="New" tag="button" class="btn btn-outline-success mr-2">Yeni Ekle</router-link>
     </div>
     <transition name="page" mode="out-in">
       <router-view></router-view>
     </transition>
   </div>
  </div>
</template>

<script>
  import './assets/bootstrap2.min.css';
export default {
  created() {
   this.$store.dispatch("initApp")
  },
  data(){
    return{
      calisanlar:[]
    }
  }


}
</script>
<style>
html{height: 100% !important;}
body{  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,95,104,1) 0%, rgba(15,156,168,1) 90% );}
  .page-enter, .page-leave-active{
    opacity: 0;
    transform: scale(0);
  }
  .page-enter-active,.page-leave{
    transition: all .5s;
  }


</style>
