import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import PostList from './components/PostsList.vue'
import CreatePost from './components/post/CreatePost.vue'
import EditProduct from './components/post/EditPost.vue'
import ShowPost from './components/post/ShowPost.vue'
import Dashboard from './components/admin/Dashboard.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path: "/",
			component: PostList,
		},
		{
			path: "/login",
			component: Login,
			meta:{
				forVisitors: true
			}
		},
		{
			path: "/register",
			component: Register,
			meta:{
				forVisitors: true
			}
		},
		{
			//Moze i ovako da se importuje component
			//require('./components/product/Create.vue')
			path: "/posts/create",
			component: CreatePost,
			meta: {
				forAuth: true
			}
		},
		{
			//Moze i ovako da se importuje component
			//require('./components/product/Create.vue')
			path: "/post/:post/edit",
			component: EditProduct,
			meta: {
				forAuth: true
			}
		},
		{
			//Moze i ovako da se importuje component
			//require('./components/product/Create.vue')
			path: "/post/:post",
			component: ShowPost
		},
		{
			//Moze i ovako da se importuje component
			//require('./components/product/Create.vue')
			path: "/admin/dashboard",
			component: Dashboard,
			meta: {
				forAuth: true
			}
		}

	],

	linkActiveClass: 'active',

	//Ovaj mod uklanja hash iz url 
	// mode:'history'
})

export default router