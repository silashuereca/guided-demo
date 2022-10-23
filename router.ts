import { resolve } from "path";
import { createCommonJS } from "mlly";
const { __dirname } = createCommonJS(import.meta.url);

export const routes = [
  {
    path: "/",
    name: "marketing-home-page",
    file: resolve(__dirname, "/pages/home.vue"),
  },
  {
    path: "/demo",
    name: "demo-home",
    file: resolve(__dirname, "./pages/demo/home.vue"),
  },
  {
    path: "/demo/create",
    name: "demo-create",
    file: resolve(__dirname, "./pages/demo/create.vue"),
  },
];
