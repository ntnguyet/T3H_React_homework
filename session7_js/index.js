function Love(){
    let simpleLove = {
        a: 1,
        b: 2,
        c: "3",
        d: "hello",
        e: 6,
        f: "5",
    };
    for ( key in simpleLove){
        Number(simpleLove[key] === "number" );
        if(simpleLove[key] != "hello"){
            simpleLove[key] = simpleLove[key] * 2;
        }
        else{
            continue;
        }
        
       
            
        
    }
    console.log(simpleLove);
}
function Check_chanle(number){
    if(typeof(number) === "number" && number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
};
function Love_1(){
    let simpleLove1 = {
        a: 1,
        b: 2,
        c: "3",
        d: "hello",
        e: 200,
        f: 355,
        c: 6
    };
    for( const key in simpleLove1){
        if(Check_chanle(simpleLove1[key])){
            console.log(simpleLove1[key]);
        };
    };
};
function Love_2(){
    let simpleLove2 = {
        a: 1,
        b: 2,
        c: "3",
        name: "Lan",
    };
    for (const key in simpleLove2){
        if ( simpleLove2[key] === "Lan"){
            simpleLove2[key] = "Ngoc";
        }
        else{
            continue;
        }
    }
    console.log(simpleLove2);


};
Love();
Love_1();
Love_2();
