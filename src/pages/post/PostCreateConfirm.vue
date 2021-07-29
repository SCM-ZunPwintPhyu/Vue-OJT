<template>
  <v-card class="card">
    <v-card-title> {{header}} </v-card-title>
    <v-container>
      <form>
        <v-col md="2.5">Title : {{ this.$route.params.title }}</v-col>
        <v-col md="2.5"
          >Description : {{ this.$route.params.description }}</v-col
        >
        <v-btn class="mr-4" @click="store()" color="success"> {{create}} </v-btn>
        <v-btn color="secondary"> <a href="/post/list" class="route-link links">{{cancel}}</a> </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/post-create-confirm.js"></script>
<style scoped src="../../assets/css/pages/post/post-create-confirm.css"></style>
