<template>
  <div>
    <button class="btn btnAction" @click="toogleOverlayHowToPlay()">How to Play</button>
    <button class="btn btnAction" @click="startPlaying()">Start</button>
  </div>
</template>
<script>
export default {
    name:'buttonsIntro',
    props:{
        ShowOverlayHowToPlay:Boolean,
        ShowControlsPlay: Boolean
    },
    methods:{
        toogleOverlayHowToPlay () {
            this.$emit("updateShowOverlayHowToPlay",!this.ShowOverlayHowToPlay);
        },
        startPlaying(){
            this.$emit("updateShowControlsPlay",!this.ShowControlsPlay);
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
