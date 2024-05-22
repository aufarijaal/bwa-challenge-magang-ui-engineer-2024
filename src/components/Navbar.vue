<script setup lang="ts">
const navLinks = [
    {
        text: "Features",
        href: "#",
    },
    {
        text: "Pricing",
        href: "#",
    },
    {
        text: "Docs",
        href: "#",
    },
    {
        text: "Showcase",
        href: "#",
    },
]
</script>

<template>
    <nav id="navbar" class="fixed top-0 left-0 w-full z-10 p-6 backdrop-blur-sm flex justify-between items-center">
        <div id="navbar-left">
            <img class="logo-brand h-10" src="/public/logo.svg" />
        </div>

        <div id="navbar-center" class="flex items-center gap-8">
            <a v-for="link in navLinks" class="font-medium" :href="link.href">{{ link.text }}</a>
        </div>

        <div id="navbar-right">
            <button class="">Sign Up</button>
        </div>
    </nav>
</template>
