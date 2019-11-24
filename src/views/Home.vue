<template>
  <div class="home">
    <vue-headful
      :title="$t('title')" />
    <main id="particles-js">
      <div class="me">
        <a href="/" class="fullname">{{ $t('title') }}</a>
        <h2 class="profession">{{ $t('profession') }}</h2>
      </div>
      <ul class="header-menu">
        <li>
          <a v-scroll-to="'#portfolio'">
            {{ $t('portfolio') }}
            <font-awesome-icon icon="angle-down" />
          </a>
        </li>
        <li>
          <a v-scroll-to="'#contact'">
            {{ $t('cv') }}
            <font-awesome-icon icon="angle-down" />
          </a>
        </li>
        <li>
          <a v-scroll-to="'#contact'">
            {{ $t('contact') }}
            <font-awesome-icon icon="angle-down" />
          </a>
        </li>
      </ul>
    </main>

    <b-container>
      <projects id="portfolio"></projects>
      <contact id="contact"></contact>
    </b-container>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import 'particles.js';
import Contact from '@/components/Contact.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'home',
  components: {
    Projects,
    Contact,
  },
  mounted() {
    window.particlesJS.load('particles-js', 'particles.json');
  },
};
</script>

<style lang="scss">
.home {
  canvas {
    display: block;
    position: absolute;
  }

  main {
    background: #353577;
    height: 100vh;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .me {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 9000;
  }

  .fullname {
    font-family: 'Comfortaa', sans-serif;
    font-weight: 500;
    color: #f4f4f4;
    font-size: 50pt;
    text-align: center;
    text-shadow: 0px 0px 3px #000000;
    outline: none;
  }

  .fullname:hover {
    text-decoration: none;
    color: #d0f922;
  }

  .profession {
    color: #f4f4f4;
    font-family: 'Courier New', Courier, monospace;
    text-transform: uppercase;
    font-size: 36pt;
    margin-top: .4em;
    text-align: center;
    text-shadow: 0px 0px 3px #000000;
  }

  .header-menu {
    z-index: 9000;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-menu li a {
    display: block;
    font-size: 18pt;
    transition: transform .5s;
    position: relative;
    color: #f4f4f4;
    text-decoration: none;
    padding: 26px 40px;
    outline: none;
    text-shadow: 0px 0px 2px #000000;
    cursor: pointer;
  }

  .header-menu li a svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform .5s, opacity .3s;
    opacity: 0;
  }

  .header-menu li:hover a {
    transform: translateY(-10px);
    color: #f4f4f4;
  }
  .header-menu li:hover a svg {
    transform: translate(-50%, 15px);
    opacity: 1;
  }

  @media (max-width: 575.98px) {
    .fullname {
      font-size: 28pt;
    }
    .profession {
      font-size: 22pt;
    }
    .header-menu li a {
      font-size: 16pt;
      padding: 16px 20px;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
  .fullname {
      font-size: 34pt;
    }
    .profession {
      font-size: 26pt;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
  .fullname {
      font-size: 40pt;
    }
    .profession {
      font-size: 30pt;
    }
  }
}
</style>
