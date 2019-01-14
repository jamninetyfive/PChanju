module.exports = {
    pluginOptions: {
      electronBuilder: {
        chainWebpackRendererProcess: config => {
          config.plugin('define').tap(args => {
            args[0]['process.env.FLUENTFFMPEG_COV'] = false
            return args
          })
        },        
        builderOptions: {
            appId: "pl.lt.pchanju",
            productName : "时光韩剧",
            copyright: "Copyright © 2018 Jam Sou",
            win : {
              icon : "public/assets/logo.png",
              publisherName :"Jam Sou"
            },
            // mac : {
            //   icon : "public/assets/logo.png",
            //   publisherName :"Jam Sou"
            // }
        }
      }
    }
  }