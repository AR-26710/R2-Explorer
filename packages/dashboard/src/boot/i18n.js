import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import { useMainStore } from "stores/main-store";

export default ({ app, store }) => {
  // Get i18n config from store if available
  const mainStore = useMainStore(store);
  const i18nConfig = mainStore.config?.i18n || {};
  
  // Create I18n instance with options
  const i18n = createI18n({
    locale: i18nConfig.defaultLocale || "en",
    fallbackLocale: "en",
    globalInjection: true,
    messages,
  });

  // Tell app to use the I18n instance
  app.use(i18n);
  
  // Make i18n available globally
  app.config.globalProperties.$i18n = i18n;
};
