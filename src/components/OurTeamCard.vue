<template>


    <li :class="{ 'ml-0': showTeam, 'mb-10 ml-6': !showTeam } ">
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3  ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
        </span>

        <div class="w-max cursor-pointer ml-6" @click="toggleTeam">
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ date }}</time>
        </div>


        <template v-if="showTeam">
      <div class="py-8 px-4 ml- mx-auto max-w-screen-xl lg:px-6">
        <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <template v-for="member in members" :key="member.id">
            <OurTeamMember :data="member" />
          </template>
        </div>
      </div>
    </template>

    </li>


</template>



<script>
import OurTeamMember from '@/components/reusable/OurTeamMember.vue'

export default {
    name: 'HomeTeamCard',
    components: {
        OurTeamMember
    },
    props: {
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        showTeam: {
            type: Boolean,
            required: false,
            default: false
        },
        members: {
            type: Array,
            required: false,
            default: () => []
        }
    }
}
</script>