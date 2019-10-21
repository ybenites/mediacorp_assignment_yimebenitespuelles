<template>
    <div :class="{character:true,attackAnimation:isAttacking}" :style="{backgroundImage:`url(${characterImageSprite})`}">
    </div>
</template>
<script>
export default {
    name: "Character",
    props: {
        characterImageSprite:String,
        isAttacking: Boolean
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.character{
    background-repeat: no-repeat;
    background-position: 0%;
    background-size: auto 100%;
    width: 300px;
    height: 300px;
}
.warrior{
    animation: playWarrior 0.8s steps(7) infinite;
}
.dragon{
    transform: rotate(-90deg);
    animation: playDragon 0.8s steps(8) infinite;
}
.warrior.attackAnimation{
    animation: playWarriorAttack 0.4s steps(7) infinite;
}
.dragon.attackAnimation{
    animation: playDragonAttack 0.4s steps(8) infinite;
    &:before{
        content: " ";
        background-image: url('./../assets/fire.gif');
        width: 100px;
        height: 100px;
        top: -85px;
        left: 0;
        right: 0;
        position: absolute;
        margin: auto;
        z-index: 12;
        background-repeat: no-repeat;
        background-size: 50% 150%;
    }
}

// keyframes animation no attacking
@keyframes playWarrior {
   0% { background-position: 0% }
   100% { background-position: 46.7%}
}
@keyframes playDragon {
   0% { background-position: 0% }
   100% { background-position: 47.1% }
}
// keyframes animation attacking
@keyframes playWarriorAttack {
    0% { background-position: 53.3% }
   100% { background-position: 100% }
}
@keyframes playDragonAttack {
   0% { background-position: 53.3% }
   100% { background-position: 100% }
}
</style>