import { Component } from '@angular/core';
import { DataClientService } from '../data-client.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  clientesData: any[] = [];

  constructor(private dataService: DataClientService) {}

  ngOnInit() {
    this.dataService.clientesData$.subscribe((data: any) => {
      this.clientesData.push(data);
      console.log(this.clientesData);
    });
  }
}
