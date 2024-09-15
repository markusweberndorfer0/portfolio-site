<template>
    <div class="flex items-center ">
        <main class="flex justify-center items-center w-full">
            <div class="grid grid-rows-3 grid-cols-3 h-[800px] aspect-square p-5 gap-2 shadow-blue-500">
                <div class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>Projects</h2>
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>Education</h2>
                    <div>
                        <fieldset>
                            <legend>SEP 2021 - JUN 2026</legend>
                            <h3>HTL Paul-Hahn-Straße</h3>
                            <span>Information technology</span>
                        </fieldset>
                    </div>
                </div>
                <div class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>Work experience</h2>
                    <div class="h-[calc(100%-theme('fontSize.lg'))] flex flex-col justify-center">
                        <ExperienceComponent start="SEP 2024" end="SEP 2024" company="FerRobotics"
                            role="Software engineer" class="mb-10" />
                        <ExperienceComponent start="JUN 2024" end="AUG 2024" company="Cloudflight"
                            role="Software engineer" class="mb-10" />
                        <ExperienceComponent start="JUN 2023" end="AUG 2023" company="FerRobotics"
                            role="Software engineer" class="mb-10" />
                    </div>
                </div>
                <div
                    class="shadow-md rounded shadow-sky-950 border-2 border-sky-950 text-center flex flex-col justify-center items-center">
                    <div class="text-3xl font-medium">
                        Markus<br />
                        Weberndorfer
                    </div>
                    <div class="text-lg">
                        17 years old
                    </div>
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>Technologies</h2>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">

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