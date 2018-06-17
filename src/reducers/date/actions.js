export const MINUS_FIFTEEN = "MINUS_FIFTEEN";
export const GENERATE_DATE = "GENERATE_DATE";
export const STOP_TIMER = "STOP_TIMER";

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

export function stopTimer() {
  return {
    type: STOP_TIMER
  };
}
