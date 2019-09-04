const MOBILE_BREAKPOINT_PX = 768;

export const isMobile = () => {
    let isMobile = false;
    if (typeof window !== "undefined" && window) {
        if(window.innerWidth <= MOBILE_BREAKPOINT_PX) {
            isMobile =  true;
        }
    }
    return isMobile;
}