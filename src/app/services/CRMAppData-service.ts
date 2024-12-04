import { FetchApi } from './FetchApi-service';
import { MeetingsTasksType } from '../models/CRMAppData/meetings-tasks-type';

class CRMAppDataService {
	public getMeetingsTasksList = async (): Promise<MeetingsTasksType[]> => {
		return await FetchApi.fetchApiResponse<MeetingsTasksType[]>('https://excel2json.io/api/share/2fd4ecd6-da6c-4e37-e666-08dab79fa5b4', []);
	}
}
export const cRMAppDataService: CRMAppDataService = new CRMAppDataService();
