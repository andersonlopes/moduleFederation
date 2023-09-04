const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//const { shareAll } = require("webpack/lib/container/ShareAllPlugin"); // Importe a função shareAll


module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      // remotes: {
      //   'remoteApp': 'remoteApp@http://localhost:4201/remoteEntry.js', // Substitua pelo URL correto do hostApp
      //   //'hostApp': 'hostApp',
      // }
      // shared: {
      //   "@angular/core": { singleton: true, strictVersion: true }, 
      //   "@angular/common": { singleton: true, strictVersion: true }, 
      //   "@angular/router": { singleton: true, strictVersion: true },
      // }
    }),
  ],
};
