<template>
  <div class="App">
    <Hmheader></Hmheader>

    <HmMain></HmMain>

    <HmFooter></HmFooter>


  </div>
</template>

<script>

import HmHeader from '../components/HmHeader.vue'
import HmMain from '../components/HmMain.vue'
import HmFooter from '../components/HmFooterr.vue'

export default {
    components:{
        Hmheader:HmHeader,
        HmMain,
        HmFooter,

    }
}
</script>

<style>
.App {
    width: 600px;
    height: 700px;
    background-color: #87ceeb;
    margin: auto;
    padding: 20px;
}

</style>