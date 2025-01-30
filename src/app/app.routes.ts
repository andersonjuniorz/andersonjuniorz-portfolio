import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfoliowebComponent } from './pages/portfolioweb/portfolioweb.component';
import { PortfoliogamesComponent } from './pages/portfoliogames/portfoliogames.component';
import { Portfolio3dComponent } from './pages/portfolio3d/portfolio3d.component';

export const routes: Routes = [
    { path : "" , component : HomeComponent },
    { path : "about" , component : AboutComponent },
    { path : "services/web" , component : PortfoliowebComponent },
    { path : "services/games" , component : PortfoliogamesComponent },
    { path : "services/3d" , component : Portfolio3dComponent }
];
