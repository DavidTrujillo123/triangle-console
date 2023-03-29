function seeTriangles(n){
    let aux = n;
    for (let i = 0; i < n; i++) {
        let triangle = '';
        for (let j = aux; j > 0; j--) {
            triangle += ' ';
        }
        for (let j = 0; j < (2*i-1); j++) {
            triangle += '*';
        }
        aux--;
        console.log(triangle);  
    }
}

module.exports = {
    seeTriangles
};