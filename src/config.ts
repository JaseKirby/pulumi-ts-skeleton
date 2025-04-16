import { getRequiredEnv } from "./tools/env.js";

export interface Config {
  readonly env: string;
}

export async function load(): Promise<Config> {
  const env = getRequiredEnv("ENV");
  const config: Config = (await import(`./config/${env}.js`)).default;
  return config;
}
