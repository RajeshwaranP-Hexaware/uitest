import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dashboardfooter',
  templateUrl: './dashboardfooter.component.html',
  styleUrls: ['./dashboardfooter.component.css']
})
export class DashboardfooterComponent implements OnInit {
  @Input() orderNo: string;
  constructor() { }

  ngOnInit() {
  }

}
