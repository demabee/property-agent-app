import { Agent } from "../models/agent.model";

export class AgentService {
  private agents: Agent[] = [];

  getAll(): Agent[] {
    return this.agents;
  }

  getById(id: string): Agent | undefined {
    return this.agents.find(a => a.id === id);
  }

  create(data: Omit<Agent, "id" | "createdAt" | "updatedAt">): Agent {
    const newAgent: Agent = {
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...data,
    };
    this.agents.push(newAgent);
    return newAgent;
  }

  update(id: string, changes: Partial<Omit<Agent, "id" | "createdAt">>): Agent | null {
    const agent = this.getById(id);
    if (!agent) return null;

    Object.assign(agent, changes);
    agent.updatedAt = new Date();
    return agent;
  }

  delete(id: string): boolean {
    const initialLength = this.agents.length;
    this.agents = this.agents.filter(a => a.id !== id);
    return this.agents.length < initialLength;
  }
}
