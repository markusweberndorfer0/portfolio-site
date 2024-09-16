<template>
    <div class="bg-opacity-5 bg-gray-100 p-2 rounded-xl">
        <div class="flex items-center gap-2">
            <a v-if="!!project.github_link" :href="project.github_link" target="_blank" alt="github url"
                class="hover:opacity-80 transition-all">
                <font-awesome-icon icon="fa-brands fa-github" size="lg" />
            </a>
            <h3>{{ project.name }}</h3>
        </div>
        <hr class="mt-1 mb-1" />
        <div>{{ project.short_description }}</div>
        <div v-if="!!project.technologies" class="pt-2 pb-1 flex gap-2">
            <ChipComponent v-for="chip in project.technologies" :key="chip.label" :chip="chip" />
        </div>
        <template v-if="!!project.description">
            <hr class="mt-1 mb-1" />
            <button class="rounded shadow bg-cyan-900 p-1 mt-1 hover:bg-opacity-80"
                @click="$emit('openProjectDescriptionModal', project.id)">Project description</button>
        </template>
    </div>

</template>

<script setup lang="ts">
import type { Project } from '~/types/project';

defineProps({
    project: {
        type: Object as PropType<Project>,
        required: true,
    }
});

defineEmits([
    'openProjectDescriptionModal'
])
</script>

<style scoped lang="scss">
h3 {
    @apply text-lg font-bold;
}
</style>