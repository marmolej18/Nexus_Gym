import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:  'inicio/:fecha', component: InicioComponent}, 
  { path: 'inicio', component: InicioComponent },
  {path: 'nosotros',component: NosotrosComponent},
  {path: 'clases',component:ClasesComponent},
  {path: 'contacto',component: ContactoComponent},
  {path:'galeria',component:GaleriaComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: '**', redirectTo: '/login'} //inicio

];
