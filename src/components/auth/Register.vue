<template>
	<div class="container">
	    <div class="row justify-content-center">
	        <div class="col-md-8">
	            <div class="card">
	                <div class="card-header">Register</div>

	                <div class="card-body">
	                     <!-- <form>  -->
<!-- 	                        @csrf --> 
	                        <div class="form-group row">
	                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

	                            <div class="col-md-6">
	                                <input v-model="user.name" id="name" type="text" class="form-control" name="name"  required>

<!-- 	                                @if ($errors->has('name'))
	                                    <span class="invalid-feedback">
	                                        <strong>{{ $errors->first('name') }}</strong>
	                                    </span>
	                                @endi -->
	                            </div>
	                        </div>

	                        <div class="form-group row">
	                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

	                            <div class="col-md-6">
	                                <input v-model="user.email"  id="email" type="email" class="form-control" name="email" required>

<!-- 	                                @if ($errors->has('email'))
	                                    <span class="invalid-feedback">
	                                        <strong>{{ $errors->first('email') }}</strong>
	                                    </span>
	                                @endif -->
	                            </div>
	                        </div>

	                        <div class="form-group row">
	                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

	                            <div class="col-md-6">
	                                <input v-model="user.password" id="password" type="password" class="form-control" name="password" required>

<!-- 	                                @if ($errors->has('password'))
	                                    <span class="invalid-feedback">
	                                        <strong>{{ $errors->first('password') }}</strong>
	                                    </span>
	                                @endif -->
	                            </div>
	                        </div>

	                        <div class="form-group row">
	                            <label  for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

	                            <div class="col-md-6">
	                                <input v-model="user.confirm_password" id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
	                            </div>
	                        </div>

	                        <div class="form-group row mb-0">
	                            <div class="col-md-6 offset-md-4">
	                                <button @click="register" type="button" class="btn btn-primary">
	                                    Register
	                                </button>
	                            </div>
	                        </div>
	                    <!-- </form> -->
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	import swal from 'sweetalert'

	export default{
		data(){
			return{
				user:{
					name:'',
					email: '',
					password: '',
					confirm_password:''
				}
			}
		},
		methods:{
			register(){
				//this.validate();
				if (this.validate()) {

					this.$http.post("api/register",this.user)
	                .then(res => {
	                	console.log(res)
	                })
	                .then(res  => {
	                	this.login()
	                })
	                
				}else{
					swal("All fields must be at least 6 chars!", "Click ok to continue!", "error");
				}
			},
			validate(){
				if (this.user.name.length < 6 || this.user.email.length < 6 || this.user.password.length < 6 || this.user.confirm_password.length < 6) 
				{
					return false;
				}else{
					return true;
				}
			},
			login(){

                var data = {
                    client_id : 2,
                    client_secret: "XtuWZlwO4e0G6ewuKcsLjPsnEDPONrHRmpFVvL0T",
                    grant_type : 'password',
                    username: this.user.email,
                    password: this.user.password
                };

                this.$http.post("oauth/token",data)
                .then(res => {
                    console.log(res)
                    this.$auth.setToken(res.body.access_token,res.body.expires_in + Date.now())
                })
                .then(res => {
                    this.$router.push("/")
                    this.$emit('login',true)
                })
            }
		}
	}
</script>

<style scoped>
	
</style>