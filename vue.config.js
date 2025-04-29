module.exports = {
  publicPath: "/JobFinder/", // Replace 'JobFinder' if your repository name changes
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm-bundler.js",
      },
    },
  },
};
