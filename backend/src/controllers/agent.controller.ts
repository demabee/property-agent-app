import { Request, Response } from "express";
import { AgentService } from "../services/agent.service";

const service = new AgentService();

export const getAllAgents = (_req: Request, res: Response) => {
  res.json(service.getAll());
};

export const getAgentById = (req: Request, res: Response) => {
  const agent = service.getById(req.params.id);
  if (!agent) return res.status(404).json({ message: "Agent not found" });
  res.json(agent);
};

export const createAgent = (req: Request, res: Response) => {
  const { firstName, lastName, email, mobileNumber } = req.body;
  const newAgent = service.create({ firstName, lastName, email, mobileNumber });
  res.status(201).json(newAgent);
};

export const updateAgent = (req: Request, res: Response) => {
  const updatedAgent = service.update(req.params.id, req.body);
  if (!updatedAgent) return res.status(404).json({ message: "Agent not found" });
  res.json(updatedAgent);
};

export const deleteAgent = (req: Request, res: Response) => {
  const success = service.delete(req.params.id);
  if (!success) return res.status(404).json({ message: "Agent not found" });
  res.json({ message: "Deleted successfully" });
};
