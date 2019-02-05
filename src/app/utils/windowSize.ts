// tslint:disable
export function reopenAsMobileWindow() {
  console.log('A new window sized for "Portrait" x "Small"')
  const t = (n: number, f: () => void) => setTimeout(f, n * 100) // tslint:disable-line no-any
  t(3, () => window.open(
    location.href,
    'winname',
    'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=377,height=669'))
  // t(5, () => window.close()) you can't close the current window
}
