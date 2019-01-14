<template>
  <div class="bg-hanju text-white flex-1 ml-56 pl-6">
    <headerapp title="片库"></headerapp>
    <!-- <div class="flex-1 text-left mb-3">
      <label class="font-light mr-3">播放地址:</label>
      <div class="w-full flex search-container text-center relative">      
        <input ref="url" type="text" @keyup.enter="addVideoPlayList( $refs.url.value )" placeholder="https://www.youtube.com" 
          class="bg-hanju text-grey-light w-full h-9 pl-8 border-b outline-none">
        <div class="absolute pin-t py-2 px-1 text-grey-light">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="18" height="18">
            <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          </svg>
        </div>        
        <button class="uppercase text-white bg-blue h-9 w-10 ml-3 py-2 rounded mr-10" @click="addVideoPlayList( $refs.url.value )">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="18px" height="18px">
            <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
          </svg>
        </button>         
      </div>
    </div>
    <div ref="downloadItems" class="flex flex-wrap pr-6">                 -->
    <!-- </div> -->
  </div>
</template>

<script>
import headerapp from '../components/Title.vue';
// import DownloadItem from '../components/DownloadItem.vue';
// import Vue from "vue";

export default {
  name: "download",
  components: {
      headerapp
  },
  data() {
    return {
      itemCount: 0
    }
  },
 mounted() {

  },
  methods: {

  }
};
</script>
