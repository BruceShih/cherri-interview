<template>
  <v-app id="cherri-chat">
    <v-navigation-drawer v-model="friendListDrawer" width="384px" app>
      <v-list three-line>
        <v-subheader class="text-subtitle-1">好友列表(3)</v-subheader>
        <v-divider></v-divider>

        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item link>
          <v-list-item-avatar size="62">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6 font-weight-bold">
              保羅
            </v-list-item-title>
            <v-list-item-subtitle>大家好，我是保羅</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link>
          <v-list-item-avatar size="62">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6 font-weight-bold">
              傑克
            </v-list-item-title>
            <v-list-item-subtitle>大家好，我是傑克</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link>
          <v-list-item-avatar size="62">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6 font-weight-bold">
              傑森
            </v-list-item-title>
            <v-list-item-subtitle>大家好，我是傑森</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <!-- <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary" extension-height="64">
      <template v-slot:extension>
        <v-card
          class="d-flex justify-space-between align-center"
          width="100%"
          color="secondary"
          flat
        >
          <div class="secondary primary--text">
            <v-avatar class="mr-3" size="36">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <strong>保羅</strong>
          </div>
          <div class="secondary primary--text">
            <v-btn icon color="primary">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-menu
              v-model="notesMenu"
              :close-on-content-click="false"
              offset-y
              min-width="384px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="primary" v-bind="attrs" v-on="on">
                  <v-icon>mdi-playlist-plus</v-icon>
                </v-btn>
              </template>

              <v-card class="pa-2">
                <v-container>
                  <v-row>
                    <v-col class="py-0">
                      <v-textarea
                        class="rounded-0"
                        outlined
                        name="input-7-4"
                        label="輸入訊息..."
                        hide-details="auto"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn block tile color="primary" dark>新增</v-btn>
                    </v-col>
                  </v-row>
                  <v-divider class="my-2"></v-divider>
                  <v-row>
                    <v-col>
                      <v-card class="mb-2" outlined rounded="0" height="128px">
                        <v-list-item>
                          <v-list-item-content>
                            <div
                              class="d-flex justify-space-between align-center"
                            >
                              <div class="overline mb-1">OVERLINE</div>
                              <v-btn x-small icon color="primary">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </div>
                            <v-list-item-title>備忘訊息1</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                      <v-card outlined rounded="0" height="128px">
                        <v-list-item>
                          <v-list-item-content>
                            <div
                              class="d-flex justify-space-between align-center"
                            >
                              <div class="overline mb-1">OVERLINE</div>
                              <v-btn x-small icon color="primary">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </div>
                            <v-list-item-title>備忘訊息2</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-menu>
          </div>
        </v-card>
      </template>
      <v-app-bar-nav-icon
        @click.stop="friendListDrawer = !friendListDrawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Cherri Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mx-1" small rounded outlined color="secondary">
        中文
      </v-btn>
      <v-btn class="mx-1" small rounded outlined color="secondary">
        English
      </v-btn>
      <v-divider class="mx-4" vertical></v-divider>
      <v-avatar class="mr-3" size="36">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <span>潔西卡</span>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center"></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { friends } from './plugins/firebase';
import { Friend } from './data/friend';

@Component({
  name: 'App',
  firestore: {
    friends: friends
  }
})
export default class App extends Vue {
  friendListDrawer = true;
  notesMenu = false;
  friends: Friend[] = [];
}
</script>

<style lang="scss">
div.v-toolbar__extension {
  background-color: white;
}
</style>
