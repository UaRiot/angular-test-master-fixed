import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CollegeComponent} from './college/college.component';
import {NotFoundComponent} from '../notFound/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: CollegeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class AboutRoutingModule {
}
