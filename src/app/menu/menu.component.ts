import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 
  id!: any;
  menu:any=[];
   public selectedItems:any= [];
constructor(private route:ActivatedRoute,private service:SearchService,private router: Router){

 this.id =this.route.snapshot.paramMap.get("id");
 console.log(this.id)
}
ngOnInit():void{
  this.getMenu()
   }
getMenu(){
  this.service.getMenuById(this.id).subscribe(data=>{
this.menu=data
console.log(this.menu)
  })
}

toggleSelection(item:any ) {
  const index = this.selectedItems.findIndex((i :any)=> i.id === item.id);

  if (index === -1) {
    // Item is not selected, add it
    this.selectedItems.push(item);
  } else {
    // Item is already selected, remove it
    this.selectedItems.splice(index, 1);
  }
}

next() {
  if(this.selectedItems.length==0){
    alert("Please Choose One Item At Least")
  }else{
  // Navigate to customer data, passing the selected items
  this.router.navigate(['customer'], { state: { selectedItems: this.selectedItems } });
  console.log(this.selectedItems)
  }
}

}
