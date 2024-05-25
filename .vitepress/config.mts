import { defineConfig } from "vitepress";
import { shared } from "./Shared.mts";
import { en } from "./en.mts";
import { tr } from "./tr.mts";

export default defineConfig({
  ...shared,
  locales: {
    root: { label: "English", ...en },
    tr: { label: "Türkçe", ...tr },
  },
});
