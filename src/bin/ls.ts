import { Kernel } from "@/kernel";
import { _File } from "@/kernel/filesys/types";
import { IO, err, out } from "@/kernel/io";
import { absolutize } from "@/kernel/utils/absolutize";

export const ls = (io: IO, kernel: Kernel): IO => {
  const { stream } = io;
  const { fs } = kernel;

  let wd = fs.currentDirectory;
  const path = absolutize(stream, wd, fs);

  console.log(path);

  if (path) {
    const node = fs.findNode(path);

    if (!node) {
      return err(`ls: cannot access '${path}': No such file or directory`);
    }

    if (node instanceof _File) {
      return err(`ls: cannot access '${path}': Not a directory`);
    }

    wd = node;
  }

  const children = wd.children.map((child) => child.name);
  return out(children.join("\n"));
};
