<template>
  <div>
    <TheTerminal />
  </div>
</template>

<script>
import TheTerminal from "./components/TheTerminal.vue";

export default {
  components: {
    TheTerminal,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/themes.scss";
@font-face {
  font-family: "CascadiaCode";
  src: url("~assets/fonts/CascadiaCode.ttf") format("trueType");
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "CascadiaCode", monospace;
  margin: 0;
  // background-color: black;
  color: #ffffff;
  overflow-x: hidden;
  width: 100vh;
  height: 100vh;
}

@media only screen and (max-width: 1100px) {
  body {
    font-size: 0.85em;
  }
}

@media only screen and (max-width: 900px) {
  body {
    font-size: 0.75em;
  }
}

@media only screen and (max-width: 700px) {
  body {
    font-size: 0.65em;
  }
}

@media only screen and (max-width: 500px) {
  body {
    font-size: 0.55em;
  }
}

@media only screen and (max-width: 400px) {
  body {
    font-size: 0.5em;
  }
}
</style>
