<template>
  <div class="content-character-status-bar">
    <div class="character-small-image">
      <img  :src="characterImage" alt="Character Image">
    </div>
    <div class="content-status-bar">    
      <div class="characterName">{{characterName}}</div>
      <div class="full-status-bar">
        <div class="progress-status-bar" :style="{color:getColorProgress,backgroundColor:getBackgroundColorProgress,width:`${getWidthStatusProgress}%`}">
          {{getWidthStatusProgress}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StatusBar",
  props:{
    characterName: String,
    characterImage:String,
    health: Number
  },
  computed:{
    getColorProgress(){
      return this.health>20?"#155724":"#721c24";
    },
    getBackgroundColorProgress() {
      return this.health>20?"#d4edda":"#f8d7da";
    },
    getWidthStatusProgress() {
      return Math.max(this.health,0);
    }

  }
};
</script>
<style lang="scss" scoped>
.content-character-status-bar{
  align-items: center;
  display:flex;
  .character-small-image{
    img{
      display: block;
      max-width: 100%;
      height: 80px;
    }
  }
}

.content-status-bar {
  padding-left: 10px;
  width: 100%;
  .characterName{
    padding-left: 10px;
  }
  .full-status-bar {
    width: 100%;
    height: 100%;
    background-color: #d6d8d9;
    border-radius: 8px;
    .progress-status-bar {
      line-height: 35px;
      color: #155724;
      font-weight: 700;
      height: 100%;
      transition: width .5s ease;
      padding-left: 10px;
      border-radius: 8px;
    }
  }
  
}
</style>