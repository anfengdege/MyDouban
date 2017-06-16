<template>
	<div>
	 	<hyf-header></hyf-header>
		<hyf-banner></hyf-banner>
		<hyf-new></hyf-new>
		<hyf-hot></hyf-hot>
		<hyf-gallery></hyf-gallery>
		<hyf-free></hyf-free>
		<hyf-footer></hyf-footer>
		<hyf-bottom></hyf-bottom>
		
	</div>	
</template>
<script>
	
import jsonp from "jsonp"
import Vue from "vue"	

Vue.filter('toFixed', function (value) {
 	return value = "¥" + value /100
})
export default {
	name: "Douban",
	components:{
		"hyf-header":{
			template:`<header class="header">
	 		<div class="headerLeft">
		 		<span class='logo'></span>
		 		<i class="iconfont icon-shu"></i>
		 		<i class="iconfont icon-xia"></i>
	 		</div>
	 		<div class="headerRight">
		 		<i class="iconfont icon-sousuo-sousuo"></i>
		 		<i class="iconfont icon-wo"></i>
	 		</div>
		</header>`
		},
		"hyf-banner":{
			template:`<div class="banner">
				<router-link to="Zhuanlan"  class="fenlan1">
					<span>专栏</span><i class="iconfont icon-you"></i>
				</router-link>
				<router-link to="Lianzai" class="fenlan2">
					<span>连载</span><i class="iconfont icon-you"></i>
				</router-link>
			
		</div>`
		},
		"hyf-new":{
			data(){
				return {
					 arr:''
				}
			},
			created(){
				Vue.axios.get("../static/index.json").then((res)=> {
	      		  	return res.data
				  	}).then((data)=> {
				        this.arr = data[0].works
				   	})
			},
			template:`<div class="content">
			<div class="title">
				<h3>新上架</h3><div class="hack"></div><a class="more" href=""><i class="iconfont icon-you"></i></a>
			</div>
			<div class="main">
				<div class="bookshow">
					<a href="javascript:;" v-for="item in arr">
						<div class="itembook">
							<div class="bookimg">
								<img :src="item.cover"/>
							</div>
							<h3 class="booktitle">{{item.title}}</h3>
							<p class="bookauthor">{{item.author}}</p>
							<p class="bookprice" >{{item.price | toFixed }}</p>
						</div>
					</a>
				</div>
			</div>
		</div>`
		},
		"hyf-hot":{
			data(){
				return {
					 arr:''
				}
			},
			created(){
				Vue.axios.get("../static/index.json").then((res)=> {
      		  	return res.data
			  	}).then((data)=> {
			        this.arr = data[1].works
			   	})
			},
			template:`<div class="content">
			<div class="title">
				<h3>热门</h3><div class="hack"></div><a class="more" href=""><i class="iconfont icon-you"></i></a>
			</div>
			<div class="main">
				<div class="bookshow">
					<a href="#" v-for="item in arr">
						<div class="itembook">
							<div class="bookimg">
								<span class="cover-label sale-label"> 特价 </span>
								<img :src="item.cover"/>
							</div>
							<h3 class="booktitle">{{item.title}}</h3>
							<p class="bookauthor">{{item.author}}</p>
							<p class="bookprice" >{{item.price | toFixed }}</p>
						</div>
					</a>
				</div>
			</div>
		</div>`
		},
		"hyf-gallery":{
			data(){
				return {
					 arr:''
				}
			},
			created(){
				Vue.axios.get("../static/index.json").then((res)=> {
	      		  	return res.data
				  	}).then((data)=> {
				        this.arr = data[2].works
				   	})
			},
			template:`<div class="content">
			<div class="title">
				<h3>画册</h3><div class="hack"></div><a class="more" href=""><i class="iconfont icon-you"></i></a>
			</div>
			<div class="main">
				<div class="bookshow">
					<a href="#" v-for="item in arr">
						<div class="itembook">
							<div class="bookimg">
								<img :src="item.cover"/>
							</div>
							<h3 class="booktitle">{{item.title}}</h3>
							<p class="bookauthor">{{item.author}}</p>
							<p class="bookprice" >{{item.price | toFixed }}</p>
						</div>
					</a>
				</div>
			</div>
		</div>`
		},
		"hyf-free":{
			data(){
				return {
					 arr:''
				}
			},
			created(){
				Vue.axios.get("../static/index.json").then((res)=> {
	      		  	return res.data
				  	}).then((data)=> {
				        this.arr = data[3].works
				   	})
			},
			template:`<div class="content">
			<div class="title">
				<h3>免费</h3><div class="hack"></div><a class="more" href=""><i class="iconfont icon-you"></i></a>
			</div>
			<div class="main">
				<div class="bookshow">
					<a href="#" v-for="item in arr">
						<div class="itembook">
							<div class="bookimg">
								<span class="cover-label free-label"> 免费 </span>
								<img :src="item.cover"/>
							</div>
							<h3 class="booktitle">{{item.title}}</h3>
							<p class="bookauthor">{{item.author}}</p>
							<p class="bookprice" >免费</p>
						</div>
					</a>
				</div>
			</div>
		</div>`
		},
		"hyf-footer":{
			template:`<footer class="footer">
			<p> 手机版 | <a class="web" href="">网页版</a></p>
			<p class="copyright">© 2005-2017 douban.com</p>
		</footer>`
		},
		"hyf-bottom":{
			template:`<div class="bottom">
			<div class="inner">
				<div class="download">
					<div class="app-icon"></div>
					<div class="app-info">
						<h3>豆瓣阅读 App</h3>
						<p>走在印刷机之前</p>
					</div>
					<div class="btn-download">
						<div class="form-link">
							<a href="/app/download?icn=from_mobile_store_ad" class="btn-link">立即下载</a>
						</div>
					</div>
				</div>
			</div>
		</div>`
		}
	}
}
</script>

