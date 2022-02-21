module.exports = {
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer   : {
    // 백엔드의 주소를 짧게 사용하기 위해서
    // http://localhost:3000/board/select => /board/select
    proxy   : {
      '/board': {
        target          : 'http://localhost:3000',
        changeOrigin    : true,
        logLevel        : 'debug'
      }
    },
    port: 8080
  },
}
