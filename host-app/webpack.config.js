const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");

const share = mf.share;



module.exports = {
  // output: {
  //   uniqueName: "hostApp",
  //   publicPath: "auto"
  // },
  // optimization: {
  //   runtimeChunk: false
  // },   
  // resolve: {
  //   alias: {
  //     ...sharedMappings.getAliases(),
  //   }
  // },
  // experiments: {
  //   outputModule: true
  // },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
        //library: { type: "module" },

        // For remotes (please adjust)
        // name: "hostApp",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          //...sharedMappings.getDescriptors()
        })
        
    }),
    //sharedMappings.getPlugin()
  ],
};
