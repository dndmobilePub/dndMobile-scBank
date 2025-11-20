import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const spacingScale = (prefix: string) => ({
  none: "",
  0: `${prefix}-0`,
  1: `${prefix}-1`,
  2: `${prefix}-2`,
  3: `${prefix}-3`,
  4: `${prefix}-4`,
  5: `${prefix}-5`,
  6: `${prefix}-6`,
  8: `${prefix}-8`,
  10: `${prefix}-10`,
});