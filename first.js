alert ("Welcome Our Resturant")

let dish =prompt("What do you like to eat","Dumpling,Noddle,Pasta")
if (dish === "Dumpling"){
    let typeOfDumpling = prompt("Which Dumpling You Want to eat?","Fried,Steamed")
 
    if (typeOfDumpling === "Fried"){
      prompt("which sauce is choose with fried dumpling","peanut,dynamite")
        alert("congrats your order would be deliver in 60 mins")
    }
    else if (typeOfDumpling === "Steamed") {
        prompt("which sauce is choose with steamed dumpling","schezwan,chilli Oil")
        alert("congrats your order would be deliver in 60 mins")
    }
    else if(typeOfDumpling === "Fried,Steamed"){
         prompt("which sauce is choose with dumpling","schezwan,chilli Oil,peanut,dynamite")
        alert("congrats your order would be deliver in 60 mins")
    }
    else{
        alert("Sorry we don't have" + typeOfDumpling)
    }
}
else if(dish === "Noddle"){

let typeOfNoddle = prompt("which type of Noddle you Chosse","Numbing Noddle,Old School,Taste of Korea")

if(typeOfNoddle === "Numbing Noddle"){
        prompt("what you chosse in add ons","Sweet corns,Sausges")
        alert("congrats your order would be deliver in 60 mins")
}
else if(typeOfNoddle === "Old School"){
    alert("congrats your order would be deliver in 60 mins")
}
else if(typeOfNoddle === "Taste of Korea"){
    alert("congrats your order would be deliver in 60 mins")
}
else if(typeOfNoddle === "Numbing Noddle,Old School,Taste of Korea"){
    prompt("ok just tell about the add on of Numbing Noodle","Sweet corns,Sausges")
    alert("congrats your order would be deliver in 60 mins")
}
else{
    alert("Sorry we don't have" + typeOfNoddle)
}

}
else if (dish === "Pasta"){
    prompt("Which pasta you want to order","Alferado,Chilli Peanut")
    alert("congrats your order would be deliver in 60 mins")
}
else if(dish === "Dumpling,Noddle,Pasta"){
   alert("if you want to order multiple items so, then first place order about dumpling after Noddles then after Pasta")
}
else{
    alert("Sorry we have only limited items you see in the before msg plz refresh your page and place your order.")
}
