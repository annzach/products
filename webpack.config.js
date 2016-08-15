const path = require('path');

module.exports ={
  entry:'./src/client.js',
  output:{
    path:path.join(__dirname, 'public'),
    filename:'bundle.js'
  },
  module:{
    loaders:[
     {
        test: /\.jsx?$/ ,
        loader: 'babel',
        exclude:['node_modules']
     },
     {
      test: /\.css$/,
      loaders: ['style','css'],
      exclude: ['node_modules']
     }
    ]
  }
  
}