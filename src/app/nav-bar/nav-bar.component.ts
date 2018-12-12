import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../+authentication/services/authentication.service';
import { LocalizationService } from '../services/localization.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    public lang: string;

    constructor(
        public route: Router,
        private authService: AuthenticationService,
        private localService: LocalizationService,
    ) { }

    public moveToAddPost(): void {
        this.route.navigate(['posts', 'add']);
    }

    public moveToProfile(): void {
        this.route.navigate(['/profile']);
    }

    public moveToPosts(): void {
        this.route.navigate(['category/all/posts']);
    }

    public logOut(): void {
        this.authService.logOut();
    }

    public changeLan(lang: string) {
        this.localService.Local = lang;
    }

    ngOnInit(): void {
        this.lang = localStorage.getItem('Local');
    }
}
