import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import {loadRemoteModule} from '@angular-architects/module-federation'
import { DynamicModuleLoaderService } from '@angular-architects/module-federation';
import { PaginaTesteComponent } from './pagina-teste/pagina-teste.component';

const appRoutes: Routes = [
  // Outras rotas do aplicativo host podem vir antes
  { path: '', component: HomeComponent }, // Rota para a página inicial
  {path: 'teste', component: PaginaTesteComponent},
  {
    path: 'remote',
    loadChildren:()  => 
    loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'remoteapp',
      exposedModule: './Module'
    }).then(m => m.Module)
    .catch((error) =>{
      console.log('Error loading chunck', error);
      throw error;
    })
  }
  // Outras rotas do aplicativo host podem vir depois
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
