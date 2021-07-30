<template>
  <v-card class="card">
    <v-card-title> {{header}} </v-card-title>
    <v-form ref="form">
      <v-row class="filter-bar">
        <v-col md="2.5">
          <v-text-field
            label="Name"
            v-model="name_search"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col md="2.5">
          <v-text-field
            label="Email"
            v-model="email_search"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col md="2.5">
          <v-text-field
            label="Created From"
            v-model="from_search"
            type="date"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col md="2.5">
          <v-text-field
            label="Created To"
            v-model="to_search"
            type="date"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-btn class="post-list-btn mr-4" color="primary" @click="filterUsers()">
          <v-icon left> search </v-icon>
          {{search}}</v-btn
        >
        <v-btn class="post-list-btn mr-4" color="primary" @click="userCreate()">
          <v-icon left> add </v-icon>{{create}}</v-btn
        >
      </v-row>
    </v-form>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.name`]="{ item }">
          <a v-if="item.name" @click="showUser(item)">{{ item.name }}</a>
        </template>
        <template v-slot:[`item.created_user_id`]="{ item }">
          <v-card-text v-if="item.created_user_id">
            {{ userName }}
          </v-card-text>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          <v-card-text v-if="item.created_at">{{
            format(item.created_at)
          }}</v-card-text>
        </template>
        <template v-slot:[`item.updated_at`]="{ item }">
          <v-card-text v-if="item.updated_at">{{
            format(item.updated_at)
          }}</v-card-text>
        </template>
        <template v-slot:[`item.operation`]="{ item }">
          <v-row>
            <div class="operation-btn">
              <v-btn color="primary" class="post-list-btn" @click="update(item)"
                >{{edit}}</v-btn
              >
            </div>
            <div class="operation-btn">
              <v-btn
                color="error"
                class="post-list-btn"
                @click="deleteUser(item)"
                >{{delete1}}</v-btn
              >
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>
<script src="../../services/user/user-list.js"></script>
<style scoped src="../../assets/css/pages/user/user-list.css"></style>
