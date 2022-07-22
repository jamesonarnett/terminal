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
  color: #ffffff;
  background: #000000; //#211d1b;
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
  color: #795199;
  text-shadow: 0 0 3px #795199;
}

.text-colorWhite {
  color: rgb(209, 209, 209);
}

.text-colorGrey {
  color: #707070;
}

.text-colorYellow {
  color: #e8f53b;
}

.text-colorGreen {
  color: #519975;
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
