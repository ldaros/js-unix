import { Kernel } from "@/kernel";
import { _File } from "@/kernel/filesys/types";
import { IO, out } from "@/kernel/io";
import { absolutize } from "@/kernel/utils/absolutize";

export const cat = (io: IO, kernel: Kernel): IO => {
  const { stream } = io;
  const { fs } = kernel;
  const wd = fs.currentDirectory;

  if (!stream) return out("cat: missing operand");

  const path = absolutize(stream, wd, fs);
  const node = fs.findNode(path);

  if (!node) return out("cat: file not found");
  if (!(node instanceof _File)) return out("cat: path is not a file");

  return out(node.content ?? "");
};
