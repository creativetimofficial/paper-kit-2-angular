import { Routes } from '@angular/router';

import { TutorialComponent } from './tutorial/tutorial.component';
export const DocumentationRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'tutorial',
        component: TutorialComponent
    }]
}];
