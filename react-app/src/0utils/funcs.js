export function ageMinutes(d) {
    console.log(d)
    let today = new Date().getTime()
    let mili = today % new Date(d).getTime()
    return Math.floor(mili/60000)
}