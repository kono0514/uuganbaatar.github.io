<template>
  <div class="contact py-5">
    <h1 class="text-light">{{ $t('contact') }}</h1>

    <div class="links mt-5">
      <a href="https://github.com/kono0514" target="_blank" class="link text-light">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
        <p class="text-light mt-1">kono0514</p>
      </a>

      <a href="https://facebook.com/000000cc" target="_blank" class="link text-light">
        <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
        <p class="text-light mt-1">Б. Ууганбаатар</p>
      </a>

      <a href="tel:88426209" target="_blank" class="link text-light">
        <font-awesome-icon icon="phone" size="2x" />
        <p class="text-light mt-1">8842-6209</p>
      </a>

      <a href="mailto:uuganbaatarbaynsuren2016@gmail.com" target="_blank" class="link text-light">
        <font-awesome-icon icon="envelope-open" size="2x" />
        <p class="text-light mt-1">uuganbaatarbaynsuren2016@gmail.com</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
};
</script>

<style lang="scss">
.contact {
  .links {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .link {
    text-align: center;
    text-decoration: none!important;
  }
}
</style>
