export class CommonUtil {

  private static screenWidthThresold = 480
  private static ratio = 200/CommonUtil.screenWidthThresold;

  public static getHeaderMaximumHeight(): number {
    if(screen.width >= CommonUtil.screenWidthThresold) {
      return CommonUtil.screenWidthThresold*CommonUtil.ratio;
    } else {
        return screen.width*CommonUtil.ratio;
    }
  }

  public static getScrollPosition() : number {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}
