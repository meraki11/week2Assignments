var evenNum = 0;
while (evenNum < 100) {
    evenNum += 2;
    console.log(evenNum);
}

var countDown3s = 100;
    console.log(countDown3s);
while (countDown3s > 0 ) {
    countDown3s = (countDown3s - 3);
    if (countDown3s > 0 )
    console.log(countDown3s);
}  

for (var i = 1; i < 100; i+=2) {
         console.log(i);
    }   

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log("HelloWorld");
    } else {
        if (i % 3 == 0) {
        console.log("Hello");
    } else {
        if (i % 5 == 0) {
        console.log("World");
    } else {
        console.log(i);
        }
    }
    }
}