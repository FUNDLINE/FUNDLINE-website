export class ScrollUtil {
  public static getScrollPosition() : number {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}
