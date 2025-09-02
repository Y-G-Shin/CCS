import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { RouterLink, RouterOutlet,Router,NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title= 'angular-routing';
  footerUrl = '';
  footerLink = ''; 

  themeClass='light';

  constructor(private router:Router){
      this.router.events.pipe(filter(event=> event instanceof NavigationEnd)).subscribe((event: NavigationEnd)=> {

        const url = (event as NavigationEnd).urlAfterRedirects;

        if (url ==='/'){
          this.themeClass ='light';
        }else if(url.startsWith('/software')){
          this.themeClass= 'dark';
           
        }

      });
  }

}
