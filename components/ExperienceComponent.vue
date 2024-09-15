<template>
    <div class="bg-opacity-5 bg-gray-100 p-2 rounded-xl">
        <h3 class="pb-1">{{ company }}</h3>
        <hr />
        <div class="pt-1">{{ role }}</div>
        <div class="uppercase">{{ start?.split(' ')[0].slice(0, 3) }} {{ start?.split(" ")[1] }} &mdash; {{ end }}</div>
        <div v-if="!!technologies" class="pt-2 pb-1 flex gap-2">
            <ChipComponent v-for="chip in technologies" :key="chip.label" :chip="chip" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    start: String,
    end: String,
    company: String,
    role: String,
    technologies: {
        type: Object as PropType<Technology[]>,
        required: false,
    }
});

onMounted(() => {
    console.log(props.technologies)
})
</script>

<style scoped lang="scss">
h3 {
    @apply text-lg font-bold;
}
</style>