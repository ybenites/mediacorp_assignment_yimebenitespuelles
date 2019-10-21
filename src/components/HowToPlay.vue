<template>
  <div class="overlay-HowToPlay">
    <div class="box-HowToplay">
        <button class="closeOverlayHowToPlay" @click="toogleOverlayHowToPlay">X</button>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo sapiente numquam quod ipsum, ad, quia inventore, iusto aperiam natus aliquid at repudiandae harum facere itaque unde enim delectus. Natus?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quas, minima unde laboriosam officiis nulla quibusdam! Accusamus officiis possimus incidunt doloribus id, eius reiciendis, eos amet provident ut quidem eveniet!
        </p>
        <button @click="startGame" class="btn btnAction">Start</button>
    </div>
  </div>
</template>
<script>
export default {
    name:'HowToPlay',
    props:{
        ShowOverlayHowToPlay: Boolean,
        startGame: Function
    },
    methods:{
        toogleOverlayHowToPlay () {
            this.$emit("updateShowOverlayHowToPlay",!this.ShowOverlayHowToPlay);
        }
    }
};
</script>
<style lang="scss" scoped>
.overlay-HowToPlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .box-HowToplay{
      position:relative;
      color:#333;
      max-width: 500px;
      background-color: #fff;
      padding: 45px 40px 25px;
      .closeOverlayHowToPlay{
        position: absolute;
        right: 15px;
        top: 15px;
        background: transparent;
        border: none;
        font-size: 20px;
        outline: none;
        font-weight: 700;
      }
  }
}
</style>