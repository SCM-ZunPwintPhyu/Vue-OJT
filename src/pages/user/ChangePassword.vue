<template>
  <v-card class="card">
    <v-card-title> {{header}} </v-card-title>
    <v-container>
      <form>
        <!-- <v-text-field
          v-model="password"
          type="password"
          label="*********    Current Password"
          hide-details="auto"
          class="mt-5"
          disabled
        ></v-text-field> -->
        <v-text-field
          v-model="password"
          type="password"
          label="New Password"
          :rules="new_passwordRules"
          hide-details="auto"
          class="mt-5"
        ></v-text-field>
        <v-text-field
          v-model="confirm_password"
          type="password"
          label="New Confirm Password"
          :rules="confirm_passwordRules"
          hide-details="auto"
          class="mt-5 mb-5"
        ></v-text-field>
        <v-btn color="primary" class="mt-5 mr-4" @click="updatePassword()">
          {{confirm}}
        </v-btn>
        <v-btn color="secondary" class="mt-5"> <a href="/user/list" class="route-link links">{{cancel}}</a> </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/user/change-password.js"></script>
<style scoped src="../../assets/css/pages/user/change-password.css"></style>
