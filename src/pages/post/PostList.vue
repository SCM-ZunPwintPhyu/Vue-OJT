<template>
  <v-card class="card">
    <v-card-title>
     {{post_list}}
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              label="Search Title"
              hide-details="auto"
              prepend-icon="mdi-magnify"
              v-model="title"
            ></v-text-field>
          </v-col>

           <v-col md="2.5">
            <v-text-field
              label="Search Description"
              hide-details="auto"
              prepend-icon="mdi-magnify"
              v-model="description"
            ></v-text-field>
          </v-col>

           <v-col md="2.5">
            <v-text-field
              label="Search Posted User"
              hide-details="auto"
              prepend-icon="mdi-magnify"
              v-model="created_user_id"
            ></v-text-field>
          </v-col>

          <v-btn class="post-list-btn mr-4" color="primary" @click="filterPosts()"
            ><v-icon left> search </v-icon>{{search}}</v-btn>


          <v-btn
            class="post-list-btn mr-4"
            color="warning"
            @click="excelUploadPage()"
          ><v-icon dark>mdi-cloud-upload</v-icon> 
          {{upload}}
          </v-btn>
          
          <v-btn
            class="post-list-btn mr-4"
            color="success"
            @click="excelDownload()"
          ><v-icon dark>mdi-cloud-download</v-icon> 
          {{download}}
          </v-btn>
          <v-btn
            class="post-list-btn mr-4"
            color="info"
            @click="postCreate()"
          >
            <v-icon left> add </v-icon>{{create}}</v-btn
          >
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">  
        <template v-slot:[`item.title`]="{ item }">
              <div>
                <v-dialog
                  v-model="dialog"
                  width="700"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <a v-if="item.title" v-bind="attrs"  v-on="on">{{ item.title }}</a>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      Post Details
                    </v-card-title>

                    <v-card-text>
                        <p>ID : {{ item.id }}</p>
                        <p>Title : {{ item.title }}</p>
                        <p>Description : {{ item.description }}</p>
                        <p>Status : {{ item.status }}</p>
                        <p>Created User : {{ item.created_user_id }}</p>
                        <p>Updated User : {{ item.updateded_user_id }}</p>
                        <p>Created Time : {{ item.created_at }}</p>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                      >
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </template>
       
        <template v-slot:[`item.operation`]="{ item }">
          <v-row>
            <div class="operation-btn">
              <v-btn
                color="primary"
                class="post-list-btn"
                @click="update(item)"
              >
               {{edit}}</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn
                color="error"
                class="post-list-btn"
                @click="deletePost(item)"
              >
              {{delete1}} </v-btn>
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/post-list.js"></script>
<style scoped src="../../assets/css/pages/post/post-list.css"></style>

