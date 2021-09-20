<template>
  <div>
    <h3 v-if="user">
      Hello, {{ user }}!
      <br>
      Response from protected endpoint: user first name -> {{ response }}
    </h3>
    <h3 v-else>
      You are not logged in.
    </h3>
  </div>
</template>
<script>
import axios from 'axios'
import {mapGetters} from 'vuex'

export default {
  name: 'Protected',
  data() {
    return{
      response: ''
    }
  },
  computed:{
    ...mapGetters(['user'])
  },
  async beforeCreate() {
    const resp = await axios.get('hello', {
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    this.response = resp.data
  }
}
</script>