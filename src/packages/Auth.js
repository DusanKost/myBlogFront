export default function(Vue){
	let authenticatedUser = {}

	Vue.auth = {
		//set token
		setToken(token,experation){
			localStorage.setItem('token',token)
			localStorage.setItem('experation',experation)
		},
		//get token
		getToken(){
			var token = localStorage.getItem('token')
			var experation = localStorage.getItem('experation')

			if (! token || ! experation){
				return null
			}

			if(Date.now() > parseInt(experation)){
				this.destroyToken()
				return null
			}else{
				return token
			}
		},
		//destroy token
		destroyToken(){
			localStorage.removeItem('token')
			localStorage.removeItem('experation')
		},
		//isAuthenticated

		isAuthenticated(){
			if (this.getToken())
				return true
			else
				return false
		},

		setAuthenticatedUser(data){
			authenticatedUser = data
		},

		getAuthenticatedUser(){
			return authenticatedUser
		}
	}
	Object.defineProperties(Vue.prototype,{
		$auth:{
			get(){
				return Vue.auth
			}
		}
	})
}