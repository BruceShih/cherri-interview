<template>
  <v-app id="cherri-chat">
    <v-navigation-drawer v-model="showFriendListDrawer" width="384px" app>
      <v-list three-line>
        <v-subheader class="text-subtitle-1">
          {{ `${$t('app.friendListText')}(${friendList.length})` }}
        </v-subheader>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item
            v-for="friend in friendList"
            :key="friend.id"
            @click="friendClick(friend)"
          >
            <v-list-item-avatar size="62">
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h6 font-weight-bold">
                {{ friend.name }}
              </v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary" extension-height="64">
      <template v-slot:extension v-if="currentFriend != null">
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
            <strong>{{ currentFriend.name }}</strong>
          </div>
          <div class="secondary primary--text">
            <v-btn icon color="primary" @click="searchMode = !searchMode">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-menu
              min-width="384px"
              v-model="showNotesMenu"
              :close-on-content-click="false"
              :close-on-click="false"
              offset-y
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click="onNotesMenuOpen"
                >
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
                        :label="$t('app.messagePlaceholderText')"
                        hide-details="auto"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn block tile color="primary" dark>
                        {{ $t('app.addNoteButtonText') }}
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-divider class="my-2"></v-divider>
                  <v-row>
                    <v-col>
                      <v-card
                        class="mb-2"
                        outlined
                        rounded="0"
                        height="128px"
                        v-for="note in notes"
                        :key="note.id"
                      >
                        <v-list-item>
                          <v-list-item-content>
                            <div
                              class="d-flex justify-space-between align-center"
                            >
                              <div class="overline mb-1">
                                {{ note.createDate.toDate().toLocaleString() }}
                              </div>
                              <v-btn x-small icon color="primary">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </div>
                            <v-list-item-title>
                              {{ note.message }}
                            </v-list-item-title>
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
        @click.stop="showFriendListDrawer = !showFriendListDrawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Cherri Chat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="primary--text mx-1"
        depressed
        small
        rounded
        color="secondary"
        v-if="$i18n.locale == 'zh-TW'"
      >
        中文
      </v-btn>
      <v-btn
        class="mx-1"
        small
        rounded
        color="secondary"
        outlined
        @click="changeLanguage"
        v-else
      >
        中文
      </v-btn>
      <v-btn
        class="primary--text mx-1"
        depressed
        small
        rounded
        color="secondary"
        v-if="$i18n.locale == 'en'"
      >
        English
      </v-btn>
      <v-btn
        class="mx-1"
        small
        rounded
        color="secondary"
        outlined
        @click="changeLanguage"
        v-else
      >
        English
      </v-btn>
      <v-divider class="mx-4" vertical></v-divider>
      <v-avatar class="mr-3" size="36">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <span>潔西卡</span>
    </v-app-bar>

    <v-main>
      <v-card class="d-flex flex-column align-stretch" height="100%">
        <!-- search -->
        <v-text-field
          class="border-bottom rounded-0 mb-1"
          single-line
          hide-details
          solo
          flat
          clearable
          clear-icon="mdi-close-circle"
          height="64px"
          :suffix="
            searchFound
              ? $t('app.searchResultText', { number: searchResultCount })
              : ''
          "
          v-model="searchTerm"
          v-if="searchMode && currentFriend != null"
          @input="searchInputChange"
        >
        </v-text-field>
        <v-card
          class="d-flex flex-column justify-center align-center ma-4"
          flat
          height="100%"
          v-if="currentFriend == null"
        >
          <v-img
            class="white--text"
            contain
            width="auto"
            max-height="192px"
            src="./assets/img_default.png"
          >
          </v-img>
          <v-card-title class="primary--text text-h4">
            {{ $t('app.welcomeMessage') }}
          </v-card-title>
        </v-card>
        <v-card
          class="d-flex flex-column-reverse align-end ma-4"
          flat
          height="100%"
          v-else
        >
          <v-chip
            class="mt-2 pa-4"
            color="primary"
            v-html="highlight(chat.message, searchTerm)"
            v-for="chat in chats"
            :key="chat.id"
          ></v-chip>
          <!-- <v-virtual-scroll :items="items" :item-height="50" height="300">
          <template v-slot="{ item }">
            <v-list-item>
              <v-list-item-avatar>
                <v-avatar :color="item.color" size="56" class="white--text">
                  {{ item.initials }}
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ item.fullName }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn depressed small>
                  View User

                  <v-icon color="orange darken-4" right>
                    mdi-open-in-new
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-virtual-scroll> -->
        </v-card>
        <!-- input -->
        <v-text-field
          class="border-top rounded-0 mt-auto"
          v-model="newMessage"
          :label="$t('app.messagePlaceholderText')"
          single-line
          full-width
          hide-details
          solo
          flat
          append-icon="mdi-send"
          height="64px"
        >
        </v-text-field>
      </v-card>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { db } from './plugins/firebase';
