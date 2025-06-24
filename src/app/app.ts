import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { Services } from './components/services/services';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Hero,Footer,Services,Testimonials,Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'vijayvibe';
}
