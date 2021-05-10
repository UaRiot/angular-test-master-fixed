import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {CollegeComponent} from './college/college.component';
import {NotFoundComponent} from '../notFound/not-found.component';
import {CollegeService} from './services/college.service';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [CollegeComponent, NotFoundComponent],
    imports: [CommonModule, AboutRoutingModule, TranslateModule],
    providers: [CollegeService]
})
export class AboutModule {
}
