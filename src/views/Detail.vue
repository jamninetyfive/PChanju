<template>
  <div class="bg-hanju text-white flex-1 ml-56 pl-6">
    <headerapp title="详情"></headerapp>
    <div class="flex flex-wrap pr-6 max-w-full">
        <div class="w-14">
            <button class="bg-hanju text-grey-light p-1 flex items-center justify-center rounded-full" @click="back()">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="37px" height="37px" viewBox="0 0 20 20">
                <path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"/></svg>
            </button>            
        </div>
      <div class="movieDetailWrap">
        <div class="celeInfo-left">
          <div class="avatar-shadow">
            <img class="avatar" v-bind:src="'https://static.timehanju.com/' + moviesInfo.bannerUrl" alt="">
              <div class="movie-ver"><i class="imax2d"></i></div>
          </div>
        </div>
        <div class="celeInfo-right clearfix">
          <div class="movie-brief-container">
          <h3 class="name">{{moviesInfo.movieName}}</h3>
          <div class="ename ellipsis">{{moviesInfo.movieNameAlias}}</div>
          <ul>
            <li class="ellipsis">类型:{{moviesInfo.type}}</li>
            <li class="ellipsis">导演:{{moviesInfo.director}}</li>
            <li class="ellipsis">演员:{{moviesInfo.performer}}</li>
            <li class="ellipsis">播出时间:{{moviesInfo.playTime}}</li>
            <li class="ellipsis">状态:{{moviesInfo.continueInfo}}</li>
            <li class="ellipsis">播放量:{{moviesInfo.virtualPlayCount}}</li>
          </ul>
        </div>
        <div class="action-buyBtn">
          <div class="action clearfix">
            <a class="wish">
              <div>
                <i class="icon wish-icon"></i>
                  <span class="wish-msg">赞一个</span>
              </div>
            </a>
            <a class="score-btn " >
              <div>
                <i class="icon score-btn-icon"></i>
                <span class="score-btn-msg">
                    收藏
                </span>
              </div>
            </a>
          </div>
            <a class="btn buy"  @click="play()">立即播放</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerapp from '../components/Title.vue';
import axios from '../api/request.js'

