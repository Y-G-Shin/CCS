import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  links =[
  { path: '/',
    label: 'Shop',
    children:[
      {path:'/', label: 'Cable'},
      {path: '/', label:'Prebuilds'},
    ]
  },
  { path: 'software', label: 'Software'},
  { path: 'hireMe', label: 'Contact'}
];

isMenuOpen= false;
trackByPath(index:number, item:any){
  return item.path;
}

isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }


}


