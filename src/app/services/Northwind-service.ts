import { CustomersType } from '../models/Northwind/customers-type';
import { Northwind } from '../static-data/northwind';

class NorthwindService {
	public getCustomers(): CustomersType[] {
		return Northwind['CustomersType'];
	}
}
export const northwindService: NorthwindService = new NorthwindService();
