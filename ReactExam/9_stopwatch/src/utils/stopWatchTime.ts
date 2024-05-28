import { SECOND_PER_HOUR, SECOND_PER_MINUTE } from "../constants";

export function stopWatchTime(seconds : number) {
    const h = Math.floor(seconds / SECOND_PER_HOUR); 
    const m = Math.floor(seconds % SECOND_PER_HOUR / SECOND_PER_MINUTE);
    const s = seconds - h * SECOND_PER_HOUR - m * SECOND_PER_MINUTE;

    return `${String(h).padStart(2, "0")} : ${String(m).padStart(2, "0")} : ${s.toFixed(2).padStart(5, "0")}`

    //2자리보다 작으면 0으로 채워주겠다.
    //tofixed : 소수점 2자리로 고정.
}