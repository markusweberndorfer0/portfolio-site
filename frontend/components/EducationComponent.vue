<template>
    <h2 class="sticky top-[48px] bg-custom-blue text-center mb-0 pb-2">Education</h2>
    <div v-if="!!schools" class="h-[calc(100%-theme('fontSize.2xl')-theme('margin.2'))] flex flex-col justify-start">
        <div class="overflow-auto mb-2">
            <ExperienceComponent class="[&:not(:first-child)]:mt-4" v-for="school in schools" :key="school.id"
                :primary="school.name" :secondary="school.branch" :start="school.start_date" :end="school.end_date" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { School } from '~/types/school';

defineProps({
    schools: {
        type: Object as PropType<School[]>,
        required: false,
    }
})
</script>