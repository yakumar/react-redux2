var webpack = require("webpack")
var path = require("path")

module.exports = {
   
    
    entry: {
        app: "./public/app/app.js"
    },
    output: {
        path: __dirname + "/public/build",
        filename: "bundle.js"

    },
    devtool:'#source-map',
    
    
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query:{
                    presets:['react', 'es2015', 'stage-2']
                }
            }
        
        
        ]
    },
    watchOptions: { poll: 1000 }
    
    
    
    
    
}