import { Friend } from './data/friend';
import { FriendChat } from './data/friendChat';
import { FriendNote } from './data/friendNote';

@Component({
  name: 'App'
  // firestore: {
  //   friendList: db.collection('friends').orderBy('createDate')
  // }
})
export default class App extends Vue {
  searchMode = false;
  searchTerm = '';
  searchFound = false;
  searchResultCount = 0;
  newMessage = '';
  showFriendListDrawer = true;
  showNotesMenu = false;
  notesMenuBelong: Friend | null = null;
  currentFriend: Friend | null = null;
  friendList: Friend[] = [];
  chats: FriendChat[] = [];
  notes: FriendNote[] = [];

  // event handlers
  friendClick(friend: Friend) {
    this.currentFriend = friend;
    this.loadConversation(friend);
  }

  searchInputChange() {
    if (this.searchTerm == '') {
      this.searchFound = false;
      this.searchResultCount = 0;
    } else {
      const result = this.chats.filter(
        chat => chat.message.indexOf(this.searchTerm) != -1
      );

      if (result.length > 0) {
        this.searchFound = true;
        this.searchResultCount = result.length;
      } else {
        this.searchFound = false;
        this.searchResultCount = 0;
      }
    }
  }

  onNotesMenuOpen() {
    this.notesMenuBelong = this.currentFriend;
    console.log(this.notesMenuBelong);
  }

  changeLanguage() {
    this.$i18n.locale = this.$i18n.locale == 'zh-TW' ? 'en' : 'zh-TW';
  }

  // data fetcher
  async getFriendList() {
    await db
      .collection('friends')
      .get()
      .then(querySnapshot => {
        this.friendList = querySnapshot.docs.map(doc => {
          return doc.data() as Friend;
        });
      });
  }

  async loadConversation(friend: Friend) {
    // get the ref of desired friend
    const friendRef = db.collection('friends').doc(friend.id + '');
    // get chats by friendRef
    // this.$bind('chats', db.collection('friendChats').doc(friendId + ''));
    await db
      .collection('friendChats')
      .where('friend', '==', friendRef)
      .orderBy('createDate', 'desc')
      .get()
      .then(querySnapshot => {
        this.chats = querySnapshot.docs.map(doc => {
          return doc.data() as FriendChat;
        });
      });
    // get notes by friendRef
    await db
      .collection('friendNotes')
      .where('friend', '==', friendRef)
      .orderBy('createDate', 'desc')
      .get()
      .then(querySnapshot => {
        this.notes = querySnapshot.docs.map(doc => {
          return doc.data() as FriendNote;
        });
      });
  }

  private highlight(words: string, query: string) {
    if (query != '') {
      const reg = new RegExp(query, 'ig');
      return words.toString().replace(reg, function(matchedTxt) {
        return "<span class='highlight'>" + matchedTxt + '</span>';
      });
    } else {
      return words;
    }
  }

  mounted() {
    this.getFriendList();
  }
}
</script>

<style lang="scss">
// border edges
.border-top {
  border-top: 1px solid rgba(0, 0, 0, 0.12) !important;
}

.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12) !important;
}

.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
}

.border-left {
  border-left: 1px solid rgba(0, 0, 0, 0.12) !important;
}

.highlight {
  background-color: yellow !important;
  color: black !important;
}

div.v-toolbar__extension {
  background-color: white;
}
</style>
