let n = 6;

for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++){
        if ( i + j > n){
            process.stdout.write("*");
        }
        else {
            process.stdout.write(" ");
        }        
    }
    console.log("");
}