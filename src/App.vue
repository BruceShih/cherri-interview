<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <!-- <template v-slot:default>
        <v-icon>mdi-account-multiple</v-icon>
      </template> -->
      <v-app-bar-nav-icon class="ml-1" @click="friendListDrawer = true">
        <v-icon>mdi-account-multiple</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Cherri Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mx-1" small rounded outlined color="secondary">中文</v-btn>
      <v-btn class="mx-1" small rounded outlined color="secondary">
        English
      </v-btn>
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="friendListDrawer"
      absolute
      temporary
      color="secondary"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- <HelloWorld /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Friend } from './data/friend';

@Component({
  name: 'App'
})
export default class App extends Vue {
  friendListDrawer = false;
  friends: Friend[] = [];
}
</script>
