<template>
<!-- 	<div class="container" style="margin-top: 10px;">
	  <div class="row"> -->
	    
<!-- 	    <div class="card col-sm-4 stylePost"> -->
		  <div class="someDiv">
			  	<router-link :to="'/post/' + postId">
			  		<img class="card-img-top" :src=" 'http://myblog.test/postImages/' + this.postImg" alt="Card image cap">
			  	</router-link>
			  <div class="card-body">
			    <h5 class="card-title">{{postTitle}}</h5>
			    <p class="card-text"><small class="text-muted">{{postUser}}</small></p>
			    <div v-if="logedUserId == postUserId">
			    	<router-link :to="'/post/' + postId + '/edit'" class="btn btn-primary">Edit</router-link>
			    	<button class="btn btn-danger" @click="deleteFunction">Delete</button>
			    </div>
			  </div>
		  </div>
<!-- 		</div> -->

<!-- 	  </div>
	</div> -->
</template>

<script>
	export default{
		props:['post-id','post-title','post-img','post-user','loged-user-id','post-user-id'],
		data(){
			return {

			}
		},
		methods:{
			deleteFunction(){
				this.$http.delete('api/posts/' + this.postId)
				.then(res => {
					console.log(res)
					swal("Deleted!", "Your post has beed Deleted!", "success")
				})
			}
		}
	}
</script>

<style scoped>
	.someDiv{
		padding: 5px; margin: 5px; border: 1px solid black
	}

	img:hover{
		cursor: pointer;
		opacity: .7;
	}
</style>