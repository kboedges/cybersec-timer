export const FLASH_RED = "FLASH_RED";
export const CHANGE_GREEN = "CHANGE_GREEN";
export const CHANGE_DEFAULT = "CHANGE_DEFAULT";

export function flashRed() {
  return {
    type: FLASH_RED
  };
}

export function changeGreen() {
  return {
    type: CHANGE_GREEN
  };
}

export function changeDefault() {
  return {
    type: CHANGE_DEFAULT
  };
}
