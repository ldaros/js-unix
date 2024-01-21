import { Kernel } from "@/kernel";
import { IO, out } from "@/kernel/io";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const echo = (io: IO, _kernel: Kernel): IO => {
  const { stream } = io;

  const hasQuotes = stream?.startsWith('"') && stream.endsWith('"');

  if (hasQuotes) {
    return out(stream.slice(1, -1));
  }

  return out(stream);
};