export default {
  name: "detail",
  props: ['id'],
  components: {
      headerapp,
  },
  data() {
    return {
        moviesInfo:[]
    }
  },
  mounted() {
    this.getMovieDetailInfo(this.id)
  },
  activated(){

  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
        if(from.name=='home'||from.name=='search'){
            // 通过 `vm` 访问组件实例
            vm.getMovieDetailInfo(vm.id)
        }
    })
  },
  methods: {
    getMovieDetailInfo(id){
      const self = this;
      axios.post('/router', {
          method:'movie.tv.detail',
          appKey: 'iad_movie',
          format: 'json',
          v: '1.0',
          movieId:id
      })
      .then(function (response) {
         self.moviesInfo = response.data.data.movie
         console.log(self.moviesInfo)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    play(){
      this.$router.push({
        name: 'player',
        params: { url: this.moviesInfo.videoUrl, title: this.moviesInfo.movieName}
      });  
    },
    back(){
        this.$router.go(-1)
    }
  },
  computed: {
    
  }
};
</script>

<style lang="css">
.movieDetailWrap{
  width:100%;
  height:500px;
  border-radius:5px;
  background: linear-gradient(to top right, #EFCEED, #A7DAD8, #FAA5B3);
  background: -webkit-linear-gradient(left bottom, #EFCEED, #A7DAD8, #FAA5B3);
}
.movieDetailWrap .celeInfo-left {
    width: 300px;
    float: left;
    position: relative;
    top: 70px;
    overflow: hidden;
    z-index: 9
}

.movieDetailWrap .cinema-left {
    width: 360px;
    float: left;
    overflow: hidden;
    z-index: 9
}

.movieDetailWrap .cinema-main {
    position: relative;
    float: left;
    max-width: 600px
}

.celeInfo-left .avatar-shadow,.cinema-left .avatar-shadow {
    position: relative;
    margin: 0 30px;
    width: 240px;
    height: 330px;
    padding-bottom: 40px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAyAgMAAAAfG76+AAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAABHRSTlMOAgoGQ0SIeAAAADpJREFUSMdjGAWjYBRgAasoAAwdFACKbB7VPEI076YAUGbzfwrAqOYRormcAjCANodSAEY1j2oexJoBlx1+yE7RXIIAAAAASUVORK5CYII=) bottom no-repeat
}

.cinema-left .avatar-shadow {
    width: 300px;
    height: 300px;
    background-size: 300px 50px;
    position: relative
}

.cinema-left .avatar-shadow .avatar-num {
    position: absolute;
    left: 4px;
    bottom: 44px;
    width: 292px;
    line-height: 32px;
    background-color: rgba(0,0,0,.6);
    color: #fff;
    font-size: 14px;
    text-align: center
}

.celeInfo-left .avatar-shadow .avatar {
    border: 4px solid #fff;
    height: 322px;
    width: 232px
}

.cinema-left .avatar-shadow .avatar {
    border: 4px solid #fff;
    height: 292px;
    width: 292px
}
.movie-brief-container {
    position: absolute;
    color: #93A9BD;
    font-size: 14px;
    z-index: 1;
    top:70px;
}
.movieDetailWrap .celeInfo-right {
    position: relative;
    height:500px;
    margin-right: 30px;
    padding-left: 300px;
}

.movie-brief-container .name {
    margin-top: 0;
    font-size: 26px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    max-height: 64px
}

.movie-brief-container .ename {
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 14px
}

.movie-brief-container ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 20px
}
.action-buyBtn {
    position: absolute;
    bottom: 100px;
}

.action-buyBtn .action form {
    display: none
}

.action-buyBtn .action a {
    cursor: pointer;
    float: left;
    display: block;
    width: 120px;
    height: 25px;
    background-color: #756189;
    margin-right: 10px;
    padding-top: 11px;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    border-radius: 2px
}

.action-buyBtn .action i.icon {
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 2px;
    width: 16px;
    height: 16px
}

.action-buyBtn .action .wish i.wish-icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDc1OTZBMzUzQzIzMTFFNkI5NzY4NjMyQkI3QTVCMDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDc1OTZBMzQzQzIzMTFFNkI5NzY4NjMyQkI3QTVCMDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTE3NDFCODM3NjcxMUU2QUY0Q0YzNTlBNkE3Q0U3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTE3NDFCOTM3NjcxMUU2QUY0Q0YzNTlBNkE3Q0U3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptb+IwoAAAC3SURBVHjaYvz//z8DJYAJiZ0CxMeB+BMQvwbi5UCsCcUg9huo3HGoWggAuQCIF//HDn5BMTawGOx6IJH2n3yQxggkrgMdokFmENwEGfADyGAn04C/TNCAIRd8ABmwmQIDNoACUQyIX5ERgCA9YrBoVALiyyRovgzVA08HIMwJxJuJ0LwZqpYB3QAY7sejuR9dPTYDQDgbi+ZsbGpxGQDC7kia3XGpYySQG/Og9CRcChgpzc4AAQYAYXrq/jrniJEAAAAASUVORK5CYII=)
}

.action-buyBtn .action .wish.active i.wish-icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTg3NUMzN0EzRjVEMTFFNjkxMDhGRThFNTBFREEyMzAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTg3NUMzNzkzRjVEMTFFNjkxMDhGRThFNTBFREEyMzAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNkY0NkVEMTNGNDAxMUU2OUIwODkwOUI1MjBDMTJCMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNkY0NkVEMjNGNDAxMUU2OUIwODkwOUI1MjBDMTJCMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhC200UAAAD2SURBVHjaYvz//z8DJYDxS0UBjC0NxFFAbAHETEB8FoiXAvFDIA4AYm8gFgPip0C8CYi3gQ14Z6kPoh2giqXQLHgJxLeB2AaL5fOBOIOFkZNTC8qRwqJIHIqxgUQgfgByaj0QK5AZBIlMUL+RC2RBBvymwIB/IAPWUGDAfZABjUB8iUwDJoEMeAKN/6skam4C4ulMUA5IszMQ7yBC41doFNbDwgA50QQC8Uw8mkGu9QPiBTABJjQFP0CpC4hLgfgPmtxJIHYC4n0oeQGalLGBECCeA8T80JhKAeKP6IpYWC2scRmwBuotUD5pA+K/WHMjpdkZIMAAEvc0vOkwYeYAAAAASUVORK5CYII=)
}

