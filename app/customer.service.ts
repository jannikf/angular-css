import {Customer} from './customer';
import {CUSTOMERS} from './mock-customers';
import {Injectable} from 'angular2/core';

@Injectable()
export class CustomerService {
	getCustomers() {
		return Promise.resolve(CUSTOMERS);
	}
}
