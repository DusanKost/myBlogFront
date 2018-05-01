<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
<!--             <a class="navbar-brand" href="#"> -->
                <router-link class="navbar-brand" to="/">
                    My Blog
                </router-link>
<!--             </a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
    <!--                 @guest -->
                        <li>
                            <router-link class="nav-link" to="/" v-if="!isAuth" >
                                Home
                            </router-link>
                        </li>

                        <li>
                            <router-link class="nav-link" to="/login" v-if="!isAuth" >
                                Login
                            </router-link>
                        </li>
                        
                        <li>
                            <router-link class="nav-link" to="/register" v-if="!isAuth">
                                Register
                            </router-link>
                        </li>

    <!--                 @else -->
                        <li class="nav-item dropdown" v-if="isAuth">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                 Menu <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" to="/admin/dashboard" v-if="isAuth" >
                                    Dashboard
                                </router-link>
                                <router-link class="dropdown-item" to="/posts/create" v-if="isAuth" >
                                    Create Post
                                </router-link>
                                <a class="dropdown-item" href="#" @click="logout">
                                    Logout
                                </a>
                            </div>
                        </li>
    <!--                 @endguest -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        props:['is-auth'],
        data(){
            return {
            }
        },
        methods:{
            logout(){
                this.$auth.destroyToken()
                this.$router.push("/")
                this.$emit('logout',false)
            }
        }
    }
</script>

<style scoped>

</style>