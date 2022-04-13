<template>
  <div id="header">
    <img
      id="logo"
      alt="Schig logo"
      src="https://www.schig.com/typo3conf/ext/sitesettings/Resources/Public/Images/Logos/Schig_Logo.svg"
    />
    <span id="main-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/subsidies">Zuschussverträge</router-link>
      <router-link to="/facilities">Gewerke</router-link>
    </span>
  </div>
  <div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      loadedData: {},
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {},
  },
};
</script>

<style>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#header {
  margin: 0px;
  background: #6f90a7;
  color: #b20e10;
}

#main-menu {
  vertical-align: top;
  height: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center;
}

#main-menu > a {
  margin: 0px 20px 0px 20px;
}

#logo {
  background: #ffffff;
  width: 100px;
  height: auto;
  padding: 20px 50px 20px 20px;
}
</style>
