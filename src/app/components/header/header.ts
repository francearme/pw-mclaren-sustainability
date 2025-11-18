import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  // Gestisce lo stato di apertura del menu mobile
  menuOpen = false;

  // Alterna l'apertura e la chiusura del menu mobile
  // Inoltre disabilita lo scroll della pagina quando il menu è aperto
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}
