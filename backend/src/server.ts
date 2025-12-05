import express from "express";
import cors from "cors";
import agentRoutes from "./routes/agent.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/agents", agentRoutes);

app.listen(3000, () => console.log("API running on http://localhost:3000"));
