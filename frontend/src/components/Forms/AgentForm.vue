<script setup lang="ts">
import { ref, watch } from "vue";
import type { Agent } from "../../types/agent";
import { createAgent, updateAgent } from "../../api/agentApi";

const props = defineProps<{
  agent: Agent | null;
}>();

const emit = defineEmits<{
  (e: "saved"): void;
}>();

// Form state
const agentForm = ref<Agent>({
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
});

watch(
  () => props.agent,
  (newAgent) => {
    if (newAgent) agentForm.value = { ...newAgent };
  },
  { immediate: true }
);

const handleSubmit = async () => {
  try {
    if (agentForm.value.id) {
      await updateAgent(agentForm.value.id, agentForm.value);
      alert("Agent updated successfully!");
    } else {
      await createAgent(agentForm.value);
      alert("Agent created successfully!");
    }
    resetForm();
    emit("saved");
  } catch (err) {
    console.error(err);
    alert("Submit failed.");
  }
};

const resetForm = () => {
  agentForm.value = { firstName: "", lastName: "", email: "", mobileNumber: "" };
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <input v-model="agentForm.firstName" type="text" placeholder="First Name" required
      class="w-full border px-4 py-3 rounded" />

    <input v-model="agentForm.lastName" type="text" placeholder="Last Name" required
      class="w-full border px-4 py-3 rounded" />

    <input v-model="agentForm.email" type="email" placeholder="Email Address" required
      class="w-full border px-4 py-3 rounded" />

    <input v-model="agentForm.mobileNumber" type="text" placeholder="Mobile Number" required
      class="w-full border px-4 py-3 rounded" />

    <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
      {{ agentForm.id ? "Save Changes" : "Add Agent" }}
    </button>
  </form>
</template>
