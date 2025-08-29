import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

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

}
