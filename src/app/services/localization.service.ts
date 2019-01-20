import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LocalizationService {
    constructor(
        private tranService: TranslateService,
    ) {}

    public Init() {
        this.tranService.setDefaultLang('en');
    }

    public set Local(val: string) {
        this.tranService.use(val);
        localStorage.setItem('Local', val);
    }

    public get Local() {
        return localStorage.getItem('Local');
    }
}
