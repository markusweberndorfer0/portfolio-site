<template>
    <h2 class="sticky top-[48px] bg-custom-blue text-center mb-0 pb-2">Work experience</h2>
    <div v-if="!!companies" class="h-[calc(100%-theme('fontSize.2xl')-theme('margin.2'))] flex flex-col justify-center">
        <div class="overflow-auto mb-2">
            <ExperienceComponent class="[&:not(:first-child)]:mt-4" v-for="company in companies" :key="company.id"
                :primary="company.name" :secondary="company.role" :start="company.start_date" :end="company.end_date"
                :technologies="company.technologies" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Company } from '~/types/company';

defineProps({
    companies: {
        type: Object as PropType<Company[]>,
        required: false
    }
})
</script>