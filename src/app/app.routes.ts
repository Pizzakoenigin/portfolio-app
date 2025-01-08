import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path: 'main', component: MainComponent },
    {path: 'projekte', component: ProjectsComponent},
    {path: 'lebenslauf', component: CvComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'}
];
