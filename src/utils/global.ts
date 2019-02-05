export function times(n: number, func: (...args: any[]) => any) { // tslint:disable-line no-any
  return Array.from(Array(n)).map((_, i) => func.call(func, i))
}
