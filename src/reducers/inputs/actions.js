export const CHECK_INPUTS = "CHECK_INPUTS";

export function checkInputs(passId) {
  return {
    type: CHECK_INPUTS,
    passId
  };
}
