
function test1(){
    console.log("test1");
}

function test2(){
    console.log("test2");
}

test1(); // test1 
test2(); // test2

// yaha par test1 aur test2 dono synchronous functions hain, isliye ye dono functions apne apne order mein execute honge. Pehle test1 execute hoga aur uske baad test2 execute hoga.


function test3(){
    setTimeout(() => {
        console.log("test3");
    }, 2000);
}

function test4(){
    console.log("test4");
}

test3(); // test3 (after 2 seconds)
test4(); // test4
// yaha par test3 ek asynchronous function hain, isliye ye function 2 seconds baad execute hoga, jabki test4 immediately execute hoga.
