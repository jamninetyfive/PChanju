
<template>
  <!--<button id="close" class="clickable"  @click="closeApp">Close</button>-->  
  <div class="w-56 bg-hanju text-white border-r border-backblack fixed min-h-screen pt-3" style="-webkit-app-region: drag">
    <div class="w-full flex-1 pl-4 pt-1 ">
        <button class="clickable select-none text-white bg-red-light rounded-full button-window" @click="close" style="background:#fc605c">          
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8306" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22">
          <path fill="currentColor" d="M572.16 512l183.466667-183.04a42.666667 42.666667 0 1 0-60.586667-60.586667L512 451.84l-183.04-183.466667a42.666667 42.666667 0 0 0-60.586667 60.586667l183.466667 183.04-183.466667 183.04a42.666667 42.666667 0 0 0 0 60.586667 42.666667 42.666667 0 0 0 60.586667 0l183.04-183.466667 183.04 183.466667a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586667z" p-id="8307"></path>
          </svg>
        </button>            

        <button class="clickable select-none ml-1 text-white bg-blue-dark rounded-full button-window" @click="hide">          
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22">
          <path fill="currentColor" d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </button>            
    </div>
    <div class="text-gray flex items-center px-4 py-2 pt-4">
      <img style="width:40px;height:40px;margin-right:1rem;" src='../assets/logo-hanju.png'>
      <h4>时光韩剧,追剧必备</h4>
    </div>  
    <div class="sidebar-icons clickable pt-4">    

      <router-link to="/" class="sidebar-icon flex items-center px-4 py-2 text-gray cursor-pointer hover:bg-gray-darker no-underline" style="color:#f48984">
        <svg class="mr-3" viewBox="0 0 1110 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10967" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px">
        <path fill="currentColor" d="M1045.799033 528.957174 586.568905 64.159973c-27.94201-28.155307-36.047325-28.155307-63.989335 0L63.349442 528.957174l-31.674721-31.930678L503.958674 21.116481c27.963339-28.155307 73.267789-28.155307 101.209798 0l472.326612 475.910015L1045.799033 528.957174zM200.627895 917.351108c0 23.569405 19.111481 42.659557 42.659557 42.659557l622.573571 0c23.548075 0 42.659557-19.090152 42.659557-42.659557L908.52058 576.074654l40.654558 0 0 341.276454c0 47.11748-38.201633 85.319113-85.319113 85.319113l-618.563573 0c-47.11748 0-85.319113-38.201633-85.319113-85.319113L159.973338 576.074654l40.654558 0L200.627895 917.351108z" p-id="10968"></path>
        </svg>
        <div class="text-gray">首页</div>
      </router-link>

      <router-link to="/search" class="sidebar-icon flex items-center px-4 py-2 text-gray cursor-pointer hover:bg-gray-darker no-underline" style="color:#F7CC9B">
          <svg width="24px" class="mr-3" height="24px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"/>
          </svg>
        <div class="text-gray">搜索</div>
      </router-link>

      <router-link to="/download" class="sidebar-icon flex items-center px-4 py-2 text-gray cursor-pointer hover:bg-gray-darker no-underline " style="color:#CA9ECE">
        <svg class="mr-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
        <path fill="currentColor" d="M917.333333 896H106.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V213.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h810.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v597.333334a85.333333 85.333333 0 0 1-85.333334 85.333333zM256 170.666667H106.666667a42.666667 42.666667 0 0 0-42.666667 42.666666v42.666667h192V170.666667z m234.666667 0h-192v85.333333h192V170.666667z m234.666666 0h-192v85.333333h192V170.666667z m234.666667 42.666666a42.666667 42.666667 0 0 0-42.666667-42.666666h-149.333333v85.333333h192v-42.666667z m0 85.333334H64v426.666666h896V298.666667z m0 469.333333h-192v85.333333h-42.666667v-85.333333h-192v85.333333h-42.666666v-85.333333h-192v85.333333h-42.666667v-85.333333H64v42.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h810.666666a42.666667 42.666667 0 0 0 42.666667-42.666666v-42.666667z m-498.752-133.013333A21.056 21.056 0 0 1 448 640a21.333333 21.333333 0 0 1-21.333333-21.333333V405.333333a21.333333 21.333333 0 0 1 21.333333-21.333333c4.544 0 8.533333 1.749333 12.010667 4.181333l165.781333 103.936A21.12 21.12 0 0 1 640 512a20.928 20.928 0 0 1-8.64 16.704l-170.112 106.282667z"></path>
        </svg>
        <div class="text-gray flex">片库 
        </div>
        <div class="bg-red-light text-white  rounded ml-1 pl-1 pr-2 pb-1  " v-if="videoCount>0">
          <i><small>{{videoCount}}</small></i>
        </div>
      </router-link>

      <router-link to="/history" class="sidebar-icon flex items-center px-4 py-2 text-gray cursor-pointer hover:bg-gray-darker no-underline" style="color:#bee1da">
        <svg class="mr-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
          <path fill="currentColor" d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m0 950.693512a438.693512 438.693512 0 1 1 438.693512-438.693512 438.693512 438.693512 0 0 1-438.693512 438.693512z"></path>
          <path fill="currentColor"  d="M512 146.040268a365.959732 365.959732 0 1 0 365.387025 365.959732 365.959732 365.959732 0 0 0-365.387025-365.959732z m164.36689 466.183446H458.165548a36.653244 36.653244 0 0 1-36.653244-36.653244V356.223714a36.653244 36.653244 0 0 1 73.306488 0v183.266219h182.693512a36.653244 36.653244 0 1 1 0 72.733781z"></path>
          </svg>
        <div class="text-gray">观看历史</div>
      </router-link>
      
      <router-link to="/settings" class="sidebar-icon flex items-center px-4 py-2 text-gray cursor-pointer hover:bg-gray-darker no-underline" style="color:#b9cddc">
        <svg class="mr-3" width="24px" height="24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M 9.6679688 2 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 4.5058594 4.9785156 L 2.1738281 9.0214844 L 4.1132812 10.707031 C 4.0445153 11.128986 4 11.558619 4 12 C 4 12.441381 4.0445153 12.871014 4.1132812 13.292969 L 2.1738281 14.978516 L 4.5058594 19.021484 L 6.9296875 18.185547 C 7.5961042 18.732596 8.3550224 19.166199 9.1757812 19.476562 L 9.6679688 22 L 14.332031 22 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 19.494141 19.021484 L 21.826172 14.978516 L 19.886719 13.292969 C 19.955485 12.871014 20 12.441381 20 12 C 20 11.558619 19.955485 11.128986 19.886719 10.707031 L 21.826172 9.0214844 L 19.494141 4.9785156 L 17.070312 5.8144531 C 16.403896 5.2674041 15.644978 4.8338012 14.824219 4.5234375 L 14.332031 2 L 9.6679688 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z"/>
        </svg>
        <div class="text-gray">设置</div>
      </router-link>

    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  methods: {
    close: function() {
      ipcRenderer.send("close-app");
    },

    hide: function() {
      ipcRenderer.send("hide-app");
    }
  },
  computed: {
    videoCount: {
      get: function () {
        return this.$eventBus.videoIds.length
      }
    } 

  }
};
</script>

