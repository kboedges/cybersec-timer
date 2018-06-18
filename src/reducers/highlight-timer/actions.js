export const CHANGE_RED = "CHANGE_RED";
export const CHANGE_GREEN = "CHANGE_GREEN";
export const CHANGE_DEFAULT = "CHANGE_DEFAULT";

export function changeRed() {
  return {
    type: CHANGE_RED
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
