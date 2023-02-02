export default function toHHMMSS(s: string) {
    let sec_num = parseInt(s, 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;

    let hh;
    let hm;
    let hs;

    if (hours < 10) {
        hh = '0' + hours;
    }
    if (minutes < 10) {
        hm = '0' + minutes;
    }
    if (seconds < 10) {
        hs = '0' + seconds;
    }
    return hh + ':' + hm + ':' + hs;
}
