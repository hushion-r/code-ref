// uncleaned

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPlan, updatePlan } from '../services/api/planAPI';
import { RootState } from './store';

const initialPlan: Plan | undefined = undefined;

interface UpdatePlanThunkArgs {
  id: string;
  plan: UpdatePlan;
}

export const fetchPlan = createAsyncThunk('plans/fetch', async (id: string) => {
  return await getPlan(id);
});

export const editPlan = createAsyncThunk(
  'plans/editPlans',
  async ({ id, plan }: UpdatePlanThunkArgs) => {
    return updatePlan(id, plan);
  }
);

export const PlanSlice = createSlice({
  name: 'Plan',
  initialState: {
    plan: initialPlan as Plan | undefined,
  },
  reducers: {
    setPlan: (state, { payload: plan }: PayloadAction<Plan | undefined>) => {
      state.plan = plan;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlan.fulfilled, (state, action) => {
      state.plan = action.payload;
    });
  },
});

export const selectPlan = (state: RootState): Plan | undefined =>
  state.plan.plan;

export const { setPlan } = PlanSlice.actions;

export default PlanSlice.reducer;
