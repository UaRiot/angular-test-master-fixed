import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AboutInterface} from '../about.interface';

@Injectable()
export class CollegeService {
    collegeData = new Subject<AboutInterface>();
    collegeData$ = this.collegeData.asObservable();

    constructor() {
    }

    setData(data: AboutInterface) {
        this.collegeData.next(data);
    }
}
