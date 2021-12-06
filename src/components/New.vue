<template>
<div class="row">
  <div class="col-md-6 offset-3">
    <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark shadow bg-primary font-weight-bolder text-dark">
      <div class="form-group">
        <label>İsim</label>
        <input required v-model="personel.name" type="text" class="form-control" placeholder="Personel İsmini Giriniz.">
      </div>
      <div class="form-group">
        <label>Soy İsim</label>
        <input  required v-model="personel.username" type="text" class="form-control" placeholder="Personel Soyadını Giriniz.">
      </div>
      <div class="form-group">
        <label>Telefon</label>
        <input required v-model="personel.phone" type="text" class="form-control" placeholder="Personel Telefon Numarası Giriniz.">
      </div>
      <div class="form-group justify-content-center text-center align-items-center">
      <button type="submit" class="btn btn-outline-dark text-break">Ekle</button>
      <router-link to="List" tag="button" class="btn btn-outline-danger">İptal</router-link>
      </div>
    </form>
  </div>
</div>
</template>

<script>
    export default {
       data(){
         return{
           personel:{

             name:'',
             username:'',
             phone:'',
             id:new Date().getTime()

           }
         }
       },
      methods:{
         onSubmit(){
          this.$store.dispatch("addPersonel",this.personel)
           this.$router.push('/')
         }

      }
    }
</script>

<style scoped>

</style>
