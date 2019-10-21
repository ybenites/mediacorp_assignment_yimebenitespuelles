<template>  
  <div id="app">
    <div class="container">
      <div class="status-bars">
        <StatusBar :characterName="warrior.characterName" :characterImage="warrior.characterImage" :health="warrior.health"></StatusBar>
        <StatusBar :characterName="dragon.characterName" :characterImage="dragon.characterImage" :health="dragon.health"></StatusBar>
      </div>
      <div class="characters">
        <Character :class="{hideOpacity:(updateWinOrLost==='Lost' && updateWinOrLost!=='')}" :isAttacking="isAttacking" class="warrior" :characterImageSprite="warrior.characterImageSprite" ></Character>
        <Character :class="{hideOpacity:(updateWinOrLost==='Win' && updateWinOrLost!=='')}"  :isAttacking="isAttacking" class="dragon" :characterImageSprite="dragon.characterImageSprite"></Character>
      </div>
      <div class="commentary-controls">
        <transition name="fade">
          <buttonsIntro :ShowOverlayHowToPlay="ShowOverlayHowToPlay" :ShowControlsPlay="ShowControlsPlay" v-if="!ShowControlsPlay" @updateShowOverlayHowToPlay="updateShowOverlayHowToPlay" @updateShowControlsPlay="updateShowControlsPlay"></buttonsIntro>
          <Controls :arrayCommentaries="arrayCommentaries" :restartGame="restartGame" :warrior="warrior" :dragon="dragon" :isAttacking="isAttacking" @fnattack="updateIsAttacking"  v-else></Controls>
        </transition>
        <transition>
          <Commentary :arrayCommentaries="reverseArrayCommentaries" :class="{hideOpacity:arrayCommentaries.length===0}"></Commentary>
        </transition>
      </div>
    </div>
    <transition name="fade">
      <HowToPlay :startGame="startGame" v-if="ShowOverlayHowToPlay" :ShowOverlayHowToPlay="ShowOverlayHowToPlay" @updateShowOverlayHowToPlay="updateShowOverlayHowToPlay"></HowToPlay>
    </transition>
    <transition name="fade">
      <GameOver :startGame="startGame" :restartGame="restartGame" :textupdateWinOrLost="updateWinOrLost" v-if="warrior.health<=0 || this.dragon.health<=0"></GameOver>
    </transition>
  </div>
</template>

<script>
import StatusBar from './components/StatusBar.vue'
import Character from './components/Characters.vue';
import buttonsIntro from './components/buttonsIntro.vue';
import Controls from './components/Controls.vue';
import Commentary from './components/Commentary.vue';
import HowToPlay from './components/HowToPlay.vue';
import GameOver from './components/GameOver.vue';



export default {
  name: 'app',
  data(){
    return {
      warrior:{
        characterName:"Yime",
        characterImage: require("./assets/warrior-small.png"),
        characterImageSprite: require("./assets/warriors.png"),
        health:100,
        message:"Warrior Attacks Player for",
        forAttack:0
      },
      dragon:{
        characterName:"Dragon",
        characterImage: require("./assets/dragon-small.png"),
        characterImageSprite: require("./assets/dragons.png"),
        health:100,
        message:"Dragon Attacks Player for",
        forAttack:0
      },
      ShowControlsPlay:false,
      ShowOverlayHowToPlay:false,
      isAttacking:false,
      arrayCommentaries:[]
    }
  },
  components: {
    buttonsIntro,
    Controls,
    StatusBar,
    Character,
    Commentary,
    HowToPlay,
    GameOver
  },
  computed:{
    updateWinOrLost(){
      return (this.warrior.health<=0 || this.dragon.health<=0)?(this.warrior.health>=this.dragon.health)?"Win":"Lost":"";
    },
    reverseArrayCommentaries(){
      return this.arrayCommentaries.slice().reverse();
    }
  },
  methods:{
    startGame(){
      this.warrior.health=100;
      this.dragon.health=100;
      this.ShowControlsPlay=true;
      this.ShowOverlayHowToPlay=false;
      this.isAttacking=false;
      this.arrayCommentaries=[];
    },
    restartGame(){
      this.warrior.health=100;
      this.dragon.health=100;
      this.ShowControlsPlay=false;
      this.ShowOverlayHowToPlay=false;
      this.isAttacking=false;
      this.arrayCommentaries=[];
    },
    updateShowOverlayHowToPlay(value){
      this.ShowOverlayHowToPlay=value;
    },
    updateShowControlsPlay(value){
      this.ShowControlsPlay=value;
    },
    updateIsAttacking(value){
      this.isAttacking=value;
    }
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100%;
  background-image: url('./assets/background.jpg');
  background-size: 100% 70%;
  background-repeat: no-repeat;
  background-color: #75b30e;
  padding: 0 16px;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
.status-bars{
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  right: 0;
  left: 0;
  .content-character-status-bar{
    width: 40%;
  }
}
.commentary-controls{
  position: absolute;
  bottom: 0;
  width: 100%;
  right: 0;
  left: 0;
}
.characters{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 15%;
}

.hideOpacity{
  opacity: 0 !important;
  transition: opacity .5s ease;
}

// css animations
.fade-enter-active {
  transition: opacity .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-leave-active {
  transition: opacity .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

// css button
.btn{
  display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    outline: none;
}
.btn:focus{
  outline: none;
}
.btnAction{
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
    margin-right: 10px;
    outline: none;
}
.btnAction:hover,.btnAction:active{
  background-color: #b8daff;
  color: #002752;
}
</style>
