<template>

    <tr>
      <td>{{personeller.name}}</td>
      <td>{{personeller.username}}</td>
      <td>{{personeller.phone}}</td>
      <td>
        <router-link
          :to="{name:'duzenle',params:{personel:personeller}}"
          tag="button"
          class="btn btn-outline-warning mr-2">Güncelle
        </router-link>
        <button @click="$store.dispatch('deletePersonel',personeller.name)" class="btn btn-outline-danger mr-2" >Sil</button>
      </td>
  </tr>


</template>

<script>
    export default {
    props:["personeller"]
    }
</script>

<style scoped>

</style>
