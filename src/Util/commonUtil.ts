import { constant } from './constant';

/**
 * Utility class
 */
export class CommonUtil {

  private static ratio : number = constant.maximumAllowedHeaderHeightOnAllDevice/constant.viewportThresold;

  /**
   *
   * @returns maximum height of header section allowed on current screen size
   */
  public static getHeaderMaximumHeight(): number {
    if(screen.width >= constant.viewportThresold) {
      return constant.maximumAllowedHeaderHeightOnAllDevice;
    } else {
        return screen.width*CommonUtil.ratio;
    }
  }


  /**
   *
   * @returns position of scrollbar/ y-offset of widow
   */
  public static getScrollPosition() : number {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}
