
<template>
  <PublicLayout>
    

    
    <section class="bg-bgPrimary">
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
          <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">Innovate. Inspire. Illuminate</h1>
          <p class="mb-8 text-lg font-light text-secondary lg:text-xl">Embark on a journey through our diverse portfolio of IoT, Hardware, and Software ventures, pioneering solutions for the Digital Age.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
              Get started
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded border border-secondary">
                  Learn more
                </a>  
          </div>
        </div>
      
        <div class="w-full lg:w-1/3 py-4 lg:py-20">
          <img class="w-full h-full" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/starting-a-business-proyect-animate.svg" alt="Project" />
        </div>
      </div>
    </section>
    





    <section class="lg:p-10 p-4 mb-5 lg:my-10">


      <div class="mx-auto max-w-screen-xl text-left w-full py-4">
        <h1 class="mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
           Welcome to our Showcase of Innovation! 
        </h1>

        <p class="text-lg font-light text-gray-500 lg:text-xl dark:text-gray-400">
          We proudly present a curated collection of projects crafted by our talented fellows during their exploration, experimentation, and continuous learning journey. Dive into a diverse array of endeavors that reflect the spirit of creativity, curiosity, and the relentless pursuit of knowledge.
        </p>
      </div>



      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        <div class="w-full flex items-center justify-center py-4 md:py-8 flex-wrap">

          <template v-for="tag in tags" :key="tag">
            <button
              type="button"
              class="border border-primary rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
              :class="selectedTags === tag ? 'text-white bg-primary' : 'text-primary bg-white hover:bg-primary hover:text-white'"
              @click="selectTag(tag)"
            >
              {{ tag }}
            </button>
          </template>

        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">

          <template v-for="project in filteredProjects" :key="project.id">
            <ProjectCard
              :data="project"
              :showReadMore="true"
            />
          </template>

        </div>

        </div>


    </section>


    
  </PublicLayout>
</template>
  
  
<script>
    import ProjectCard from "@/components/ProjectCard.vue";
    import PublicLayout from "@/layouts/PublicLayout.vue";

    import { getProjects } from "@/API/index.js";
  
    export default {
      name: 'ProjectView',
      components: {
        PublicLayout,
        ProjectCard,
      },

      data() {
        return {
          projects: [],
          tags: [],
          selectedTags: "All Categories"
        }
      },

      async mounted() {
        await this.getProjects();
      },

      computed: {
        filteredProjects() {
          return this.updateProjects();
        }
      },

      methods: {

        async getProjects() {
          let response = await getProjects();
          this.projects = response.projects.reverse();
          this.tags = ["All Categories", ...response.tags];
        },

        selectTag(tag) {
          if (tag === "All Categories") {
            this.selectedTags = "All Categories";
          } else {

            if (this.selectedTags === "All Categories") {
              this.selectedTags = [];
            }

            if (this.selectedTags === tag) {
              this.selectedTags = "All Categories";
            } else {
              this.selectedTags = tag;
            }

          }
        },

        updateProjects() {
          if (this.selectedTags === "All Categories") {
            return this.projects;
          } else {
            return this.projects.filter(project => {
              return project.tags.some(tag => this.selectedTags.includes(tag));
            });
          }
        }

      }

    }
</script>