.action-buyBtn .action .score-btn i.score-btn-icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDc1OTZBM0QzQzIzMTFFNkI5NzY4NjMyQkI3QTVCMDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDc1OTZBM0MzQzIzMTFFNkI5NzY4NjMyQkI3QTVCMDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QzQ3QTgzOTM3NjgxMUU2QUY0Q0YzNTlBNkE3Q0U3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QzQ3QTgzQTM3NjgxMUU2QUY0Q0YzNTlBNkE3Q0U3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi0cMmgAAADqSURBVHjaYvz//z8DHtAExAJAnIdLASMeA3iB+BOULQfEj7EpYsJjey8SuwunKpALsOCQ/5ggBJtadAEJIG75jxsUATEbsh5QGLgDHeIDxGZArAfEHAz4wTMg3g/EZ4F4N8iAY0CGJQN54CDIGXpAfPE/6eA5EHvB/CIKxG9J0PwRiBXQAzGRBANikQMR5h9mIH4DTXn4wAsglsSWkP4C8TUiAu4ovpTIQoQBv3AZwAPEWkQYoIjLRnaoISCwG4hXAPEZIOaCppNUINYEYnVcBnyEZqDPQDwTGlgwcAKI9wJxFRDfRzYAIMAAYsNIs6fSEWgAAAAASUVORK5CYII=)
}

.action-buyBtn .action .score-btn.active i.score-btn-icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDc1OTZBMzkzQzIzMTFFNkI5NzY4NjMyQkI3QTVCMDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDc1OTZBMzgzQzIzMTFFNkI5NzY4NjMyQkI3QTVCMDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QzQ3QTgzRDM3NjgxMUU2QUY0Q0YzNTlBNkE3Q0U3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QzQ3QTgzRTM3NjgxMUU2QUY0Q0YzNTlBNkE3Q0U3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr7Zy/cAAADuSURBVHjaYvx/jAEfaAJiASDOw6WAEY8BvED8CcqWA+LH2BQx4bG9F4ndhUsRLgNCgDgViR8BFSNogAQQtwDxaixqQWJFQMyGHgbuQNoHiM2AWA+IORjwg2dAvB+IzwLxbpABoGC0ZCAPHAR5IQOIL5Gh+QUocGHRKArEN4BYiEjNoOjVB+IHsEB8DcQlJNieA9KMnpCYgfgNNOURcroktmj8C8TXiLD9KL50wEKEAb9wGcADxFpEGKCIy0Z2qCEgsBuIVwDxGSDmgqYTUNLWBGJ1XAZ8hGagz0A8ExpYMHACiPcCcRUQ30c2ACDAABdZMN0CosYSAAAAAElFTkSuQmCC)
}
.action-buyBtn .btn.buy {
    cursor: pointer;
    display:inline-block;
    margin-top: 10px;
    width: 250px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    border-radius: 2px;
    padding: 0;
    color: #fff;
    background-color: #df2d2d;
}
.movie-brief-container ul li {
    margin: 12px 0;
    line-height: 100%
}

.movie-brief-container .movie-live {
    color: #2b7ab5
}

.movie-brief-container .movie-live:hover {
    cursor: pointer;
    text-decoration: underline
}
@-webkit-keyframes ani-detail {
  from {
    -webkit-filter: hue-rotate(0);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
@keyframes ani-detail {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(-360deg);
  }
}
</style>