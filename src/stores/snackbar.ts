import { ref } from "vue";
import { defineStore } from "pinia";

export const useSnackbarStore = defineStore("snackbare", () => {
  const snackbar = ref({
    show: false,
    text: "",
  });

  const setSnackbar = (value: any) => {
    snackbar.value = value;
  };

  return { snackbar, setSnackbar };
});
