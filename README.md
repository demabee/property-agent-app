# Property Agent App

A simple full-stack application for managing property agents, their rental properties, tenants, and personal notes/reminders. Built with **Node.js + TypeScript** for the backend and **Vue.js + Tailwind CSS** for the frontend.

---

## Features

- **CRUD operations for Property Agents**:
  - Create new agents
  - Update existing agents
  - View all agents
  - Delete agents
- **Frontend**:
  - Agent creation/updating form (modal-based)
  - Agents displayed in a responsive, styled table
  - Edit/Delete actions from the table
  - Header bar with application title
- **Backend**:
  - REST API with in-memory storage (no database required)
  - Supports timestamps (`createdAt`, `updatedAt`)
  - Sample data for demonstration
- **Stretch goal**:
  - **Email uniqueness validation**: Prevent duplicate emails when creating or updating an agent.
  - **Form validation**: Ensure all required fields are filled out and formatted correctly.
  - **Mobile number formatting**: Automatically format and validate mobile numbers to a standard pattern.
  - Modular architecture: separate controllers, services, and models
  - Ready to extend to database storage (PostgreSQL, MongoDB, etc.)

---

## Technologies Used

### Backend
- **Node.js**
- **TypeScript**
- **Express.js**
- **CORS**
- **ts-node-dev** – TypeScript development server with auto-reload

### Frontend
- **Vue.js 3**
- **Tailwind CSS**
- **Axios**

### Link to ERD
- https://drive.google.com/file/d/1be0upOZIxHHMVap9PtDwvbgi0UWJ2k_W/view?usp=sharing