<style >
* {	padding: 0;	margin: 0;}
ul,ol,li {list-style: none;}
img {max-width:100%;border: 0;display: block;vertical-align: middle;}
a {text-decoration: none;}
a:hover {text-decoration: none;}
body {background: #f8f9f9;}
.header{
	width: 100%;
	height: 0.9rem;
	background: #fff;
	display: flex;
	justify-content: space-between;
	flex-flow: row nowrap;
	align-items: center;
}
.headerLeft,.headerRight{
	height: 0.9rem;
	display: flex;
	align-items: center;
}
.logo{
	width: 2.2rem;
	height: 0.9rem;
	line-height: 0.9rem;
	display: inline-block;
    margin-left: 10px;
	background: url("https://img3.doubanio.com/f/ark/9b217811f3af2e6865d48a625c8d11f582a9310a/pics/logo/normal-nav.svg") no-repeat center center;
}

.headerRight i{display: block;font-size: 0.5rem;margin-right: 0.2rem;}
.headerRight .icon-sousuo-sousuo{color: #7ba6b5;}
.headerRight .icon-wo{color: #dedede;}
.banner{padding: 0.2rem;}
.banner .fenlan1,.banner .fenlan2{
	display:inline-block;
	width:49%;
	line-height: 1rem;
	height: 1rem;
	border-radius: 5px;
	font-size: 0.32rem;
    background-size:cover;
	float: left;
	color: #fff;
	text-align: right;
}
.banner .fenlan1{
	margin-right:2%;
	background:black url("https://img3.doubanio.com/f/ark/b76c94b545ea973888c80afddcf8a1b0828fa09e/pics/mobile/banner-column-nav/column-background.jpg") no-repeat;
}
.banner .fenlan2{
	background:black url("https://img3.doubanio.com/f/ark/652f3b2eb090bcbc769b2980f1fcdf521df56d91/pics/mobile/banner-column-nav/serial-background.jpg") no-repeat;
}
.content{
	overflow: hidden;
	padding: 0.2rem;
	font-size: 0.3rem;
	
}
.title{
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
}
.more{
	border-radius: 100%;
	display: block;
	background: #77a4b3;
	color: #fff;
}
.more i{display: block;font-size: 0.4rem;font-weight: bold;}
.title .hack{width: 4.4rem;height: 1rem;}
.main{overflow-x: scroll;overflow-y: hidden;}
.bookshow{width: 19rem;}
.itembook{
	width: 1.6rem;
	float: left;
	margin-right: 15px;
	font-size:12px;
}
.cover-label {
    position: absolute;
    padding: 2px 0;
    line-height: 1;
    color: #fff;
    width: 100%;
    top: 13px;
    right: 13px;
    transform: translate(50%,-50%) rotate(45deg);
    text-align: center;
    font-size: 8px;
}
.sale-label {
    background: #fa595f;
}
.free-label {
    background: #3e82f8;
}
.bookimg{
	position: relative;
	width: 1.6rem;
	overflow: hidden;
	height: 2.4rem;
	margin-bottom: 8px;
	box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}
.booktitle{
	font-size:12px;
	color: #222;
    margin-top: 6px;
    line-height: 16px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.bookauthor{color: #737373;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.bookprice{color: #77a4b3;}
.footer{
	padding: 0.5rem 0 0.2rem;
    color: #a6a6a6;
    text-align: center;
    font-size: 0.26rem;
}
.web{color: #71ceb5;}
.copyright{font-size: 0.24rem;color: #888;}
.bottom{margin-top: 20px;}
.download{
	background: #d1dfe4;
    height: 51px;
    padding: 13px;
    font-size: 13px;
    position: relative;
}
.app-icon{
	display: inline-block;
	float: left;
	width: 56px;
    height: 56px;
    margin: -1px 6px 0 -2px;
    background: url("https://img3.doubanio.com/f/ark/ac5636a2b003212bc0f936073556137d8b7808a8/pics/app/app-icon@2x.png") no-repeat;
    background-size: 100%;
}
.download h3{
	font-weight: bold;
    font-size: 14px;
    margin: 8px 0 1px;
}
.download p{color: #333;}
.btn-download{
    position: absolute;
    top: 50%;
    right: 14px;
    color: #fff;
    height: 40px;
    margin-top: -20px;
    -moz-border-radius: 40px;
    border-radius: 40px;
    line-height: 40px;
    background: #77a4b3;
}
.btn-link{
	color: #fff;
    border: none;
    height: 100%;
    padding: 0 20px;
    font-size: 13px;
    background: transparent;
}
</style>