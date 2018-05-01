<template>
	<div class="container">
			
		 <h3>Post {{post.post_id}}</h3>
		 <div class="form-group">
		    <label for="text">Created by:</label>
		    <input type="text" class="form-control" readonly :value="post.user_name" />
		  </div>

		 <div class="form-group">
		    <label for="text">Text Title:</label>
		    <input type="text" class="form-control" readonly :value="post.post_title" />
		  </div>
		  
		  <div class="form-group">
		  	<label for="image">Image:</label>
		  	<img style="border: 1px solid black" class="img-fluid" :src=" 'http://myblog.test/postImages/' + post.post_img" alt="">
		  </div>

		  <div class="form-group">
		    <label for="textBody">Text Body:</label>
		    <textarea class="form-control" readonly rows="10">
		    	{{post.post_body}}
		    </textarea>
		  </div>
		  
	</div>
</template>

<script>
	export default{
		data(){
			return {
				post:{},
			}
		},
		created(){
			this.$http.get('api/posts/' + this.$route.params.post)
			.then(res => {
				this.post = res.body.data
			})
		}
	}
</script>

<style scoped>
	
</style>