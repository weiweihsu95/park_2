import { Component, OnInit } from '@angular/core';
import{Park,PARKS} from '../park';
import{ParkDataService} from '../park-data.service';
import{Router,ActivatedRoute} from '@angular/router';
import{Location} from '@angular/common'

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css']
})
export class ParkDetailComponent implements OnInit {
  //id:number=0;
  //parks:Park[]=[];
  //thePark?:Park;
  id : number = 0;
  parks:Park[]=PARKS;
  thePark?:Park=PARKS[0];

  constructor(private route:ActivatedRoute,public router:Router,private location:Location,private parkDataServ:ParkDataService) {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.id = parseInt(id);
    this.parkDataServ.getPark(this.id).subscribe(data=>this.thePark=data);
   }

  ngOnInit(): void {
  }
  goBack():void{
    this.location.back();
  }
}
