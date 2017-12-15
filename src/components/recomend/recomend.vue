<template>
    <div class="musics">
        <div class="musics_swiper">
          <swiper />
        </div>
        <div class="musics_radio">
            <ul>
                <li>推荐电台</li>
                <li>私人电台</li>
                <li>心灵电台</li>
            </ul>
        </div>
        <div class="musics_song">
            <div class="musics_song_top">
              <span>今日推荐(20首)</span>
              <span>更多</span>
            </div>
            <div class="musics_song_bottom">
                <img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt="">
                <div class="list_song">
                    <ul>
                      <li>baby--JustinBieber</li>
                      <li>What Are World--Emili</li>
                      <li>贝加尔湖畔--李健</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="musics_singer">
            <div class="musics_singer_top">
              <span>歌手推荐</span>
              <span>更多</span>
            </div>
            <div class="musics_singer_list">
                <ul>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                </ul>
                <ul>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                </ul>
                <ul>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                </ul>
                <ul>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                    <li><img src="http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658" alt=""></li>
                </ul>
            </div>
            <div style=" clear:both;"></div>
        </div>
    </div>
</template>
<script>
import swiper from '../swiper'
export default {
  data () {
    return {

    }
  },
  methods:{

  },
  components: {
    "swiper":swiper
  }
}
</script>

<style scoped>
  .musics{
    background:#50bff3;
    margin-bottom:56px;
  }
  .musics_swiper{
    box-sizing:border-box;
    padding:15px;
  }
  .musics_radio{
    box-sizing:border-box;
    margin:0 15px;
    background:#7cc6ea;
    color:#fff;
    border-radius:10px;
  }
  .musics_radio ul{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .musics_radio ul li{
    padding:15px;
    list-style:none;
  }
  .musics_song{
    box-sizing:border-box;
    margin:10px 15px;
    padding:15px;
    background:#7cc6ea;
    color:#fff;
    border-radius:10px;
  }
  .musics_song_top{
    padding-bottom:15px;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .musics_song_bottom{
    display:flex;
  }
  .musics_song_bottom img{
    width:80px;
    height:80px;
    margin-right:15px;
  }
  .list_song ul li{
    list-style:none;
    margin-top:5px;
  }
  .musics_singer{
    box-sizing:border-box;
    margin:15px;
    padding:15px;
    background:#7cc6ea;
    color:#fff;
    border-radius:10px;
  }
  .musics_singer_top{
    padding-bottom:15px;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .musics_singer_list ul{
    display:flex;
    justify-content:space-between;
    margin-bottom: 10px;
  }
  .musics_singer_list ul li{
    list-style:none;
    width:20%;
  }
  .musics_singer_list ul li img{
    width:100%;
    height:100%;
  }
</style>