import { Component, signal } from '@angular/core';

import { HeaderComponent } from './components/header/header';
import { ReportSelectorComponent } from './components/report-selector/report-selector';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ReportSelectorComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pw-mclaren-sustainability');
}
