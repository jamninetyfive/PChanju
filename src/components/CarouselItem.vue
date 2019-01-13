<template>
  <transition name="router-animation" enter-active-class="animated slideInUp faster">
    <div class="text-white flex mr-3 mb-3 h-56 rounded">      
      <barousel :list="bannerList"
                :width="800"
                :height="300"
                :imgType="'full'"
                @barousel="cb">
      </barousel>
    </div>
  </transition>
</template>

<script>
import axios from '../api/request.js'

export default {
  name: "carousel-item",
  data() {
    return {
      bannerList:[],
      oldBannerList:[]
    };
  },
  mounted() {
    this.setList()
  },
  methods: {
    setList() {
      const self = this;
      axios.post('/router', {
          method:'movie.tv.banner.list',
          appKey: 'iad_movie',
          format: 'json',
          v: '1.0',
      })
      .then(function (response) {
          self.changeList(response.data.data.bannerList)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    cb (i) {
      this.$router.push({
          name: 'detail',
          params: { id:this.oldBannerList[i].movieId, title: this.oldBannerList[i].movieName }
      }); 
    },
    changeList(list){
      this.oldBannerList = list;
      for (var i=0;i<list.length;i++)
      {
        let obj = {
          src:'https://static.timehanju.com/' + list[i].imgUrl,
          title:list[i].movieName + ' - ' + list[i].continueInfo
        } 
        this.bannerList.push(obj)
      }
    },
  },
  computed: {

  }
};
</script>