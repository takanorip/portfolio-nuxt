<template>
  <v-app>
    <v-toolbar fixed light height="56px">
      <v-toolbar-title class="text-primary"><router-link to="/" v-text="title"></router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
          flat
          href="#"
          color="primary"
          ><span v-text="item.title"></span></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <nuxt />
      </v-content>
    </main>
    <v-footer>
      <span>&copy; 2017 TAKANORI OKI</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'About', to: '/about' },
          { title: 'Works', to: '/works' }
        ],
        fixed: true,
        title: 'TAKANORI OKI'
      }
    }
  }
</script>
