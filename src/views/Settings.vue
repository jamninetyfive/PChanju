<template>
  <div class="bg-hanju text-white flex-1 ml-56 pl-6">
    <headerapp title="设置"></headerapp>
    <!-- <div class="flex-1 text-left">
       <label class="font-light mr-3">搜索:</label>
      <div class="w-full flex search-container text-center relative">      
        <input ref="search" type="text"  v-model="destFolder" class="bg-hanju text-grey-light w-full h-9 pl-8 border-b outline-none">
        <div class="absolute pin-t py-2 px-1 text-grey-light">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="18" height="18">
            <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
          </svg>
        </div>        
        <button class="uppercase text-white bg-blue h-9 w-10 ml-3 py-2 rounded mr-10" @click="chooseFolder()">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="18" height="18">
            <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
          </svg>
        </button>         
      </div>
      <div class="mb-2 pt-3">                
          <label class="font-light mr-3">自动下载文件:</label>
          <div class="form-switch inline-block align-middle">
              <input type="checkbox" v-model="autoDownload" name="1" id="1" class="form-switch-checkbox" />
              <label class="form-switch-label" for="1"></label>
          </div>
          <label class="text-xs text-grey-dark" for="1">{{ `${ autoDownload ? '(on)' : '(off)' }` }}</label>
      </div>
      <button class="uppercase text-white bg-blue px-2 h-10 rounded items-center" @click="historyClear()">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
            </svg>
            <span class="ml-1 mb-2 items-center align-text-top">清除观看历史</span>
      </button>      
    </div> -->
  </div>
</template>

<script>
import headerapp from '../components/Title.vue';
import { ipcRenderer } from "electron";

export default {
  components: {
      headerapp
  },
  methods:{
    chooseFolder: function() {
      ipcRenderer.send("choose-folder");
    },
    historyClear: function() {
      ipcRenderer.send("history-clear");

      this.flash('History has been deleted.',
        'alert-info', {
            timeout: 1000,
            displayIcons: true,
            icons: 'warning'
      });
    }        

  },
  computed: {
    destFolder: {
        get () {
          return this.$store.getters.destinanionFolder;
        },
        set (value) {
           this.$store.dispatch("updateDestinanionFolder", value);
        }
    },
    autoDownload: {
        get () {
          return this.$store.getters.autoDownload;
        },
        set (value) {
           this.$store.dispatch("updateAutoDownload", value);
        }
    }

  }    
  
};
</script>
