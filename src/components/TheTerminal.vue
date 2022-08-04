<template>
  <div class="terminal dark-mode" @click="textFocus">
    <transition-group name="type" class="text-color1" tag="div" appear>
      <p
        v-html="command"
        v-for="command in commandOutput"
        :key="commandOutput.indexOf(command)"
      ></p>
    </transition-group>
    <textarea
      id="textarea"
      ref="textarea"
      type="text"
      v-model="input"
      autofocus
      @keyup.enter="onEnter"
    />
    <div ref="jShell" id="jShell">
      {{ input }}<b class="cursor" ref="cursor">█</b>
    </div>
  </div>
</template>

<script>
import { terminalSwitch } from "@/utils/terminalSwitch.js";
import { saveHistory, scrollTojShell } from "@/utils/terminalMethods.js";

export default {
  data() {
    return {
      input: "",
      commandOutput: [],
      history: ["<span class='text-color2'>Previous Commands:</span>", "<br>"],
      theme: "dark",
    };
  },
  methods: {
    textFocus() {
      if (!this.$refs.textarea.activeElement) {
        this.$refs.textarea.focus();
      }
    },
    cleanInput() {
      return String(this.input).toLowerCase().trim();
    },
    saveHistory() {
      saveHistory(this.cleanInput(), this.history);
    },
    onEnter() {
      this.saveHistory();
      if (this.cleanInput() === "clear") {
        this.commandOutput = [];
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      } else if (this.cleanInput() === "history") {
        this.commandOutput.push(this.history.join("\n"));
        scrollTojShell(this.commandOutput);
      } else {
        terminalSwitch(this.cleanInput(), this.commandOutput);
        scrollTojShell(this.commandOutput);
      }
      this.input = "";
    },
  },
  mounted() {
    terminalSwitch("banner", this.commandOutput);
  },
};
</script>

<style lang="scss">
//static styles
@import "../assets/styles/terminal.scss";
</style>
