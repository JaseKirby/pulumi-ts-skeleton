import { Config } from "./config.js";

export interface BooterProps {
  readonly config: Config;
}

export async function boot(props: BooterProps) {
  const config = props.config;
  console.info(config);
}
