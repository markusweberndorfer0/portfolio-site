<template>
    <h2>Projects</h2>
    <div v-if="!!projects" class="h-[calc(100%-theme('fontSize.lg'))] flex flex-col justify-center">
        <div class="overflow-auto mt-2 mb-2">
            <ProjectCardComponent class="[&:not(:first-child)]:mt-4" v-for="project in projects" :key="project.id"
                :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project';

defineProps({
    projects: {
        type: Object as PropType<Project[]>,
        required: false
    }
})
</script>