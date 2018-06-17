export const STORE_TIME = "STORE_TIME";

export function storeTime(time) {
  return {
    type: STORE_TIME,
    time
  };
}
