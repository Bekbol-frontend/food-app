export type CLSX_MODS = Record<string, string>;

export function clsx(classNames: string[] = [], mods: CLSX_MODS = {}) {
  return [
    ...classNames,
    ...Object.entries(mods)
      .filter(([_, val]) => Boolean(val))
      .map(([key]) => key),
  ]
    .join(" ")
    .trim();
}
