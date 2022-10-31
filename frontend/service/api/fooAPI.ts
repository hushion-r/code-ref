import services from '..';
import { Plan, UpdatePlan } from '../../objects/FCAInterfaces';

export async function getPlan(pid: string): Promise<Plan> {
  return await services.planService.getPlan(pid);
}

export async function updatePlan(pid: string, plan: UpdatePlan): Promise<Plan> {
  return await services.planService.updatePlan(pid, plan);
}

export async function deletePlan(pid: string): Promise<string> {
  return await services.planService.deletePlan(pid);
}
