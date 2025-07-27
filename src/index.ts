import pulumi from "@pulumi/pulumi";
import { boot } from "./boot.js";
import { load } from "./config.js";
import { createStack } from "./stack.js";

export default async () => {
  const config = await load();
  const stackName = pulumi.getStack();

  if (stackName.startsWith("boot")) {
    await boot({ config });
    return;
  }

  await createStack(config);
};
