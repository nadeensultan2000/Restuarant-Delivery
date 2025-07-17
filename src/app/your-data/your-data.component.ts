import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-your-data',
  templateUrl: './your-data.component.html',
  styleUrls: ['./your-data.component.css']
})
export class YourDataComponent {
  
GoBack() {
  this.location.back()}

 order: any;
  total: any;
  success: boolean=false;
  constructor(private router: Router, private service: SearchService,private location :Location){
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.order = navigation.extras.state['order'];
      console.log(this.order); // Check the order object in the console
    } 
  } 
  ngOnInit():void{
   this.SetQuantityOne(1)
  this. UpdateOrderTotal()
  }
  UpdateOrderTotal(){
  this.total=0
  for(let x in this.order.items){
       this.total+=(this.order.items[x].price) * (this.order.items[x].quantity) }
       console.log(this.total)
  }
  DeleteItem(index:number) {
  this.order.items.splice(index,1)
  this.UpdateOrderTotal()
  
  }
  Minus(index:number) {
    if(this.order.items[index].quantity>1){
    this.order.items[index].quantity--
    this.UpdateOrderTotal() }
  }
  Plus(index:number) {
    this.order.items[index].quantity++
    this.UpdateOrderTotal()
    console.log(this.order.items[index].quantity)
  }
  SetQuantityOne(quantity:number){
    for(let item in this.order.items){
      this.order.items[item].quantity=1
    }  
  }
  AddOrder(){
    this.UpdateOrderTotal()
    let items= this.order.items.map((item: any) =>
         { return{itemId:item.id,
         itemName :item.name,
          quantity:item.quantity,
             price:item.price*item.quantity}}) 

    let Model=
    {
      userName:this.order.customerName,
      phone: this.order.customerPhone,
      email: this.order.customerEmail,
      address: this.order.customerAddress,
      total:this.total,
      itemsOrderdto: items
    }
    console.log(Model)
    this.service.CreateNewOrder(Model).subscribe(data=>{
   
    } )
    this.success=true;
   
    if(this.success){
     
      this.router.navigate(['/checkout'])
    }
    console.log(this.success)
   
    }
    
    }
