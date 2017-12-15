<template>
    <div class="audio">
        <div  class="audio_img">
            <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">   
        </div>
        <div class="audio_box"></div>
        <div class="audio_detail">
            <span>李健</span>
            <span>贝加尔湖畔</span>
        </div>
        <div class="audio_set">
            <img src="../assets/last.png" alt="">
            <img src="../assets/play.png" alt="">
            <img src="../assets/next.png" alt="">
            <img src="../assets/audiomenu.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods:{

  },
  components: {

  }
}
</script>

<style scoped>
    .audio{
        display:flex;
        width: 100%;
        height:55px;
        border-top:1px solid #f39800;
        align-items:center;
        position:fixed;
        bottom:0;
        background:#04244b;
        color:#fff;
    }
    .audio_box{
        flex:0.5;
    }
    .audio_img{
        flex:1;
        height:55px;
    }
    .audio_img img{
        width:110%;
        height:55px;
    }
    .audio_detail{
        flex:2;
        display:flex;
        flex-direction:column;
    }
    .audio_set{
        box-sizing:border-box;
        padding:0 15px 0 0;
        flex:3;
        display:flex;
        justify-content:space-between;
    }
    .audio_set img{
        width:25px;
        height:25px;
    }
</style>