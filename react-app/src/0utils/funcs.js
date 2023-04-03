export function ageMinutes(d) {
    let today = new Date().getTime()
    let mili = today % new Date(d).getTime()
    return Math.floor(mili/60000)
}

export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}