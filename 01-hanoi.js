// 汉诺塔
var hanoi = function(disc,src,aux,dst){
	if (disc > 0) {
		hanoi(disc-1,src,dst,aux);
		console.log("move disc " + disc + " from " + src + " to " + dst);
		hanoi(disc-1,aux,src,dst);
	}
}
hanoi(3,"Src","Aux","Dst");
// move disc 1 from Src to Dst
// move disc 2 from Src to Aux
// move disc 1 from Dst to Aux
// move disc 3 from Src to Dst
// move disc 1 from Aux to Src
// move disc 2 from Aux to Dst
// move disc 1 from Src to Dst




