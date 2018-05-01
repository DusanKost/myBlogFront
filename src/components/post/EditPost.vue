<template>
	<div class="container">
			
		 <h3>Post {{post.post_id}}</h3>
		 <div class="form-group">
		    <label for="text">Created by:</label>
		    <input type="text" readonly class="form-control"  :value="post.user_name" />
		  </div>

		 <div class="form-group">
		    <label for="text">Text Title:</label>
		    <input type="text" class="form-control"  v-model="newPost.post_title" />
		  </div>
		  
		  <div class="form-group">
		  	<label for="image">Image:</label>
		  	<input ref="fileInput" class="form-control" type="file" id="file"  name="image" @change="imageChanged">
		  	Old Image:
		  	<img style="border: 1px solid black" class="img-fluid" :src=" 'http://myblog.test/postImages/' + post.post_img" alt="">
		  </div>

		  <div class="form-group">
		    <label for="textBody">Text Body:</label>
		    <textarea class="form-control" v-model="newPost.post_body" rows="10">
		    	
		    </textarea>
		  </div>

		  <button class="btn btn-success" @click="editFunction">Edit</button>
		  
	</div>
</template>

<script>
	export default{
		data(){
			return {
				post:{},
				newPost:{
					post_body: '',
					post_title: '',
					image: ''
				},
			}
		},
		created(){
			this.$http.get('api/posts/' + this.$route.params.post)
			.then(res => {
				this.post = res.body.data

				this.newPost.post_body = this.post.post_body
				this.newPost.post_title = this.post.post_title
			})
		},
		methods:{
			
			imageChanged(e){
				console.log(e.target.files[0])
				var fileReader = new FileReader()

				fileReader.readAsDataURL(e.target.files[0])

				fileReader.onload = (e) => {
					this.newPost.image = e.target.result
				}

				console.log(this.newPost)
			},
			editFunction(){
				this.$http.put('api/posts/' + this.$route.params.post,this.newPost)
				.then(res => {
					console.log(res)
					this.post.post_img = res.body
					swal("Updated!", "Your post has beed updated!", "success")
				})
			}
		}
	}
</script>

<style scoped>
	
</style>