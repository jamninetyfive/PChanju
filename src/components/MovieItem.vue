<template>
  <transition name="router-animation" enter-active-class="animated slideInUp faster">
    <div class="movieitem">
      <div class="cover-wp" @click="toDetail()">
          <img v-bind:src="'https://static.timehanju.com/' + item.bannerUrl" >
      </div>
      <p>{{item.movieName}}<strong>{{item.score}}</strong></p>
  </div>
  </transition>
</template>

<script>

export default {
  name: "movie-item",
  props: ["item"],
  data() {
    return {};
  },
  computed: {

  },
  beforeRouteLeave(to, from, next) {
      if (to.path == "/detail") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
      next();
    },
  methods: {
      toDetail(){
        this.$router.push({
            name: 'detail',
            params: { id:this.item.movieId, title: this.item.movieName }
        });  
      }
  }
};
</script>

<style lang="css">
  .movieitem {
      cursor: pointer;
      display: block;
      float: left;
      color: #37a;
      font-size: 13px;
      text-align: center;
      margin: 0 15px 10px 0;
      width: 173px;
      height:248px;
  }
  .movieitem .cover-wp {
      background-size: 100%;
      height: 225px;
      overflow: hidden
  }
  .movieitem img {
      display:block;
      width:100%;
      height:100%;
  }
    .movieitem strong {
      color: #e09015;
      margin-left:2px;
  }
  .movieitem .movieName{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .movieitem p {
      margin: 5px 0 0;
      height: 44px;
  }

</style>