<template>
    <div class="my">
        <div class="my_login">
            <img src="../../assets/my.png" alt="" @click="getApi">
            <span>请登录</span>
            <span>设置更多</span>
        </div>
        <div class="my_songs">
            <div class="my_songs_my">
                <img src="" alt="">
                <span>本地歌曲</span>
            </div>
            <div class="my_songs_load">
                <img src="" alt="">
                <span>已下载</span>
            </div>
            <div class="my_songs_play">
                <img src="" alt="">
                <span>最近播放</span>
            </div>
            <div class="my_songs_love">
                <img src="" alt="">
                <span>我的收藏</span>
            </div>
        </div>
    </div>
</template>
<script>
import store from './../../store/store'
export default {
  data () {
    return {

    }
  },
  methods:{
    // 点击请求接口  这种是小型项目里用这种方式  直接在每个组件里写
    getApi(){
        this.$post('/login?email=13027106488@163.com&password=qqpk3344520pk')
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
  },
  components: {

  }
}
</script>

<style scoped>
    .my{
        background:#50bff3;
        margin-bottom:56px;
        box-sizing:border-box;
        padding:15px;
    }
    .my_login{
        box-sizing:border-box;
        padding:10px 15px;
        border-radius:10px;
        background:#7cc6ea;
        display:flex;
        align-items:center;
        color:#fff;
    }
    .my_login img{
        width:40px;
        height:40px;
        margin-right:10px;
    }
    .my_login span:nth-child(2){
        flex:2;
    }
    .my_login span:nth-child(3){
        flex:2;
        text-align:right;
    }
</style>