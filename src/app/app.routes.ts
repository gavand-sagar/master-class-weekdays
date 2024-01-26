import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { ApiDemoComponent } from './api-demo/api-demo.component';

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "gallery/something",
    component: GalleryComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:'service-demo',
    component: ServiceDemoComponent
  },
  {
    path:'api-demo',
    component: ApiDemoComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];
