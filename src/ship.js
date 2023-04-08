const ship = (len) => {
    const length = len;
    let hits = 0;
    let sink = false;
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
    return {hit, isSunk}
}
export {ship}