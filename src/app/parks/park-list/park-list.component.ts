import { Component, OnInit } from '@angular/core';
import { Park,PARKS} from '../park';
import { ParkDataService } from '../park-data.service';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css']
})
export class ParkListComponent implements OnInit {
  parks: Park[] = [];
  thePak?: Park;
  searchString: string = ' ';
  n: number = 0;

  constructor(private parkDataServ: ParkDataService) {
    //this.parks=PARKS;
    this.parkDataServ.getParks().subscribe(data=>this.parks=data);  }

  ngOnInit(): void {
    // this.parkDataServ.getParks().then(data=>this.parks=data);
    this.parkDataServ.getSubsription().subscribe(n=> this.n=n+1);
  }

  getParks(): void {
    /*this.parkDataServ.getParks().then(data => this.parks = data);
    // if the value is an empty string don't filter the items
    if(this.searchString && this.searchString.trim()!=''){
    this.parkDataServ.getFilteredParks(this.searchString).then(parks => {
    this.parks = parks;
    });
    }
    */
    this.searchString = (this.searchString || '').trim().toLowerCase();
    this.parkDataServ.getParks2().then(data => {
      this.parks = data.filter(park => park.name.toLocaleLowerCase().indexOf(this.searchString || '') > -1)
    })
  }
}
