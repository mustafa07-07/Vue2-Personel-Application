import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    personels:[]
  },
  mutations:{
    initPersonels(state,personel){
      state.personels=personel
    },
    addPersonel(state,personel){
      state.personels.push(personel)
    },
    updatePersonel(state,personel){
     let index= state.personels.findIndex(c=>c.id==personel.id)
      if (index>-1){
        state.personels[index]=personel
      }
    },
    deletePersonel(state,PersonelID){
      let index= state.personels.findIndex(c=>c.id=PersonelID)
      if (index>-1){
        state.personels.splice(index,1)
      }
    }
  },
  actions:{
    initApp(context,personel){
      Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(Response=>{
          context.commit("initPersonels",Response.data)
        })
    },
    addPersonel(context , personel){
      return context.commit("addPersonel",personel)

    },
    updatePersonel(context , personel){
      context.commit("updatePersonel",personel)
    },
    deletePersonel(context , PersonelID){
      console.log(PersonelID)
      context.commit("deletePersonel",PersonelID)
    },
  },
  getters:{
    getPersonels(state){
      return state.personels
    }
  }
})

export default store
