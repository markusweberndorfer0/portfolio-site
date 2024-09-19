<template>
    <h2 class="sticky top-[48px] bg-custom-blue text-center mb-0 pb-2">Technologies</h2>
    <div v-if="!!technologies" class="h-[calc(100%-theme('fontSize.2xl')-theme('margin.2'))] pb-2">
        <div class="overflow-auto flex flex-wrap h-full">
            <ChipComponent class="m-1" v-for="technology in technologies" :key="technology.id" :chip="technology" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    technologies: {
        type: Object as PropType<Technology[]>,
        required: false
    }
})
</script>