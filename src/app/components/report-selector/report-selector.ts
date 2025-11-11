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
  // Effetto parallax sull’immagine di copertina
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

  // Anni disponibili
  years = [2025, 2024, 2023, 2022];
  selectedYear = 2025;

  // Report disponibili per ogni anno
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

  // Ritorna il report in base all’anno selezionato
  get selectedReport() {
    return this.reports.find((r) => r.year === this.selectedYear);
  }

  // Apri PDF in nuova scheda
  openPdf(link: string) {
    window.open(link, '_blank');
  }

  // Gestione dropdown personalizzato
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectYear(year: number) {
    this.selectedYear = year;
    this.dropdownOpen = false;
  }
}
