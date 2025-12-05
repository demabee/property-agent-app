import { Agent } from "../models/agent.model";

export class AgentService {
  private agents: Agent[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      mobileNumber: "09171234567",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      mobileNumber: "09179876543",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      firstName: "Robert",
      lastName: "Johnson",
      email: "robert.johnson@example.com",
      mobileNumber: "09172345678",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

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
