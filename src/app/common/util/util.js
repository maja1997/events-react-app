import { resolve } from "dns";

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}