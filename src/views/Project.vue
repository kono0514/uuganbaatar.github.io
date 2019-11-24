<template>
  <transition appear name="custom-classes-transition"
      enter-active-class="animated slideInUp faster"
      leave-active-class="animated slideOutDown faster"
      v-on:after-appear="transitionFinished = true">
    <div class="project py-5"
      :style="{background: backgroundGradient}">
      <div class="container mb-5 text-light">
        <div class="close-projectttv text-center mb-4"
          @click="goBack">
          <font-awesome-icon icon="arrow-circle-down" size="3x" />
        </div>

        <div class="box">
          <h1>{{ project.name }}</h1>
          <div class="badges">
            <b-badge
              variant="light"
              class="mr-1"
              v-for="(tag, tagIndex) in project.tags"
              v-bind:key="`${project.identifier}-tag-${tagIndex}`">
              {{ tag }}
            </b-badge>
          </div>

          <div class="lazy-content" v-show="transitionFinished">
            <p class="mt-3" v-html="getTranslatedValue(project.description)"></p>

            <template v-if="project.gallery.length > 0">
              <h3 class="mt-5">Showcase:</h3>

              <portal to="rootGallery">
                <gallery
                  :images="project.gallery"
                  :index="currentIndex"
                  @close="currentIndex = null"></gallery>
              </portal>
              <div
                class="image"
                v-for="(image, imageIndex) in project.gallery"
                :key="imageIndex"
                @click="currentIndex = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
              ></div>
              <div style="clear: both;"></div>
            </template>

            <template v-if="project.links.length > 0">
              <h3 class="mt-5">Links:</h3>

              <ul class="list-unstyled">
                <li
                  v-for="(link, index) in links"
                  v-bind:key="`link-${index}`">
                  <a
                    :href="link.link" target="_blank">{{ link.text }}</a>
                </li>
              </ul>
            </template>

            <div
              v-for="(section, index) in project.sections"
              v-bind:key="`section-${index}`">
              <h3 class="mt-5">{{ section.title }}:</h3>
              <ul class="list-unstyled">
                <li
                  v-for="(item, itemIndex) in section.items"
                  v-bind:key="`section-item-${itemIndex}`"
                  v-html="`- ${getTranslatedValue(item)}`">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueGallery from 'vue-gallery';
import projectData from '@/projectsData';

export default {
  name: 'project',
  props: ['projectIdentifier'],
  components: {
    gallery: VueGallery,
  },
  data() {
    return {
      project: null,
      currentIndex: null,
      transitionFinished: false,
    };
  },
  computed: {
    links() {
      const links = [];

      if (this.project && this.project.links) {
        this.project.links.forEach((link) => {
          const href = typeof link === 'string' ? link : link.link;
          const text = typeof link === 'string' ? link : link.text;

          links.push({
            link: href,
            text,
          });
        });
      }

      return links;
    },
    backgroundGradient() {
      return `linear-gradient(315deg, ${this.project.style.colorPrimary} 0, ${this.project.style.colorSecondary} 100%)`;
    },
  },
  methods: {
    getTranslatedValue(value) {
      if (typeof value === 'string') {
        return value;
      }

      let localeValue = value[this.$i18n.locale];

      if (localeValue) {
        return localeValue;
      }

      localeValue = value.en;

      if (localeValue) {
        return localeValue;
      }

      return value;
    },
    goBack() {
      this.$router.back();
    },
    finished() {
      console.log('ya');
    },
  },
  created() {
    const project = projectData.find(i => i.identifier === this.projectIdentifier);

    if (project) {
      this.project = project;
      document.body.classList.add('scroll-off');
    } else {
      this.$router.push({ name: 'home' });
    }
  },
  destroyed() {
    document.body.classList.remove('scroll-off');
  },
  beforeRouteLeave(to, from, next) {
    if (this.currentIndex !== null) {
      this.currentIndex = null;
      next(false);
    } else {
      next();
    }
  },
};
</script>

<style lang="scss">
.project {
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  overflow-y: auto;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;

  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }

  .box {
    background: rgba(0,0,0,0.5);
    padding: 2em;
    border-radius: 2em;
  }
}
</style>
