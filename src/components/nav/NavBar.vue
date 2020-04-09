<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">Vue Starter</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="item in items"
            :key="item.name"
            :href="'#' + item.url"
            ><i :class="item.icon"></i> {{ item.name }}</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#/logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import navItems from "../../_nav";
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      items: [
        {
          name: "Home",
          url: "/home",
          icon: "icon-chart"
        }
      ]
    };
  },
  created() {
    this.items = navItems.items;
  },
  computed: {},
  methods: {}
};
</script>
