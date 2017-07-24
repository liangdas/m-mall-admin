export default {
	secret: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	mongo: {
		development: {
			connectionString: 'mongodb://115.28.62.110:20005/mall'
		},
		production: {
			connectionString: 'mongodb://115.28.62.110:20005/mall'
		}
	},
	redis: {
		development: {
			connectionString: 'redis://:payplug@115.28.62.110:6379/9'
		},
		production: {
			connectionString: 'redis://:payplug@115.28.62.110:6379/9',
		}
	},
	upload: {
		tmp : 'public/tmp/',
		path: 'public/uploads/'
	},
	superAdmin: {
		username: 'admin', 
		password: '123456', 
	},
	orderStatus: {
		'submitted': '已提交', 
		'canceled' : '已取消', 
		'confirmed': '已确认', 
		'finished' : '已完成', 
	},
	wechat: {
		appid: 'wx4ec54c44008298ec', 
		secret: '8295e6dd753aab17624e0bb0e1c4e98d', 
	},
}