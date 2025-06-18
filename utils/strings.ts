export const isEmpty = (str: string | undefined) => {
  return str === undefined || str.trim().length <= 0
}

export const notEmpty = (str: string | undefined) => {
  return str !== undefined && str.trim().length > 0
}