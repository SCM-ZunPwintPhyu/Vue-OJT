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
          :rules="titleRules"
          required
        ></v-text-field>
        <v-textarea
          clearable
          clear-icon="mdi-close-circle"
          label="Description"
          value=""
          :rules="descriptionRules"
          v-model="description"
        >
        </v-textarea>
        <v-checkbox v-model="status" label="status"></v-checkbox>
        <v-btn color="info" class="mr-4"> <a href="/post/list" class="route-link links">{{cancel}}</a> </v-btn>
        <v-btn class="mr-4" @click="postUpdate()" color="success">
          {{confirm}}
        </v-btn>
        <v-btn @click="clearData()" color="secondary"> {{clear}} </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/post-update.js"></script>
<style scoped src="../../assets/css/pages/post/post-update.css"></style>
