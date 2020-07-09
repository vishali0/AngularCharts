import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
//import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ScatterChartComponent } from './scatter_chart/scatter-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolarAreaChartComponent } from './polararea-chart/polararea-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent, BubbleChartComponent,
    BarChartComponent, PieChartComponent,
    ScatterChartComponent, DoughnutChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
