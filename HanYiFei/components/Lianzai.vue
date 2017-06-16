  <template>
  <div class="lianzai">
    
    <!--<header>
    	toubu
    	<a>
    		<span class=""></span>
    	</a>
    </header>-->
    
    <div class="content">
    	<h1>豆瓣连载</h1>
    	<div class="liaojie">
    		追就对了
    		<a>了解更多</a>
    	</div>
    </div>
    
    <mt-swipe :auto="4000">
		  <mt-swipe-item><img src="https://img1.doubanio.com/view/ark_campaign_pic/large/public/2319.jpg"></mt-swipe-item>
		  <mt-swipe-item><img src="https://img3.doubanio.com/view/ark_campaign_pic/large/public/2303.jpg"></mt-swipe-item>
		  <mt-swipe-item><img src="https://img3.doubanio.com/view/ark_campaign_pic/large/public/2233.jpg"></mt-swipe-item>
		  <mt-swipe-item><img src="https://img3.doubanio.com/view/ark_campaign_pic/large/public/2196.jpg"></mt-swipe-item>
		</mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'lianzai',
  data () {
    return {
      arr: ''
    }
  },
  created(){
      Vue.axios.get("../static/Lianzai.json").then((res)=> {
        return res.data.subjects
      }).then((data)=> {
        console.log(this)
        this.arr = data
      })
      // var url = "https://api.douban.com/v2/movie/in_theaters"
      // jsonp(url,null,(err,data)=> {
      //  if(err){
      //    console.log('数据无法获取')
      //  }else{
      //    this.arr = data
      //    console.log(this.arr)
      //  }
      // })
    },
  
//$('#your-slider').flexslider({
//playAfterPaused: 8000,
//before: function(slider) {
//  if (slider._pausedTimer) {
//    window.clearTimeout(slider._pausedTimer);
//    slider._pausedTimer = null;
//  }
//},
//after: function(slider) {
//  var pauseTime = slider.vars.playAfterPaused;
//  if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
//    if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
//      slider._pausedTimer = window.setTimeout(function() {
//        slider.play();
//      }, pauseTime);
//    }
//  }
//}
//// 设置其他参数
//});
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
	font-size: 50px;
}
/*header{
	height:2.75rem;
	background: none, url(https://img3.doubanio.com/f/ark/9b217811f3af2e6865d48a625c8d11f582a9310a/pics/logo/normal-nav.svg) no-repeat left center;

}*/
.content{
	margin-top:2.75rem;
	padding:0 12px;
}
.liaojie{
	margin-top:2px;
}
.liaojie a{
	float:right;
}
.mt-swipe{
	height:40vh;
}
.mint-swipe{
	height:40vh;
	width: 100vw;
}
.mint-swipe-items-wrap{
	height:40vh;
	width: 100vw;
}


</style>
