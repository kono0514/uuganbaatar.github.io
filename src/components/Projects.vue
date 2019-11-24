<template>
  <div class="projects py-5">
    <h1 class="text-light">{{ $t('portfolio') }}</h1>

    <b-row>
      <b-col
        cols="12" md="6"
        class="mt-4"
        v-for="project in projects" v-bind:key="project.identifier">
        <router-link :to="{ name: 'project', params: { projectIdentifier: project.identifier, }}">
          <figure
            :class="project.style.izmirClass"
            :style="{
              '--primary-color': project.style.colorPrimary,
              '--secondary-color': project.style.colorSecondary
            }">
            <img :src="project.thumbnail" :alt="project.name">
            <figcaption>
              <div class="c4-fade-right project-izmir-title">
                <h2>{{ project.name }}</h2>
              </div>
              <div class="c4-fade-left" style="width: 100%;">
                <b-badge
                  variant="light"
                  class="mr-1"
                  v-for="(tag, tagIndex) in project.tags"
                  v-bind:key="`${project.identifier}-tag-${tagIndex}`">
                  {{ tag }}
                </b-badge>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import projectData from '@/projectsData';
import '@ciar4n/izmir/izmir.min.css';

export default {
  name: 'projects',
  data() {
    return {
      projects: projectData,
    };
  },
};
</script>

<style lang="scss">
.projects {
  .project-izmir-title {
    text-shadow: 0px 0px 4px #000000;
  }
}
</style>
