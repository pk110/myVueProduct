
<template>
    <div class="home">
        <div class="home_top">
            <div class="home_container">
                <img src="./../assets/menu.png" alt="">
                <input type="text" value="" placeholder="输入艺人、MV、歌名名称">
                <img src="./../assets/large.png" alt="">
            </div>
        </div> 
        <div class="home_router">
            <router-link to="/recomend">推荐</router-link>
            <router-link to="/musics">乐库</router-link>
            <router-link to="/sing">我要唱</router-link>
            <router-link to="/my">我的</router-link>
        </div>
        <router-view></router-view>
        <audiobottom />
    </div>
</template>
<script>
import audiobottom from './audio'
export default {
  data () {
    return {

    }
  },
  methods:{

  },
  components: {
    "audiobottom":audiobottom
  }
}
</script>
<style lang="">
    /*顶部第一排*/
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #fff; opacity:1; 
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #fff;opacity:1;
    }

    input:-ms-input-placeholder{
        color: #fff;opacity:1;
    }

    input::-webkit-input-placeholder{
        color: #fff;opacity:1;
    }
    .home_top{
        width:100%;
        background-color:#039be5;
        box-sizing:border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        padding:20px 15px 0px 15px;
        position:fixed;
        top:0;
        z-index: 999;
    }
    .home_container{
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #32bcfa;
        padding-bottom:3px;
    }
    .home_top img{
        width:20px;
        height:auto;
    }
    .home_top input{
        width:100%;
        border:0;
        text-align:center;
        background:#039be5;
        color:#fff;
    } 
       /*顶部第二行*/
    .home_router{
        background:#039be5;
        color:#ffffff;
        margin-top: 44px;
    }
    .home_router a{
        display:inline-block;
        width:24%;
        height:40px;
        text-align: center;
        line-height: 40px;
        text-decoration: none;
        color: #fff;
    }
    .router-link-active{
        border-bottom:3px solid #f39800;
    }
</style>