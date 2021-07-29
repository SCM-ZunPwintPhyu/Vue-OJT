<template>
  <v-card class="card">
    <v-card-title> {{header}} </v-card-title>
    <v-container>
      <form id="importForm">
        <v-text-field
          type="file"
          label="Choose File"
          class="mt-5"
          name="import_file"
        ></v-text-field>
        <v-btn color="success" class="mt-5" @click="importExcel()">
          {{import_file}}
        </v-btn>&nbsp;
          <v-btn color="secondary" class="mt-5">
            <a href="/post/list" class="route-link links">{{cancel}}</a>
          </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/upload-post.js"></script>
<style scoped src="../../assets/css/pages/post/upload-post.css"></style>
