import { Component } from '@angular/core';

//import {MenuService} from 'hostApp/MenuServiceModule';
//import {MenuServiceModule} from 'hostApp'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'remote-app';

  private meuServico: any; // Certifique-se de definir o tipo apropriado aqui

constructor(){

  // import('hostApp/MenuService')
  // .then((module) => {
  //   this.meuServico = module.default;
  //   // Faça algo com 'this.meuServico' aqui
  // })
  // .catch((error) => {
  //   console.error('Erro ao carregar o serviço:', error);
  // });


  //this.testes();
  // loadRemoteEntry({
  //   type: 'script',
  //   remoteName: 'hostapp',
  //   remoteEntry: 'http://localhost:4200/remoteEntry.js', // O nome definido no hostApp
  // }).then((moduleFactory) => {
  //   debugger;
  //   // Use moduleFactory.create() para criar uma instância do módulo
  //   //const moduleInstance = moduleFactory.create([this.title]); // Passe quaisquer argumentos necessários

  //   // Agora você pode acessar o serviço dentro do módulo carregado
  //   //this.meuServico = moduleInstance.instance.MenuService;
    
  //   // Faça algo com 'this.meuServico' aqui
  // })
  // .catch((error) => {
  //   debugger;
  //   console.error('Erro ao carregar o serviço:', error);
  // });
}

private async testes (){
//   const remoteEntry = await loadRemoteEntry('http://localhost:4200/remoteEntry.js', 'MenuService'); // Substitua pelo URL correto do hostApp
  //   console.log(remoteEntry);
}

}
