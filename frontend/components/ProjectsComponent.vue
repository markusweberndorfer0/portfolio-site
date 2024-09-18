<template>
    <h2 class="sticky top-[48px] bg-custom-blue text-center">Projects</h2>
    <div v-if="!!projects" class="h-[calc(100%-theme('fontSize.2xl'))] flex flex-col justify-center">
        <div class="overflow-auto mt-2 mb-2">
            <ProjectCardComponent class="[&:not(:first-child)]:mt-4" v-for="project in projects" :key="project.id"
                :project="project" @open-project-description-modal="openModal($event)" />
        </div>
    </div>
    <ProjectDescriptionModal v-if="!!modalDescription" :description="modalDescription" @close-modal="closeModal()" />
</template>

<script setup lang="ts">
import type { Project } from '~/types/project';

const props = defineProps({
    projects: {
        type: Object as PropType<Project[]>,
        required: false
    }
})

const modalDescription = ref<string | undefined>(undefined);

function openModal(id: number) {
    modalDescription.value = props.projects?.find(proj => proj.id === id)?.description;
}

function closeModal() {
    modalDescription.value = undefined;
}
</script>