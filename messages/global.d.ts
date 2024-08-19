import en from "./en.json";

// Define the type manually
type Message = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Message {}
}
