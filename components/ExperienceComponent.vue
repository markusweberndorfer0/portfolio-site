<template>
    <legend>{{ start }} &mdash; {{ end }}</legend>
    <div class="pl-4">
        <h3>{{ company }}</h3>
        <span>{{ role }}</span>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    start: string;
    end: string;
    company: string;
    role: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
h3 {
    @apply text-lg font-bold;
}
</style>