const REM_BASE = 16;

export const pxToRem = (px: number): string => {
  const remValue = px / REM_BASE;
  return `${remValue}rem`;
};
