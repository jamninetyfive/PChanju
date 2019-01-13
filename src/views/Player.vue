<template>
  <transition name="router-animation" enter-active-class="animated slideInUp faster">
    <div class="ml-56 text-white pt-5 px-4">
      <div class="flex flex-wrap mb-2">
          <div class="w-full flex items-center">
            <div class="w-14">
              <button class="bg-hanju text-grey-light p-1 flex items-center justify-center rounded-full" @click="back()">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="37px" height="37px" viewBox="0 0 20 20">
                <path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"/></svg>
              </button>            
            </div>
            <h1 class="font-normal text-2xl mb-1" style="color:#93A9BD">{{title}} - {{currentTitle}}</h1>
          </div>
        </div>
        <div style="width:944px;height:531px;">
          <div id="player" style="width:100%;height:100%"></div>
        </div>
        <div class="chooseVideo">
          <span style="display:block;margin-top:10px;margin-bottom:10px;color:#93A9BD">选集</span>
          <div class="slider-content">
            <ul class="episode-list breakline" style="transition: transform 0.3s ease 0s; transform: translateX(0px);">
              <li class="episode-item simple" v-for="(item, index) in allPlayUrl" :key="index" style="" @click="switchPlayUrl(item)"><h4 class="ep-index">{{item[0]}}</h4></li> 
            </ul>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
  import 'dplayer/dist/DPlayer.min.css';
  import DPlayer from 'dplayer';
  
  export default {
    props: ['url','title'],
    data() {
      return {
        allPlayUrl: [],
        dp:null,
        currentTitle:''
      }
    },
    computed: {

    },
    mounted() {
      this.currentTitle = this.url.split(',')[0].split('$')[1]
      console.log(this.url.split(',')[0].split('集$')[1],this.title)
      this.initPlayer();
      this.getAllPlayUrl();
    },

    methods: {
      initPlayer(){
          this.dp = new DPlayer({
            container: document.getElementById('player'),
            autoplay: true,
            theme: '#fb7198',
            loop: true,
            lang: 'zh-cn',
            screenshot: true,
            hotkey: true,
            preload: 'auto',
            logo: 'logo.png',
            volume: 0.7,
            mutex: true,
            video: {
                url: this.url.split(',')[0].split('$')[2],
                // pic: 'dplayer.png',
                thumbnails: 'thumbnails.jpg',
                type: 'auto'
            },
        });
      },
      getAllPlayUrl(){
        let playList = this.url.split(',')
        for (var i=0;i<playList.length;i++)
        {
          this.allPlayUrl.push(playList[i].split('$'))
        }
      },
      switchPlayUrl(item){
        this.currentTitle = item[1]
        this.dp.switchVideo({
            url:item[2],
        });
        setTimeout(this.dp.play(), 20)
      },
      back(){
        this.$router.go(-1)
      },
      // destroyed() {
      //   this.dp.destroy()
      // },
    }
  }
</script>
<style lang="css">
.slider-conten .episode-list {
    margin-top: 6px;
    min-height: 66px;
    white-space: nowrap;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    -o-transition: transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease,-webkit-transform .3s ease
}
  .episode-item {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
    width: 100px;
    height: 48px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #e5e9ef;
    border-radius: 4px;
    padding: 8px
}

.episode-item.simple {
    width: 66px;
    height: 28px;
    padding: 0;
    margin: 0 8px 9px 0
}

.episode-item.simple .ep-index {
    text-align: center;
    font-size: 14px;
    color: #6d757a;
    height: 28px;
    line-height: 28px;
    padding: 0 2px
}

</style>
