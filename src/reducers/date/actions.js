export const MINUS_FIFTEEN = "MINUS_FIFTEEN";
export const GENERATE_DATE = "GENERATE_DATE";

export function minusFifteen() {
  return {
    type: MINUS_FIFTEEN
  };
}

export function generateDate() {
  return {
    type: GENERATE_DATE
  };
}
