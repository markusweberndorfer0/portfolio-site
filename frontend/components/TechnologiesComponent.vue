<template>
    <h2 class="sticky top-[48px] bg-custom-blue text-center">Technologies</h2>
    <div v-if="!!technologies" class="h-[calc(100%-theme('fontSize.2xl'))] ">
        <div class="overflow-auto mt-2 mb-2 flex flex-wrap">
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