<template>
  <div class="bg-hanju text-white flex-1 ml-56 pl-6">
    <headerapp title="主页"></headerapp>
    <div class="flex flex-wrap" style="justify-content: center;">
        <carousel-item></carousel-item>    
    </div>
    <div class="flex flex-wrap">
        <movie-item v-for="item in moviesList" :key="item.movieId" :item="item" ></movie-item>    
    </div>
  </div>
</template>

<script>
import headerapp from '../components/Title.vue';
import MovieItem from '../components/MovieItem.vue'; 
import CarouselItem from '../components/CarouselItem.vue'   
// import { ipcRenderer } from "electron";
import axios from '../api/request.js'

export default {
  name: "Home",
  components: {
      headerapp,
      MovieItem,
      CarouselItem
  },
  data() {
    return {
        moviesList:[]
    }
  },
  mounted() {
   
    this.getHomeList()
  },
  methods: {
    getHomeList(){
      const self = this;
      axios.post('/router', {
          method:'movie.tv.new.list',
          quePages:1,
          appKey: 'iad_movie',
          format: 'json',
          v: '1.0',
          filmType:1,
          pageSize:20
      })
      .then(function (response) {
        self.moviesList = response.data.data.movieList
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  computed: {

  }
};
</script>
