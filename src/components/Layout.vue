<template>
  <v-app>
    <v-card color="lighten-4" flat height="200px" tile>
      <v-toolbar dark color="primary" tile>
        <v-container>
          <v-row>
            <v-toolbar-title class="title">
              <span>{{ title }}</span>
            </v-toolbar-title>
            <div class="route-links">
              <v-list-item>
                <v-list-item-title color="info" class="mr-3"> <a href="/my_profile" class="route-link links">User</a> </v-list-item-title>
              </v-list-item>
            </div>

            <div v-if="userType != '1'">
             <div class="route-links">
              <v-list-item>
                <v-list-item-title color="info" class="mr-3"> <a href="/user/list" class="route-link links">{{users}}</a> </v-list-item-title>
              </v-list-item>
            </div>
            </div>

            <div class="route-links">
              <v-list-item>
                <v-list-item-title color="info" class="mr-3"> <a href="/post/list" class="route-link links">{{post}}</a> </v-list-item-title>
              </v-list-item>
            </div>
            <v-spacer></v-spacer>
            <div class="route-links">
              <v-menu offset-y v-if="isLoggedIn">
                <template v-slot:activator="{ on }">
                  <v-btn class="ma-2" text v-on="on">
                    {{ userName }}
                    <v-icon>arrow_drop_down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="logout()">
                    <v-list-item-title>Logout</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <router-link
                class="route-link"
                :to="{ name: 'login' }"
                v-if="!isLoggedIn"
                >Login</router-link
              >
            </div>
          </v-row>
        </v-container>
      </v-toolbar>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-card>
  </v-app>
</template>
<script src="../services/components/layout.js">
</script>
<style scoped src="../assets/css/components/layout.css">
</style>
