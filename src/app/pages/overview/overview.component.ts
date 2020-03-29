import { Component, OnInit } from '@angular/core';
import { ApiServiceCorona } from 'src/app/services/api.service';
import { from } from 'rxjs';
import { Latest } from 'src/app/models/latest.model';
import { element } from 'protractor';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  latest:Latest;
  locations:Array<Location>[];
  fillcolor:string="#cc0202";
  lat: number = 32.0704876;
  lng: number = 73.7125865;
  zoom: number = 3;
  constructor(private apiService:ApiServiceCorona) { }

  ngOnInit(): void {
    this.getAllLocation();
    this.getLatest();
  }
  ngOnDestroy(){
    
  }
  formatNumber(text:string){
    return Number(text);
  }
  getAllLocation(){
    return this.apiService.getAllLocation().subscribe(
      data=>{
        this.locations = data['locations'];
        console.log(this.locations);
      }
    )
  }
  getLatest(){
    return this.apiService.getLatest().subscribe(
      data =>{
        this.latest = data['latest'];
        console.log(this.latest);
      }
    );
  }
  drawCircle(confirmed:number){
    if(confirmed<=100){
      return confirmed*500;
    }else if(confirmed>100 && confirmed <=1000){
      return confirmed*1000;
    }else if(confirmed>1000 && confirmed<10000){
      return confirmed *100;
    }else{
      return confirmed*10;
    }
  }
}
