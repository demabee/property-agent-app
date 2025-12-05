<script setup lang="ts">
interface Props {
  label: string;
  block?: boolean;
  variant?: "primary" | "secondary";
}

const props = defineProps<Props>();
const emit = defineEmits(["click"]);

const styles = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-black",
};
</script>

<template>
  <button @click="emit('click')" :class="`
      py-3 px-5 font-semibold rounded transition
      ${props.block ? 'w-full' : ''}
      ${styles[props.variant ?? 'primary']}
    `">
    {{ label }}
  </button>
</template>
