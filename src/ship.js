const ship = (len) => {
    const length = len;
    let hits = 0;
    let sink = false;
    const getHits = () => hits
    const getSink = () => sink;
    const isSunk = () => {
        if(getHits() == length){
            sink = true;
            console.log("ship has sunk")
        }
    }
    const hit = () => {
        hits++;
        isSunk()
    }
    return {hit, getHits, getSink}
}


export {ship}