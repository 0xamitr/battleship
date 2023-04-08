const ship = (len) => {
    const length = len;
    let hits = 0;
    let sink = false;
    let cords = [];
    const getHits = () => hits
    const getSink = () => sink
    const isSunk = () => {
        if(getHits() == length)
            sink = true;
        return sink;
    }
    const hit = () => {
        if(getSink() == true)
            return false
        hits++;
        isSunk()
    }
    return {cords, hit, isSunk}
}
export {ship}