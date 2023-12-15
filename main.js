let input=parseInt(prompt("Enter the number"))
document.write("Given input ="+ input+"<br><br>")

for(let i=1;i<=input;i++){
    for(let j=1;j<=i;j++){
        if(j%2==0){
            document.write(1+"&nbsp")
        }
        else{
            document.write(0+"&nbsp")
        }
    }
    document.write("<br>")
}

