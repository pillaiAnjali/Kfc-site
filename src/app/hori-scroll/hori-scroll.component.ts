import { Component, OnInit } from '@angular/core';
import { kfcMenu } from 'src/model/model';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-hori-scroll',
  templateUrl: './hori-scroll.component.html',
  styleUrls: ['./hori-scroll.component.css']
})
export class HoriScrollComponent implements OnInit {

  allmenu:kfcMenu[]=[]

  constructor(private api:ServicesService){}

  ngOnInit(): void {
    this.api.getAllMenu()
    .subscribe((result:any)=>{
      console.log(result)
      console.log(result.menu[0])
      this.allmenu = result.menu;
      
    })
  }


}
