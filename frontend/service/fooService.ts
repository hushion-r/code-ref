import { Plan, UpdatePlan } from '../objects/FCAInterfaces';
import RestService from './RestService';

const baseUrl = '/plans';

export default class PlanService {
  constructor(protected readonly api: RestService) {}

  async getPlan(pid: string): Promise<Plan> {
    return await this.api.get<Plan>(`${baseUrl}/${pid}`);
  }

  async updatePlan(pid: string, plan: UpdatePlan): Promise<Plan> {
    return await this.api.put<Plan>(`${baseUrl}/${pid}`, plan);
  }

  async deletePlan(pid: string): Promise<string> {
    return await this.api.delete<string>(`${baseUrl}/${pid}`);
  }
}
