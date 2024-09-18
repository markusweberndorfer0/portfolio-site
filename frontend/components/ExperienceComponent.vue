<template>
    <div class="bg-opacity-5 bg-gray-100 p-2 rounded-xl">
        <h3>{{ primary }}</h3>
        <hr class="mt-1 mb-1" />
        <div>{{ secondary }}</div>
        <div class="uppercase">{{ start?.split(' ')[0].slice(0, 3) }} {{ start?.split(" ")[1] }} &mdash; {{ end }}</div>
        <div v-if="!!technologies" class="pt-2 pb-1 flex gap-2 flex-wrap">
            <ChipComponent v-for="chip in technologies" :key="chip.label" :chip="chip" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    start: String,
    end: String,
    primary: String,
    secondary: String,
    technologies: {
        type: Object as PropType<Technology[]>,
        required: false,
    }
});
</script>

<style scoped lang="scss">
h3 {
    @apply text-lg font-bold;
}
</style>