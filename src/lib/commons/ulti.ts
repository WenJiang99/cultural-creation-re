export function isMobile():boolean {
    return navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone")
}