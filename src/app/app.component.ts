import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { CalendarModule } from 'primeng/calendar';
import { LayoutComponent } from './admin/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarModule, DataTablesModule,RouterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionStockFrontend';
  
}
