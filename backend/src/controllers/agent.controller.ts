import { Request, Response } from "express";
import { AgentService } from "../services/agent.service";
import { respond } from '../helpers/response-wrapper';

const service = new AgentService();

export const getAllAgents = (_req: Request, res: Response) => {
  const agents = service.getAll();
  respond(res, agents);
};

export const getAgentById = (req: Request, res: Response) => {
  const agent = service.getById(req.params.id);
  if (!agent) return respond(res, null, "Agent not found", 404);
  respond(res, agent);
};

export const createAgent = (req: Request, res: Response) => {
  const { firstName, lastName, email, mobileNumber } = req.body;
  const newAgent = service.create({ firstName, lastName, email, mobileNumber });
  respond(res, newAgent, "Agent created", 201);
};

export const updateAgent = (req: Request, res: Response) => {
  const updatedAgent = service.update(req.params.id, req.body);
  if (!updatedAgent) return respond(res, null, "Agent not found", 404);
  respond(res, updatedAgent, "Agent updated");
};

export const deleteAgent = (req: Request, res: Response) => {
  const success = service.delete(req.params.id);
  if (!success) return respond(res, null, "Agent not found", 404);
  respond(res, { id: req.params.id }, "Deleted successfully");
};
