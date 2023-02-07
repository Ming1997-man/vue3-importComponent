/* import { createApp } from "vue";
import App from "./App.vue";
const modulesFiles = require.context('@/components', false, /\.vue$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/')[0]
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    const app =createApp(App)
    app.component(moduleName, value.default)
    return modules
}, {});

export default modules */

export default function importComponent(app) {
  const modulesFiles = require.context("@/components", false, /\.vue$/);
  modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath
      .replace(/^\.\/(.*)\.\w+$/, "$1")
      .split("/")[0];
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    app.component(moduleName, value.default);
  }, {});
}
