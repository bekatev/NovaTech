import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page.component';
import { BusinessesPageComponent } from './pages/businesses-page.component';
import { CareersPageComponent } from './pages/careers-page.component';
import { ContactPageComponent } from './pages/contact-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { NewsPageComponent } from './pages/news-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'businesses', component: BusinessesPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'careers', component: CareersPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];
