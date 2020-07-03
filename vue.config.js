module.exports = {
    devServer:{
        host:'localhost',
        port:8082,
        // hot:true,
        // open:true,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn/',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                  }
            }
        }
    }
}