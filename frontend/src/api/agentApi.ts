import type { Agent } from '../types/agent';
import http from "./http";

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

// Service methods
export const createAgent = (data: Agent) =>
  http.post<ApiResponse<Agent>>("agents", data);

export const getAgents = () =>
  http.get<ApiResponse<Agent[]>>("agents");

export const getAgent = (id: string | number) =>
  http.get<ApiResponse<Agent>>(`agents/${id}`);

export const updateAgent = (id: string | number, data: Partial<Agent>) =>
  http.put<ApiResponse<Agent>>(`agents/${id}`, data);

export const deleteAgent = (id: string | number) =>
  http.delete<ApiResponse<{ success: boolean }>>(`agents/${id}`);
