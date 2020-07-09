import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polararea-chart/polararea-chart.component';
import { ScatterChartComponent } from './scatter_chart/scatter-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "bar"
  },
  {
    path: "bar",
    component: BarChartComponent

  },
  {
    path: "line",
    component: LineChartComponent

  },
  {
    path: "pie",
    component: PieChartComponent
  },
  {
    path: "polararea",
    component: PolarAreaChartComponent
  },

  {
    path: "scatter",
    component: ScatterChartComponent

  },
  {
    path: "radar",
    component: RadarChartComponent
  },
  {
    path: "doughnut",
    component: DoughnutChartComponent
  },
  {
    path: "bubble",
    component: BubbleChartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
