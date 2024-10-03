<template>
    <div class="flex items-center overflow-none">
        <main class="flex justify-center items-center w-full">
            <div
                class="grid md:grid-rows-3 md:grid-cols-3 md:h-[800px] md:aspect-square p-5 gap-2 shadow-blue-500 max-md:w-[350px] grid-animation">
                <div
                    class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950 max-md:order-3 projects-animation">
                    <ProjectsComponent :projects="projects" />
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950 max-md:order-2">
                    <EducationComponent :schools="schools" />
                </div>
                <div
                    class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950 max-md:-order-1 work-animation">
                    <WorkExperienceComponent :companies="companies" />
                </div>
                <div
                    class="shadow-md rounded shadow-sky-950 border-2 border-sky-950 text-center flex flex-col justify-center items-center max-md:-order-2 name-animation bg-custom-blue z-20">
                    <div class="text-3xl font-bold">
                        Markus<br />
                        Weberndorfer
                    </div>
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950 max-md:order-1">
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

const { $directus, $readItems } = useNuxtApp();

const companies = ref((await useAsyncData('companies', () => {
    return $directus.request($readItems('companies', {
        fields: ['*', { technologies: ['*.*'] }]
    }));
})).data.value?.map(el => new Company(el)));

companies.value?.sort((company1, company2) => Number(company1.order) - Number(company2.order));

const schools = ref((await useAsyncData('schools', () => {
    return $directus.request($readItems('schools', {
        fields: ['*']
    }));
})).data.value?.map(el => new School(el)));

const projects = ref((await useAsyncData('projects', () => {
    return $directus.request($readItems('projects', {
        fields: ['*', { technologies: ['*.*'] }]
    }));
})).data.value?.map(el => new Project(el)));

projects.value?.sort((project1, project2) => Number(project1.order) - Number(project2.order));

const technologies = (await useAsyncData('technologies', () => {
    return $directus.request($readItems('technologies', {
        fields: ['*']
    }));
})).data as Ref<Technology[]>;

useHead({
    title: "Home",
    htmlAttrs: {
        lang: "en"
    }
});
</script>

<style scoped lang="scss">
.grid>div {
    @apply p-2;
}

@keyframes grid {
    0% {
        transform: skewY(80deg);
    }

    100% {
        transform: skewY(0deg);
    }
}

@keyframes projects {
    40% {
        transform: translateY(-200%)
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes work {
    40% {
        transform: translateY(200%)
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes name {
    25% {
        transform: scale(4);
    }

    100% {
        transform: scale(1);
    }
}

@media (min-width: theme("screens.md")) {
    .projects-animation {
        animation-name: projects;
        animation-duration: 500ms;
    }

    .work-animation {
        animation-name: work;
        animation-duration: 500ms;
    }

    .name-animation {
        animation-name: name;
        animation-duration: 300ms;
    }

    .grid-animation {
        animation-name: grid;
        animation-duration: 650ms;
    }
}

@media print {
    .name-animation {
        background-color: theme("colors.custom-blue");
        print-color-adjust: exact;
    }
}

@media (prefers-reduced-motion) {
    .projects-animation {
        animation: none;
    }

    .work-animation {
        animation: none;
    }

    .name-animation {
        animation: none;
    }

    .grid-animation {
        animation: none;
    }
}
</style>