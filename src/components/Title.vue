<template>
    <div class="discover-banner max-w-full text-white pl-8 pt-2 mb-5 pb-2 flex " style="-webkit-app-region:drag">
      <div class="w-1/2 flex-1">
          <h1 class="font-normal mb-2">{{title}}</h1>
      </div>    
    </div>
</template>

<script>

export default {
  props: ['title'],
};
</script>

