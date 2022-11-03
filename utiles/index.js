export const getCssVariable = variable => {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .toUpperCase()
    .trim()
}
