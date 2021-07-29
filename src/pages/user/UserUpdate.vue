<template>
  <v-card class="card">
    <v-card-title> {{ header }} </v-card-title>
    <v-container>
      <form enctype="multipart/form-data">
        <v-text-field
          v-model="name"
          type="text"
          label="Name"
          :rules="nameRules"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          v-model="email"
          type="text"
          label="Email"
          :rules="emailRules"
          hide-details="auto"
          class="mt-5"
        ></v-text-field>

        <v-select
          :items="items"
          :menu-props="{ top: true, offsetY: true }"
          label="Type"
          class="mt-5"
          v-model="kklkl"
          @change="selectType()"
        ></v-select>

        <v-text-field
          v-model="phone"
          type="text"
          label="Phone"
          :rules="phoneRules"
          hide-details="auto"
          class="mt-5"
        ></v-text-field>
        <v-text-field
          v-model="dob"
          type="date"
          label="Date of Birth"
          :rules="dobRules"
          hide-details="auto"
          class="mt-5"
        ></v-text-field>
        <v-textarea
          v-model="address"
          type="text"
          label="Address"
          :rules="addressRules"
          hide-details="auto"
          class="mt-5"
        ></v-textarea>
        <v-btn class="mr-4 mt-5" @click="changePassword()" color="warning">
          Change Password
        </v-btn>
        <!-- <v-card-text><a href="/change_password" class="change_link" @click="changePassword()">Change Password</a></v-card-text> -->
        <input type="file" @change="onFileChange" class="mt-5" />
        <div>
          <img v-if="url" :src="url" />
        </div>
        <v-btn color="info" class="mr-4 mt-5">
          <a href="/user/list" class="route-link links">{{ cancel }}</a>
        </v-btn>
        <v-btn class="mr-4 mt-5" @click="userUpdate()" color="success">
          {{ confirm }}
        </v-btn>
        <v-btn @click="clearData()" color="secondary" class="mt-5">
          {{ clear }}
        </v-btn>
      </form>
    </v-container>
  </v-card>
</template>
<script src="../../services/user/user-update.js"></script>
<style scoped src="../../assets/css/pages/user/user-update.css"></style>
