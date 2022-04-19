const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
module.exports = {
  mode: 'production',
  publicPath: process.env.NODE_ENV === "production" ? "/Chop.Africa/" : "/",
};