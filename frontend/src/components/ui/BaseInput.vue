<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue: string | number | null;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};

const inputClasses = computed(
  () =>
    `w-full border px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-500 ${props.className ?? ""}`
);
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" class="font-medium text-gray-700">{{ label }}</label>
    <input :type="type || 'text'" :placeholder="placeholder" :required="required" :value="modelValue"
      @input="updateValue" :class="inputClasses" />
  </div>
</template>
