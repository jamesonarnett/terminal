<template>
  <div class="terminal" @click="textFocus">
    <div class="text-color1">
      <p v-html="command" v-for="command in commandOutput" :key="command"></p>
    </div>
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
import { saveHistory, executeCmd } from "@/utils/terminalMethods.js";

export default {
  data() {
    return {
      input: "",
      commandOutput: [],
      history: ["<span class='text-color2'>Previous Commands:</span>", "<br>"],
    };
  },
  methods: {
    textFocus() {
      this.$refs.textarea.focus();
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
        window.scrollTo(0, 0);
        this.commandOutput = [];
      } else if (this.cleanInput() === "history") {
        console.log(this.history.join("\n"));
        this.commandOutput.push(this.history.join("\n"));
      } else {
        terminalSwitch(this.cleanInput(), this.commandOutput);
      }
      this.input = "";
    },
  },
  mounted() {
    terminalSwitch("banner", this.commandOutput);
  },
};
</script>

<style scoped lang="scss">
.terminal {
  width: 110vw;
  height: 110vh;
}
textarea {
  left: -1000px;
  position: absolute;
}

p {
  display: block;
  line-height: 1.3em;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.05em;
  animation: typing 1.5s steps(30, end);
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

// CURSOR
.cursor {
  font-size: 12px;
  color: #73abad;
  background-color: #73abad;
  position: relative;
  opacity: 1;
  height: 1.5em;
  width: 10px;
  max-width: 10px;
  transform: translateY(4px);
  overflow: hidden;
  text-indent: -5px;
  display: inline-block;
  text-decoration: blink;
  animation: blinker 1s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}

#jShell {
  line-height: 1.3em;
  margin-top: -2px;
  animation: show 0.5s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

#jShell::before {
  color: #519975;
  content: "visitor@jShell.com:~$";
  margin-right: 8px;
}

#jShell.password::before {
  content: "Password:";
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
