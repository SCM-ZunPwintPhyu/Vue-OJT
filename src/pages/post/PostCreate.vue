<template>
  <v-card class="card">
    <v-card-title> {{header}} </v-card-title>
    <v-container>
      <form>
        <v-text-field
          v-model="title"
          clearable
          clear-icon="mdi-close-circle"
          :counter="10"
          label="Title"
          required
          :rules="titleRules"
        ></v-text-field>
        <v-textarea
          v-model="description"
          clearable
          clear-icon="mdi-close-circle"
          label="Description"
          value=""
          :rules="descriptionRules"
        ></v-textarea>
        <v-btn color="info" class="mr-4 mt-5"> <a href="/post/list" class="route-link links">{{cancel}}</a> </v-btn>
        <v-btn class="mr-4 mt-5" color="success" @click="confirmPage">
          {{confirm}}
        </v-btn>
        <v-btn color="secondary" class="mt-5" @click="clearData"> {{clear}} </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/post-create.js"></script>
<style scoped src="../../assets/css/pages/post/post-create.css"></style>
