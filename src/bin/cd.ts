import { Kernel } from "@/kernel";
import { IO, err, out } from "@/kernel/io";
import { absolutize } from "@/kernel/utils/absolutize";

export const cd = (io: IO, kernel: Kernel): IO => {
  const { stream } = io;
  const { fs } = kernel;
  const wd = fs.currentDirectory;

  if (!stream) return err("cd: missing operand");
  const path = absolutize(stream, wd, fs);

  try {
    fs.setCurrentDirectory(path);
  } catch (e) {
    const error = e as Error;
    return err(error.message);
  }

  return out("");
};
