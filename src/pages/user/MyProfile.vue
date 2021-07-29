<template>
  <v-card class="card">
    <v-card-title>My Profile </v-card-title>
    <v-container>
      <v-row class="mt-5 mb-5" ma-0 pa-0 fill-height>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Name </v-col>
        <v-col md="2.5" xs4>{{userName}}</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Email Address </v-col>
        <v-col md="2.5" xs4>{{ userEmail }}</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Type </v-col>
        <v-col md="2.5" xs4>
            <div v-if="userType != '1'">
               <p>Admin</p>
            </div>
             <div v-else-if="userType == '1'">
               <p>User</p>
            </div>
        </v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Phone </v-col>
        <v-col md="2.5" xs4>{{ userPhone }}</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Date of Birth </v-col>
        <v-col md="2.5" xs4>{{userDOB }}</v-col>
      </v-row>
      <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Address </v-col>
        <v-col md="2.5" xs4>{{ userAddress }}</v-col>
      </v-row>
      <!-- <v-row ma-0 pa-0 fill-height>
        <v-col md="2.5" xs4>Profile</v-col>
        <v-col md="2.5" xs4> {{ user.profile }}</v-col>
      </v-row> -->
    </v-container>
  </v-card>
</template>
<script src="../../services/user/my-profile.js"></script>
<style scoped src="../../assets/css/pages/user/my-profile.css"></style>