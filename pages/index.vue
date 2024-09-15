<template>
    <div class="flex items-center ">
        <main class="flex justify-center items-center w-full">
            <div class="grid grid-rows-3 grid-cols-3 h-[800px] aspect-square p-5 gap-2 shadow-blue-500">
                <div class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950">
                    <ProjectsComponent :projects="projects" />
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950">
                    <EducationComponent :schools="schools" />
                </div>
                <div class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950">
                    <WorkExperienceComponent :companies="companies" />
                </div>
                <div
                    class="shadow-md rounded shadow-sky-950 border-2 border-sky-950 text-center flex flex-col justify-center items-center">
                    <div class="text-4xl font-medium">
                        Markus<br />
                        Weberndorfer
                    </div>
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>Technologies</h2>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Company } from '~/types/company';
import { Project } from '~/types/project';
import { School } from '~/types/school';

const { $directus, $readItems } = useNuxtApp()

const companies = ref((await useAsyncData('companies', () => {
    return $directus.request($readItems('companies', {
        fields: ['*', 'technologies.*.*']
    }));
})).data.value?.map(el => new Company(el)))

const schools = ref((await useAsyncData('schools', () => {
    return $directus.request($readItems('schools', {
        fields: ['*']
    }));
})).data.value?.map(el => new School(el)))

const projects = ref((await useAsyncData('projects', () => {
    return $directus.request($readItems('projects', {
        fields: ['*', 'technologies.*.*']
    }));
})).data.value?.map(el => new Project(el)))
</script>

<style lang="scss">
.grid>div {
    @apply p-2;
}

h2 {
    @apply text-xl font-bold;
}

h3 {
    @apply text-lg font-bold;
}
</style>