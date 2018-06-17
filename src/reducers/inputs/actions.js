export const UPDATE_INPUTS = "UPDATE_INPUTS";

export function updateInputs(passId) {
  return {
    type: UPDATE_INPUTS,
    passId
  };
}
