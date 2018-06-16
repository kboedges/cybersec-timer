export const STORE_PASS = "STORE_PASS";

export function storePass(providedPass) {
  return {
    type: STORE_PASS,
    providedPass
  };
}
