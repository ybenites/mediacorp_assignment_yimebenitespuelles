<template>
    <div class="overlay-GameOver">
        <div class="box-gameOver">
            <p> 
                You {{textupdateWinOrLost}}. Do you want a re-match?
            </p>
            <p class="content-yes-no">
                <button @click="startGame" class="btn btnAction">Yes</button>
                <button @click="restartGame" class="btn btnAction">No</button>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'GameOver',
    props:{
        textupdateWinOrLost: String,
        startGame:Function,
        restartGame: Function
    }
}
</script>
<style lang="scss" scoped>
.overlay-GameOver {
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
  .box-gameOver{
      position:relative;
      color:#333;
      max-width: 500px;
      background-color: #fff;
      padding: 45px 40px 25px;
      .content-yes-no{
          display: flex;
          justify-content: space-around;
          padding-top: 15px;
      }
  }
}
</style>