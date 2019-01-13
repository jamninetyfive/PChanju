<template>
  <transition name="router-animation" enter-active-class="animated slideInUp faster">
    <div class="bg-search-item text-white flex mr-3 mb-3 h-56 rounded" @click="goDetail(item)">      
      <div class="ml-3 mt-3 mb-3 w-32 h-45 rounded" style="width:158px;height:225px;">
        <img class="vbanner" v-bind:src="'https://static.timehanju.com/' + item.bannerUrl" alt="icon">
      </div>
      <div class="w-70 my-3 ml-1">
        <div class="text-base w-full h-13 relative">{{item.movieName}}</div>          
        <div class="flex w-full">
          <div class="flex-1 mt-4">
            <div class="text-grey-light text-xs mt-1 mb-1">演员: {{item.performer}}</div>            
            <div class="text-grey-light text-xs mt-1 mb-1">类型: {{item.type}}</div>
            <div class="text-grey-light text-xs mt-1 mb-1">地区: {{item.area}}</div>
            <div class="text-grey-light text-xs mt-1 mb-1">导演: {{item.director}}</div>
            <div class="text-grey-light text-xs mt-1 mb-1">年份: {{item.years}}</div>
            <div class="text-grey-light text-xs mt-1 mb-1">状态: {{item.continueInfo}}</div>
          </div>
          <button class="uppercase text-white bg-play mr-2 h-10 w-10 px-1 rounded-full" @click="play()">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 18 18"
            >
              <path d="M4 4l12 6-12 6z"></path>
            </svg>
          </button>
          
          <button class="uppercase text-white bg-download mr-3 h-10 w-10 px-1 rounded-full" @click="$emit('onDownload', item.url, item.movieName)">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path>
            </svg>
          </button>
          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "search-item",
  props: ["item"],
  data() {
    return {
    };
  },
  methods: {
  
    play() {
      this.$router.push({
        name: 'player',
        params: { url: "https://www.youtube.com" + this.item.url, title: this.item.title, router: "search" }
      });   
    },
    goDetail(item){
      this.$router.push({
          name: 'detail',
          params: { id:item.movieId, title: item.movieName }
      }); 
    }
  },
  computed: {
    img() {
      return "https://img.youtube.com/vi/" + this.item.videoId +"/default.jpg";
    } 
  }
};
</script>