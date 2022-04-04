<template>
  <v-app>
    <v-main>
      <Content />
    </v-main>
  </v-app>
</template>

<script>
import Content from "./components/Content/Content.vue";

export default {
  name: "App",

  components: {
    Content,
  },

  data: () => ({
    //
  }),
};
</script>
