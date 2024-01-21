import { Kernel } from "@/kernel";
import { IO, out } from "@/kernel/io";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const help = (_io: IO, _kernel: Kernel): IO => {
  return out(`js-bash, version 0.0.1\n` + `Type ls /bin to see available commands.`);
};
