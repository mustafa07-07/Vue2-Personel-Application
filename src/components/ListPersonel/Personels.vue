<template>
  <div>

    <table  v-if="Personels.length >0" class="table table-bordered table-striped table-dark">
    <thead>
    <th>İsim</th>
    <th>Soyisim</th>
    <th>Telefon</th>
    <th>İşlemler</th>
    </thead>
    <tbody>
    <personel v-for="personel in Personels" :key="personel.id" :personeller="personel"/>
    </tbody>
  </table>
    <div v-else class="alert alert-dismissible alert-danger text-center">
      <p><strong>Sistemde Kayıtlı Bir Çalışan Bulunamadı...</strong> </p>
    </div>
</div>
</template>

<script>
  import Personel from "./Personel";
  export default {
    components:{
      Personel
    },
    computed:{
      Personels(){
        return this.$store.getters.getPersonels
      }
    }
  }

</script>

