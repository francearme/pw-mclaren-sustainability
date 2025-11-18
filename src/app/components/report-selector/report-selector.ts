import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './report-selector.html',
  styleUrl: './report-selector.css',
})
export class ReportSelectorComponent {
  /* Effetto parallax leggero applicato all’immagine introduttiva.
     L’evento di scroll modifica la trasformazione CSS (zoom progressivo). */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const image = document.querySelector('.intro-image') as HTMLElement;
    if (!image) return;

    const scrollY = window.scrollY;
    if (scrollY === 0) {
      image.style.transform = 'scale(1)';
      return;
    }

    const scale = 1 + scrollY / 3000;
    image.style.transform = `scale(${Math.min(scale, 1.2)})`;
  }

  /* Elenco degli anni disponibili per la consultazione dei report */
  years = [2025, 2024, 2023, 2022];

  /* Anno selezionato mostrato nel selettore personalizzato */
  selectedYear = 2025;

  /* Array che associa ogni anno al relativo report ufficiale McLaren Racing */
  reports = [
    {
      year: 2025,
      title: 'SUSTAINABILITY REPORT 2024',
      link: 'https://mclaren.bloomreach.io/delivery/resources/content/assets/mclaren-assets/sustainability/2024-sustainability-report.pdf',
    },
    {
      year: 2024,
      title: 'SUSTAINABILITY REPORT 2023',
      link: 'https://mclaren.bloomreach.io/delivery/resources/content/assets/mclaren-assets/sustainability/2023-sustainability-report.pdf',
    },
    {
      year: 2023,
      title: 'SUSTAINABILITY REPORT 2022',
      link: 'https://mclaren.bloomreach.io/delivery/resources/content/assets/mclaren-assets/sustainability/mclaren-racing-sustainability-report-2022.pdf',
    },
    {
      year: 2022,
      title: 'SUSTAINABILITY REPORT 2021',
      link: 'https://mclaren.bloomreach.io/delivery/resources/content/assets/mclaren-assets/sustainability/2021-sustainability-report.pdf',
    },
  ];

  /* Restituisce il report associato all’anno selezionato */
  get selectedReport() {
    return this.reports.find((r) => r.year === this.selectedYear);
  }

  /* Apertura del PDF in una nuova scheda del browser */
  openPdf(link: string) {
    window.open(link, '_blank');
  }

  /* Gestione dello stato di apertura/chiusura del menu a tendina */
  dropdownOpen = false;

  /* Alterna apertura e chiusura del dropdown */
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  /* Imposta l’anno selezionato e chiude la lista */
  selectYear(year: number) {
    this.selectedYear = year;
    this.dropdownOpen = false;
  }
}
