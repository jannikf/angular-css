import {Component} from 'angular2/core';
import {Customer} from './customer';


@Component({
  selector: 'customer-detail',
  template: `
		<div *ngIf="customer">
			  <span class="badge">{{customer.id}}</span> {{customer.name}}
		</div>
  `,
  inputs: ['customer']
})
export class CustomerDetailComponent {
	public customer: Customer;
}
