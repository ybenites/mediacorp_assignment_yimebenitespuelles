<template>
  <div>
        <button class="btn btnAction" @click="attack">Attack</button>
        <button class="btn btnAction" @click="blast">Blast</button>
        <button class="btn btnAction" @click="heal">Heal</button>
        <button class="btn btnAction" @click="giveUp">Give Up</button>
  </div>
</template>
<script>
export default {
  name: "Controls",
  props:{
      warrior:Object,
      dragon: Object,
      restartGame:Function,
      isAttacking: Boolean,
      arrayCommentaries: Array
  },
  methods:{
      damage(){
          return Math.floor(Math.random() * 10) + 1  ;
      },
      attack(){
          this.updateAnimation();
          this.warriorAttack(1);

        //   if the warriow damage the dragon health to 0 first, Win
          if(this.dragon.health<=0){
              return ;
          }

          this.dragonAttack();
      },
      blast(){
          this.updateAnimation();
          this.warriorAttack(2);
          
          //   if the warriow damage the dragon health to 0 first, Win
          if(this.dragon.health<=0){
              return ;
          }

          this.dragonAttack()
      },
      heal(){
          this.updateAnimation();
          const currentWarriorHealth=this.warrior.health;
          const heal=Math.max(this.damage(),10);
        //   increase health as maximum to 100
          this.warrior.health=Math.min(currentWarriorHealth+heal,100);
        //   adding commentary
          this.arrayCommentaries.push(`Warrior Heal ${heal}`);
          

          this.dragonAttack()
      },
      warriorAttack(levelAttack){
          this.warrior.forAttack=this.damage()*levelAttack;
          this.dragon.health-=this.warrior.forAttack;
          this.arrayCommentaries.push(`${this.warrior.message} ${this.warrior.forAttack}`);
      },
      dragonAttack(){
          this.dragon.forAttack = this.damage();
          this.warrior.health-=this.dragon.forAttack;
          this.arrayCommentaries.push(`${this.dragon.message} ${this.dragon.forAttack}`);
      },
      giveUp(){
          this.restartGame();
      },
      updateAnimation(){
          const _this=this;
          this.$emit('fnattack',!this.isAttacking);
          setTimeout(function(){
              _this.$emit('fnattack',!_this.isAttacking);
          },500);
      }
  }
};
</script>
<style lang="scss">
</style>