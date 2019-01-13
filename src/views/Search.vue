<template>
  <div class="bg-hanju text-white flex-1 ml-56 pl-6">
    <headerapp title="搜索"></headerapp>
    <loading :active.sync="isLoading" :opacity="0.1" color=white></loading>    
    <div class="flex-1 text-left mb-3">
      <label class="font-light mr-3">搜索:</label>
      <div class="flex search-container text-center relative" style="width:400px;margin:0 auto;">
        <input ref="search" @keyup.enter="search( $refs.search.value )" placeholder="搜索从这里开始..." type="text"  class="bg-hanju search-input h-9 pl-8 border-b outline-none ">
        <div class="pin-t py-2 px-1 text-grey-light absolute">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="18" height="18">
            <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          </svg>
        </div> 
      </div>
    </div>
    <div class="flex flex-wrap">  
      <search-item v-for="item in items" :key="item.movieId" :item="item" v-on:onDownload="onDownload"></search-item>            
    </div>
  </div>
</template>

<script>
import headerapp from '../components/Title.vue';
import SearchItem from '../components/SearchItem.vue';   
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// import { ipcRenderer } from "electron"; 

import axios from '../api/request.js'

export default {
  name: "search",
  components: {
      headerapp,
      SearchItem,
      Loading
  },
  data() {
    return {
      isLoading: false,      
      items: []
    }
  },
  methods: {
    search(_search) {
      console.log(_search);
      if (_search.trim() == "") {
        this.items = [];
        return;
      }

      this.isLoading = true;
      try {
        this.getSearchList(_search)
      } finally {
        this.isLoading = false;
      }
    },
    getSearchList(con){
      const self = this 
      axios.post('/router', {
          method:'movie.search.list',
          content:con,
          quePages:1,
          appKey: 'iad_movie',
          format: 'json',
          v: '1.0',
          pageSize:20
      })
      .then(function (response) {
        let tvList = [];
        let filmList = [];
        let artList =[];
        if(response.data.data.resultTV){
          tvList = response.data.data.resultTV.movieList
          console.log(tvList)
        }
        if(response.data.data.resultFilm){
          filmList = response.data.data.resultFilm.movieList
          console.log(filmList)
        }
        if(response.data.data.resultArt){
          artList = response.data.data.resultArt.movieList
          console.log(artList)
        }
        self.items = Object.assign(tvList,filmList,artList)
        console.log(self.items)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    onDownload(url, title) {
      console.log(url);
      this.$eventBus.$emit("onAddVideo", "https://www.youtube.com" + url);
      
      this.flash('Video <b>'+ title +'</b> has been added to download list',
        'alert-warning', {
            timeout: 1000,
            displayIcons: true,
            icons: 'warning'
      });   

      for (var i = this.items.length; i--;) {
        if (this.items[i].url === url) {
          this.items.splice(i, 1);
          return;
        }
      }     
    }, 
  }
}
</script>
