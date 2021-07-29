<template>
  <v-card class="card">
    <v-card-title>{{ user.name }}'s Profile </v-card-title>
    <v-container>
      <v-row class="mt-5 mb-5" ma-0 pa-0 fill-height>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Name </v-col>
        <v-col md="2.5" xs4> {{ user.name }}</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Email Address </v-col>
        <v-col md="2.5" xs4>{{ user.email }}</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Type </v-col>
        <v-col md="2.5" xs4>Admin</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Phone </v-col>
        <v-col md="2.5" xs4>{{ user.phone }}</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Date of Birth </v-col>
        <v-col md="2.5" xs4>{{ user.dob }}</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Address </v-col>
        <v-col md="2.5" xs4>{{ user.address }}</v-col>
      </v-row>
      <!-- <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Profile</v-col>
        <v-col md="2.5" xs4> {{ user.profile }}</v-col>
      </v-row> -->
    </v-container>
  </v-card>
</template>
<script src="../../services/user/userprofile.js"></script>
<style scoped src="../../assets/css/pages/user/userprofile.css"></style>