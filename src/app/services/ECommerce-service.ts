import { FetchApi } from './FetchApi-service';
import { RevenueType } from '../models/ECommerce/revenue-type';

class ECommerceService {
	public getRevenueList = async (): Promise<RevenueType[]> => {
		return await FetchApi.fetchApiResponse<RevenueType[]>('https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2', []);
	}
}
export const eCommerceService: ECommerceService = new ECommerceService();
