import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { Charts } from './interfaces/charts';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  chartsItems!: Charts
  chartPie:any
  chartDoughnut: any

  constructor(private _HomeService:HomeService){}

  ngOnInit(): void {
    this.getCharts()
  }


  getCharts():void{
    this._HomeService.getCharts().subscribe({
      next: (res)=>{
        this.chartsItems = res.data
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.chartPie = new Chart("myChart", {
          type: 'pie',
          data : {
            labels: [
              'pending',
              'completed',
              // 'Done'
            ],
            datasets: [{
              label: 'Bookings',
              data: [this.chartsItems.bookings.completed, this.chartsItems.bookings.pending],
              backgroundColor: [
                '#5368F0',
                '#9D57D5',
                // 'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          }
        });
        this.chartDoughnut = new Chart("doughnutChart", {
          type: 'doughnut',
          data : {
            labels: [
              'admin',
              'user',
              // 'Done'
            ],
            datasets: [{
              label: 'Users',
              data: [this.chartsItems.users.admin, this.chartsItems.users.user],
              backgroundColor: [
                '#35C2FD',
                '#54D14D',
                // 'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          }
        });


      }
    })
  }
}
