<template>
    <div>
        <header class="sticky top-0 h-auto flex justify-between p-2 items-center">
            <a class="text-2xl font-bold" href=".">
                Weberndorfer.eu
            </a>
            <div>
                <font-awesome :icon="faAddressBook" />
                <font-awesome :icon="faGithub" />
            </div>
        </header>

        <main class="flex justify-center items-center">
            <div class="grid grid-rows-3 grid-cols-3 h-[800px] aspect-square p-10 gap-2 shadow-blue-500">
                <div class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>Projects</h2>
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>Companies</h2>
                </div>
                <div class="shadow-md row-span-3 rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>School</h2>
                </div>
                <div
                    class="shadow-md rounded shadow-sky-950 border-2 border-sky-950 text-center flex flex-col justify-center items-center">
                    <div class="text-3xl font-medium">
                        Markus<br />
                        Weberndorfer
                    </div>
                    <div class="text-lg">
                        17 y/o
                    </div>
                </div>
                <div class="shadow-md rounded shadow-sky-950 border-2 border-sky-950">
                    <h2>Technologies</h2>
                </div>
            </div>
        </main>

        <footer></footer>
    </div>
</template>

<script lang="ts">

import { faCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

</script>

<style lang="scss">
.grid>div {
    @apply p-2;
}

h2 {
    @apply text-xl font-bold;
}
</style>