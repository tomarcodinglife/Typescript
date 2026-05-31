
function useDataFun<T>(data:T):T{
    return data;
}


let Value636 = useDataFun("Sujit"); 
let Value637 = useDataFun(656);
let Value638 = useDataFun(true);


function useArrayFun<T>(data:T):T{
    return data;
}

let collection121 = useArrayFun(["Sujit", "Amit", "Sohan"]);
let collection122 = useArrayFun([252, 525, 658, 458, 744]);

function useOnlyArrayFun<T>(data:T[]):T{
    return data[0];
}

let collection123 = useOnlyArrayFun(["Sohan"]);





