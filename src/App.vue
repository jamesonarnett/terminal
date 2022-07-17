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
@font-face {
  font-family: "CascadiaCode";
  src: url("~assets/fonts/CascadiaCode.ttf") format("trueType");
}

body {
  font-family: "CascadiaCode", monospace;
  margin: 0;
  padding: 15px 20px;
  min-height: 99%;
  width: 100%;
  min-width: 550px;
  color: #795199;
  background: #211d1b;
  overflow-x: hidden;
  width: 100vh;
  height: 100vh;
}

.text-color1 {
  color: #795199;
}

.text-color2 {
  color: #b89076;
}

.text-colorHelp {
}

.text-colorWhite {
  color: rgb(221, 219, 219);
}
</style>
