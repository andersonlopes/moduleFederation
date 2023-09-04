const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  // ... outras configurações

  plugins: [
    new ModuleFederationPlugin({
        name: 'remoteApp',
        filename: "remoteEntry.js",
        exposes:{
          './Module': './src/app/app.module.ts'
        }
        // shared:{
        //   "@angular/core": { singleton: true, strictVersion: true }, 
        //   "@angular/common": { singleton: true, strictVersion: true }, 
        //   "@angular/router": { singleton: true, strictVersion: true },
        // }
        
    }),
  ],
};
