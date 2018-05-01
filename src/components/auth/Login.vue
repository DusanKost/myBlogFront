<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <!-- <form method="POST" action="#"> -->
    <!--                         @csrf -->

                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input v-model="email" id="email" type="email" class="form-control" name="email">

    <!--                                 @if ($errors->has('email'))
                                        <span class="invalid-feedback">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif -->
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input v-model="password" id="password" type="password" class="form-control" name="password" required>

    <!--                                 @if ($errors->has('password'))
                                        <span class="invalid-feedback">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif -->
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button @click="login" type="submit" class="btn btn-primary">
                                        Login
                                    </button>

                                    <!-- <a class="btn btn-link" href="#">
                                        Forgot Your Password?
                                    </a> -->
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
    export default{
        data(){
            return {
                email: '',
                password: ''
            }
        },
        methods:{
            login(){

                var data = {
                    client_id : 2,
                    client_secret: "XtuWZlwO4e0G6ewuKcsLjPsnEDPONrHRmpFVvL0T",
                    grant_type : 'password',
                    username: this.email,
                    password: this.password
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

<style scoped></style>