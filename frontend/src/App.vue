<script setup lang="ts">
import { ref, onMounted } from "vue";
import AgentForm from "./components/Forms/AgentForm.vue";
import AgentsTable from "./components/Tables/AgentTable.vue";
import { getAgents, deleteAgent } from "./api/agentApi";
import type { Agent } from "./types/agent";

const agents = ref<Agent[]>([]);
const selectedAgent = ref<Agent | null>(null);
const showModal = ref(false);

const fetchAgents = async () => {
  try {
    const res = await getAgents();
    agents.value = res.data.data ?? [];
  } catch (err) {
    console.error(err);
    alert("Failed to fetch agents");
  }
};

const handleDelete = async (agent: Agent) => {
  if (confirm(`Are you sure you want to delete ${agent.firstName} ${agent.lastName}?`)) {
    try {
      await deleteAgent(agent.id!);
      agents.value = agents.value.filter(a => a.id !== agent.id);
    } catch (err) {
      console.error(err);
      alert("Failed to delete agent");
    }
  }
};

const handleEdit = (agent: Agent) => {
  selectedAgent.value = { ...agent };
  showModal.value = true;
};

const handleAdd = () => {
  selectedAgent.value = null;
  showModal.value = true;
};

const handleSaved = () => {
  selectedAgent.value = null;
  showModal.value = false;
  fetchAgents();
};

onMounted(() => {
  fetchAgents();
});
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white py-4 shadow-md">
      <h1 class="text-2xl font-bold text-center">Property Agent App</h1>
    </header>

    <div class="p-6 space-y-6 max-w-4xl mx-auto">
      <div class="flex justify-end">
        <button @click="handleAdd" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Add Agent
        </button>
      </div>
      <AgentsTable :agents="agents" @edit="handleEdit" @delete="handleDelete" />
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
          <button @click="showModal = false"
            class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;</button>
          <h2 class="text-xl font-bold mb-4 text-gray-700">
            {{ selectedAgent ? "Edit Agent" : "Add Agent" }}
          </h2>
          <AgentForm :agent="selectedAgent" @saved="handleSaved" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Modal fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
