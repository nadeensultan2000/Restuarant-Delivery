import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent {
  customer: any = { name: '', address: '' ,phone:'', email:''};
  selectedItems: any[] = [];
  errorMessage: string = '';

  constructor(private router: Router,private location: Location) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedItems = navigation.extras.state['selectedItems'];
    }
  }
  GoBack(){
    this.location.back()
  }
 

  confirm() {
    if (this.customer.name ==''|| this.customer.address =='' ||this.customer.phone=='') {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    else{
    this.errorMessage = '';
    const order = this.createOrder();
    this.router.navigate(['/yourdata'], { state: { order} });
    
    console.log(order)}
  }

  createOrder() {
    return {
      items: this.selectedItems,
      customerName: this.customer.name,
      customerAddress: this.customer.address,
      customerEmail:this.customer.email,
    customerPhone :this.customer.phone
    };
  }
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
}
