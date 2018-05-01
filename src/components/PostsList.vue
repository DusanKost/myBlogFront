<template>
	<div>
		<slider-component></slider-component>
		
		<div class="container" style="margin-top: 10px;">
			<nav aria-label="Page navigation example">
			  <ul class="pagination">
			    <li :class="{ 'disabled': prev }" class="page-item"><a class="page-link" href="#" @click="functionPrev">Previous</a></li>
			    <li :class="{ 'disabled': next }" class="page-item"><a class="page-link" href="#" @click="functionNext">Next</a></li>
			  </ul>
			</nav>
		</div>


		<div  class="container">
	  		<div class="row">
	  			<div v-for="post in posts"  class="card col-sm-4" style="border:none;">
	  				<posts-component
					:post-title = "post.post_title" :post-img="post.post_img" 
					:post-user="post.user_name" :post-id = "post.post_id"
					:loged-user-id="userId" :post-user-id="post.user_id"
				></posts-component>
	  			</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Slider from './_includes/Slider.vue'
	import Posts from './_includes/Posts.vue'
	export default{
		props:['user-id']
		,components:{
			'slider-component' : Slider,
			'posts-component':Posts
		},
		data(){
			return {
				allData:{},
				links:{},
				meta: {},
				posts:[],
				prev: true,
				next: true
			}
		},
		created(){
			this.fill('api/posts')
		},
		methods:{
			functionPrev(e){
				e.preventDefault();
				this.fill(this.links.prev)
				this.vali()
				this.next = false
			},
			functionNext(e){
				e.preventDefault();
				this.fill(this.links.next)
				this.vali()
				this.prev = false
			},
			vali(){
				if (this.meta.current_page == this.meta.last_page) {
					this.next = true
					this.prev = false
				}
				else if (this.meta.current_page == this.meta.from) {
					this.next = false
					this.prev = true
				}
			},
			fill(link){

				this.$http.get(link)
				.then(res => {
					console.log(JSON.parse(res.bodyText))
					this.allData = JSON.parse(res.bodyText)
					this.posts = this.allData.data
					this.links = this.allData.links
					this.meta = this.allData.meta
				}).then(res =>{
					this.vali()
				})
			}
		},
	}



	// window.onscroll = function(ev) {
	//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	//     	alert('bottom of the page')
	//     }
	// };
</script>
<style scoped>
	
</style>