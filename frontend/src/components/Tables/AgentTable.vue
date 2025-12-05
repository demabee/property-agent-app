<script setup lang="ts">
import { toRefs } from 'vue';
import type { Agent } from "../../types/agent";

const props = defineProps<{
  agents: Agent[];
}>();
const { agents } = toRefs(props);

const emit = defineEmits<{
  (e: "edit", agent: Agent): void;
  (e: "delete", agent: Agent): void;
}>();

const handleEdit = (agent: Agent) => emit("edit", agent);
const handleDelete = (agent: Agent) => emit("delete", agent);

console.log("AgentTable props:", agents);
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
    <h2 class="text-xl font-semibold mb-4 text-gray-700">Property Agents</h2>
    <table class="min-w-full border border-gray-200 rounded overflow-hidden">
      <thead class="bg-gray-50">
        <tr>
          <th class="text-left px-4 py-2">Name</th>
          <th class="text-left px-4 py-2">Email</th>
          <th class="text-left px-4 py-2">Phone</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="agent in agents" :key="agent.id" class="border-t hover:bg-gray-50">
          <td class="px-4 py-2">{{ agent.firstName }} {{ agent.lastName }}</td>
          <td class="px-4 py-2">{{ agent.email }}</td>
          <td class="px-4 py-2">{{ agent.mobileNumber }}</td>
          <td class="px-4 py-2 flex space-x-2 justify-center">
            <button @click="handleEdit(agent)"
              class="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition">
              Edit
            </button>
            <button @click="handleDelete(agent)"
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
              Delete
            </button>
          </td>
        </tr>

        <tr v-if="agents.length === 0">
          <td colspan="4" class="text-center py-4 text-gray-500">No agents found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
