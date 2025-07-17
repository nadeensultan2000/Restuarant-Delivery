import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  cities = ['Mansoura', 'Alex', 'Cairo'];
  
  restaurants: any[] = [];
 
  constructor(private service:SearchService){
  }
  ngOnInit():void{
 
    this.searchRestaurants();
    
  }
  

  selectedCity: string=''
  selectedName:string=''
  searchRestaurants() {
    this.service.getRestaurants().subscribe((data:any)=>{
      this.restaurants=data
    })
    console.log(this.restaurants)
  }

    
    
  fillterRestaurant(selectedCity?:string ,selectedName?:string){
   
    
    this.service.getRestaurantsByCity(selectedCity,selectedName).subscribe((data:any)=> {
      this.restaurants=data;
   })
    console.log(this.restaurants);
  
}
}

