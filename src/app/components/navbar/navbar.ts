import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  public readonly scrolled = signal(false);
  public readonly menuOpen = signal(false);

  public readonly navLinks = [
    { path: 'home', label: 'Inicio' },
    { path: 'about', label: 'Sobre mí' },
    { path: 'technologies', label: 'Tecnologías' },
    { path: 'projects', label: 'Proyectos' },
    { path: 'contact', label: 'Contacto' },
  ];

  // Font Awesome Icons
  public readonly faBars = faBars;
  public readonly faTimes = faTimes;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 10);
  }

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  // Cierra el menú (ej. al hacer clic en un enlace en móvil)
  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
