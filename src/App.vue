<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { abbreviateNumber } from 'js-abbreviation-number';

const foundersCount = abbreviateNumber(28_102, 0)
const founders = [
  {
    pfp: '/founder-1.png',
    alt: 'founder-1'
  },
  {
    pfp: '/founder-2.png',
    alt: 'founder-2'
  },
  {
    pfp: '/founder-3.png',
    alt: 'founder-3'
  },
]

const integrationBrands = [
  {
    name: "Figma",
    logo: "/integration-brand-1.png"
  },
  {
    name: "Figma",
    logo: "/integration-brand-2.png"
  },
  {
    name: "Figma",
    logo: "/integration-brand-3.png"
  },
  {
    name: "Figma",
    logo: "/integration-brand-4.png"
  },
  {
    name: "Figma",
    logo: "/integration-brand-5.png"
  },
  {
    name: "Figma",
    logo: "/integration-brand-6.png"
  },
  {
    name: "Figma",
    logo: "/integration-brand-7.png"
  },
  {
    name: "Figma",
    logo: "/integration-brand-8.png"
  },
]
</script>

<template>
  <main class="h-[2000px]">
    <Navbar />

    <section id="hero-section" class="bg-gradient-to-r from-[#E2E4F2] to-[#E1D4ED] pt-40 pb-16 px-10 w-full">
      <div class="max-width-wrapper max-w-7xl mx-auto">
        <div class="hero grid grid-cols-2 gap-20">
          <div class="hero-left flex flex-col gap-8">

            <div class="hero-title font-extrabold text-5xl max-w-lg leading-tight">
              Explore Business Insights Analytics
            </div>

            <div class="hero-description">
              <p class="text-gray-500 leading-8">Make a better decision based on what your customer needs
                without compromising your business value propositions.</p>
            </div>

            <div class="founders-count flex gap-4 items-center">
              <div class="founders-count__overview-photos flex -space-x-2">
                <img v-for="founder in founders"
                  class="founder-photo w-10 h-10 object-cover rounded-full border-2 border-white" :src="founder.pfp"
                  :alt="founder.alt" />
              </div>
              <div class="founders-count__number font-semibold text-gray-600">
                {{ `Join ${foundersCount} global founders` }}
              </div>
            </div>

            <div class="cta-wrapper flex gap-4">
              <a class="hero-cta border border-black shadow-[2px_2px_0px_1px_rgba(0,0,0,1)] rounded-xl py-4 px-8 bg-primary text-white font-bold w-max h-max"
                href="#">
                Try Free Trial
              </a>

              <a class="hero-cta--alt border border-black shadow-[2px_2px_0px_1px_rgba(0,0,0,1)] rounded-xl py-4 px-8 bg-white font-bold w-max h-max"
                href="#">
                Call Sales
              </a>
            </div>
          </div>

          <div class="hero-right">
            <img
              class="placeholder border border-black w-full h-[500px] max-w-[500px] rounded-[50px] bg-white shadow-[4px_4px_0px_2px_rgba(0,0,0,1)]" />
          </div>
        </div>
      </div>
    </section>

    <section id="integration-section" class="bg-white py-10 w-full">
      <div class="max-width-wrapper max-w-7xl mx-auto overflow-x-hidden">
        <h1 class="text-5xl font-extrabold text-center">All Integrations Available</h1>

        <div class="integration-brands-wrapper flex gap-4 mt-10">
          <div class="integration-brands flex gap-4 w-full marquee--reverse marquee items-center justify-around py-1"
            v-for="_n in 2">
            <div
              class="integration-brand-item select-none bg-white shadow-[3px_3px_0px_2px_rgba(0,0,0,1)] rounded-xl w-max h-max p-4 flex gap-2 border border-black flex-shrink-0"
              v-for="item in integrationBrands">
              <img :src="item.logo" :alt="item.name" class="integration-brand-item__logo w-12 h-12">

              <div class="integration-brand-item-text flex flex-col">
                <div class="integration-brand-item-text__name font-bold">{{ item.name }}</div>
                <div class="integration-brand-item-text__label text-sm text-gray-500">Design Software</div>
              </div>
            </div>
          </div>
        </div>

        <div class="integration-brands-wrapper flex gap-4 mt-6 py-1">
          <div class="integration-brands flex gap-4 w-full marquee" v-for="_n in 2">
            <div
              class="integration-brand-item select-none bg-white shadow-[3px_3px_0px_2px_rgba(0,0,0,1)] rounded-xl w-max h-max p-4 flex gap-2 border border-black flex-shrink-0"
              v-for="item in integrationBrands">
              <img :src="item.logo" :alt="item.name" class="integration-brand-item__logo w-12 h-12">

              <div class="integration-brand-item-text flex flex-col">
                <div class="integration-brand-item-text__name font-bold">{{ item.name }}</div>
                <div class="integration-brand-item-text__label text-sm text-gray-500">Design Software</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="ai-powered-section" class="bg-white py-32 w-full">
      <div class="max-width-wrapper max-w-7xl mx-auto">
        <div class="section-content grid grid-cols-2 gap-20 items-center">
          <div class="section-content-left bg-white w-full h-[600px] relative">
            <div
              class="blurred-element-1 bg-[#EDD8EF] blur-2xl w-[300px] h-[300px] rounded-full absolute right-0 top-0 z-[3]">
            </div>
            <div
              class="blurred-element-1 bg-[#DAD8EF] blur-2xl w-[300px] h-[300px] rounded-full absolute left-0 bottom-0 z-[3]">
            </div>

            <div
              class="h-[280px] w-[240px] rounded-[50px] bg-white border border-black shadow-[4px_4px_0px_2px_rgba(0,0,0,1)] z-[9] left-48 top-0 absolute">
            </div>
            <div
              class="h-[280px] w-[240px] rounded-[50px] bg-white border border-black shadow-[4px_4px_0px_2px_rgba(0,0,0,1)] z-[10] right-20 top-32 absolute">
            </div>
            <div
              class="h-[280px] w-[240px] rounded-[50px] bg-white border border-black shadow-[4px_4px_0px_2px_rgba(0,0,0,1)] z-[9] left-48 bottom-0 absolute">
            </div>
            <div
              class="h-[280px] w-[240px] rounded-[50px] bg-white border border-black shadow-[4px_4px_0px_2px_rgba(0,0,0,1)] z-[8] top-32 absolute">
            </div>
          </div>

          <div class="section-content-right flex flex-col gap-10">
            <h1 class="text-5xl font-extrabold">AI-Powered System</h1>

            <p class="text-gray-500">Make a better decision based on what your customer needs
              without compromising your business value propositions.</p>

            <ul class="list flex flex-col gap-6">
              <li class="list__item flex gap-2" v-for="_n in 3">
                <img class="w-14 h-14" src="/list-item.png" alt="list item">
                <div class="list-text flex flex-col gap-1">
                  <div class="font-bold">Digital Marketing</div>
                  <div class="text-gray-500 text-sm">Make a better decision based on what your customer needs without
                    compromising.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="built-for-business-section" class="bg-white py-20 w-full">
      <div class="max-width-wrapper max-w-7xl mx-auto">
        <div class="section-content">
          <div class="section-top-part flex items-center flex-col gap-4">
            <h1 class="section-title text-5xl font-extrabold">
              Built For Business
            </h1>
            <p class="block max-w-lg text-center text-gray-500">Make a better decision based on what your customer needs
              without compromising your business value propositions.</p>
          </div>

          <div class="section-bottom-part mt-10">
            <ul class="list flex justify-around">
              <li class="list__item" v-for="_n in 3">
                <div
                  class="placeholder w-full h-[280px] max-w-[240px] rounded-[50px] bg-white border border-black shadow-[4px_4px_0px_2px_rgba(0,0,0,1)]">
                </div>

                <div class="list__item-details mt-6">
                  <div class="font-bold text-lg">Digital Marketing</div>

                  <ul class="list flex flex-col gap-2 mt-4">
                    <div class="list__item flex items-center gap-2" v-for="_n in 3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
                      </svg>
                      Remarkable charts manage
                    </div>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.marquee {
  animation: slide 60s infinite linear;
}

.marquee--reverse {
  animation-direction: reverse;
  animation-delay: -3s;
}

.integration-brands-wrapper {
  mask-image: linear-gradient(var(--mask-direction, to right),
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0));
}

@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>