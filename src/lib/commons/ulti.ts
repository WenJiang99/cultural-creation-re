import { IPointType } from "@/interfaces/map";
import { BULLET_HIT_RANGE, BULLET_HIT_X, BULLET_HIT_Y } from "../constant/game";

export function isMobile(): boolean {
    return navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone")
}

export function getDistance(p1: IPointType, p2: IPointType): number {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
}

export function isHited(block: IPointType, role: IPointType) {
    return Math.abs(block.x - role.x) <= BULLET_HIT_X && block.y - role.y >= 10 && Math.abs(block.y - role.y) <= BULLET_HIT_Y
}