$(document).ready(function(){

    var weightedAVG = {
        wAavg: 4.10,
        wBavg: 5.00,
        wCavg: 3.90,
        wDavg: 4.75,
        wEavg: 3.20,
        wFavg: 4.00
    };

    var voteCount = {
    wAvotes: 12, 
    wBvotes: 4, 
    wCvotes: 2, 
    wDvotes: 9,
    wEvotes: 9, 
    wFvotes: 18
};

var ranked = [];
for (var avg in weightedAVG) {
    ranked.push([avg, weightedAVG[avg]]);  
}

ranked.sort(function(a, b){
    return b[1] - a[1];
});
//console.log(ranked);

var vcSort = [];
for (var votes in voteCount) {
    vcSort.push([ voteCount[votes]]);
}

vcSort.sort(function(a, b) {
    return b[1] - a[1];
});

console.log(ranked.toString()+" ");
console.log(vcSort +" ");
//console.log(voteCount[i]);
});

