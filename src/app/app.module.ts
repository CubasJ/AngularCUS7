import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { PrincipalComponentComponent } from './principal-component/principal-component.component';
import { FormsModule } from '@angular/forms';
import { Barra_supComponenteComponent } from './principal-component/barra_sup-componente/barra_sup-componente.component';
import { DatosSuperiorComponenteComponent } from './principal-component/datos-superior-componente/datos-superior-componente.component';
import { TablaPrincipalComponent } from './principal-component/tabla-principal/tabla-principal.component';

const appRoutes:Routes=[
  {path:'', component:PrincipalComponentComponent},
];
@NgModule({
  declarations: [	
    AppComponent,Barra_supComponenteComponent,PrincipalComponentComponent,DatosSuperiorComponenteComponent,
    TablaPrincipalComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
