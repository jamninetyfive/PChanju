<template>
  <div id="app" style="-webkit-user-select: none" class="font-sans flex-1 min-h-screen bg-hanju">        
    <sidebar></sidebar>    
    <flash-message class="message"></flash-message>
    <keep-alive :include="['download','search','detail']">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar.vue";
  import 'animate.css/animate.css';
  import Vue from "vue";
  import VueBarousel from 'vue-barousel'
  Vue.use(VueBarousel)

  const bus = new Vue();

  window.onerror = function (errorMsg, url) {
    bus.$emit("onError", errorMsg, url );
    return true;
  }

  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        modal: false
      }
    },
 
    created () {
      // handling errors
      bus.$on("onError", (errorMsg, url) => {
          this.flash('<b>Application error: </b> ' + errorMsg + ' <br/><br/> <small><i>' + url + '</i></small>', 
            'error',{
            timeout: 10000
          });
      });

      // main page
      this.$router.push("/");
    }
  };

</script>

<style src="./assets/main.css">