import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LocalizationService {
    constructor(
        private tranService: TranslateService,
    ) {}

    public Init() {
        this.tranService.setDefaultLang('en');

        const currentLocal = this.Local ? this.Local : window.navigator.language.substr(0, 2);

        this.tranService.use(currentLocal);
    }

    public set Local(val: string) {
        this.tranService.use(val);
        localStorage.setItem('Local', val);
    }

    public get Local() {
        return localStorage.getItem('Local');
    }
}
