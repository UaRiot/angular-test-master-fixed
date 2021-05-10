import {Component, OnInit} from '@angular/core';
import {AboutInterface} from '../about.interface';
import {CollegeService} from '../services/college.service';


@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
    college?: AboutInterface;

    constructor(
        private collegeService: CollegeService
    ) {
    }

    ngOnInit() {
        this.getCollege();
        this.setCollege({
            id: 1,
            name: 'testName',
            photo: 'testPhoto',
            about: 'testAbout',
            media_type: 1,
            vimeo_video_id: 1
        });
    }

    setCollege(data: AboutInterface): void {
        this.collegeService.setData(data);
    }

    getCollege(): void {
        this.collegeService.collegeData$.subscribe(
            college => {
                this.college = college;
            }
        );
    }
}
