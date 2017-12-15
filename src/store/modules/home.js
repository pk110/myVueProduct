// 测面滑动菜单效果
const havenSign = '已签名'

const home = {
	state: {
       sign:'大帅比'
	},
	mutations: {
		getData (state) {
			state.sign = havenSign
		}
	},
	actions: {
		getData ({commit}) {
			commit('getData')
		},
		getApi ({commit}) {
			commit('getApi')
		}
	},
	getters: {
		
	}
}
export default home
