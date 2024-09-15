<template>
    <h2>Work experience </h2>
    <div v-if="!!companies" class="h-[calc(100%-theme('fontSize.lg'))] flex flex-col justify-center">
        <div class="overflow-auto mt-2 mb-2">
            <ExperienceComponent class="[&:not(:first-child)]:mt-4" v-for="company in companies" :key="company.id"
                :company="company.name" :role="company.role" :start="company.start_date" :end="company.end_date"
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