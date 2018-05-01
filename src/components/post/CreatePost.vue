<template>
	<div class="container">
		<div class="form-group">
		    <label for="text">Text Title</label>
		    <input type="text" name="textTitle" v-model:value="post.textTitle"  class="form-control" id="text"  placeholder="Text title">
		  </div>
		  
		  <div class="form-group">
		  	<label for="image">Image:</label>
		  	<input ref="fileInput" class="form-control" type="file" id="file"  name="image" @change="imageChanged">
		  </div>

		  <div class="form-group">
		    <label for="textBody">Text Body</label>
		    <textarea name="textBody" v-model:value="post.textBody"  id="textBody" rows="7" class="form-control" placeholder="Text Body"></textarea>
		  </div>
		  
		  <button @click="clear" type="button" class="btn btn-primary">Clear</button>
		  <button @click="createPost"  type="button" class="btn btn-success">Create</button>
	</div>
</template>

<script type="text/javascript">
	
	export default{
		data(){
			return {
				post:{
					textTitle: '',
					textBody: '',
					image: ''
				}
			}
		},
		methods:{

			rmFile(){
			    var file = document.getElementById("file");
			    file.value = file.defaultValue;
			},
			clear(){
				this.post.textTitle = '',
				this.post.textBody = '',
				this.post.image = '',
				this.rmFile()
			},
			imageChanged(e){
				console.log(e.target.files[0])
				var fileReader = new FileReader()

				fileReader.readAsDataURL(e.target.files[0])

				fileReader.onload = (e) => {
					this.post.image = e.target.result
				}

				console.log(this.post)
			},
			createPost(){
				this.$http.post('api/posts',this.post)
				.then(response =>{
					console.log(response)
					swal("Created!", "Your post has beed created!", "success")
					this.clear()
				})
			},
		}
	}
</script>

<style type="text/css" scoped>

</style>