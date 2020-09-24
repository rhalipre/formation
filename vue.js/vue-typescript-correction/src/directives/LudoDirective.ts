import { DirectiveBinding } from "vue/types/options";

export default {
  inserted(el: HTMLElement, binding: DirectiveBinding) {

    if(!binding.value) {
      return
    }
    let strToAdd = "";

    if (binding.arg === "love") {
      strToAdd = "❤️";
    }
    if (binding.arg === "hate") {
      strToAdd = "☠️";
    }

    if (binding.modifiers.really) {
      el.innerText = `${strToAdd}${strToAdd}${strToAdd} ${el.innerText}`;
    } else {
      el.innerText = `${strToAdd} ${el.innerText}`;
    }
  }
};
