<template>
    <div class="flex items-center overflow-none">
        <main class="flex justify-center items-center w-full">
            <div
                class="grid md:grid-rows-3 md:grid-cols-3 md:h-[800px] md:aspect-square p-5 gap-2 shadow-blue-500 max-md:w-[350px]">
                <div class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950">
                    <WorkExperienceComponent :companies="companies" />
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950">
                    <EducationComponent :schools="schools" />
                </div>
                <div class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950">
                    <ProjectsComponent :projects="projects" />
                </div>
                <div
                    class="shadow-md rounded shadow-sky-950 border-2 border-sky-950 text-center flex flex-col justify-center items-center max-md:-order-2">
                    <div class="text-3xl font-bold">
                        Markus<br />
                        Weberndorfer
                    </div>
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950 max-md:-order-1">
                    <TechnologiesComponent :technologies="technologies" />
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
        fields: ['*', { technologies: ['*.*'] }]
    }));
})).data.value?.map(el => new Company(el)))

const schools = ref((await useAsyncData('schools', () => {
    return $directus.request($readItems('schools', {
        fields: ['*']
    }));
})).data.value?.map(el => new School(el)))

const projects = ref((await useAsyncData('projects', () => {
    return $directus.request($readItems('projects', {
        fields: ['*', { technologies: ['*.*'] }]
    }));
})).data.value?.map(el => new Project(el)))

const technologies = (await useAsyncData('technologies', () => {
    return $directus.request($readItems('technologies', {
        fields: ['*']
    }));
})).data as Ref<Technology[]>

useHead({
    title: ""
})
</script>

<style scoped lang="scss">
.grid>div {
    @apply p-2;
}
</style>