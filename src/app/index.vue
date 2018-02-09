<template>
  <v-app>
    <navigation-drawer />

    <toolbar />

    <v-content>
      <v-container fluid>
        <v-layout>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>

    <fab-btn />

    <modals />
  </v-app>
</template>

<script>
import Modals from '@/components/modals';
import Toolbar from '@/components/layout/toolbar';
import NavigationDrawer from '@/components/layout/navigation-drawer';
import FabBtn from '@/components/layout/fab-btn';

export default {
  name: 'app',

  components: {
    Modals,
    Toolbar,
    NavigationDrawer,
    FabBtn,
  },
};
</script>
