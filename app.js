function order(){
    var price;
    var bill;
    var quantity;
    var Item=prompt("Enter Item").toLowerCase();
    var flag = "nahi"

    var ItemList = ["cake","biscuit","donuts","spring rolls","crinkle chips","cold drinks"]

    for(i=0; i<ItemList.length; i++){
        if(Item === ItemList[i]){
            flag = "han";
            if(ItemList[i] === "cake")
            {
                 price = 1000;
                 quantity = +prompt("Enter a number of quanityy : ")
                  bill= price * quantity;
             
            }
            else if(ItemList[i] === "biscuit")
            {
                 price = 800;
                 quantity = +prompt("Enter Quantity : ")
                  bill= price * quantity;
                  alert(bill)
            }
            else if(ItemList[i] === "donuts")
            {
                 price = 50;
                 quantity = +prompt("Enter a number of quanityy : ")
                  bill= price * quantity;
                
            }
            else if(ItemList[i] === "sprimg rolls")
            {
                 price = 40;
                 quantity = +prompt("Enter a number of quanityy : ")
                  bill= price * quantity;
                  
            }
            else if(ItemList[i] === "crinkle chips")
            {
                 price = 100;
                 quantity = +prompt("Enter a number of quanityy : ")
                  bill= price * quantity;
                 
            }
            else if(ItemList[i] === "colddrink")
            {
                 price = 60;
                 quantity = +prompt("Enter a number of quanityy : ")
                  bill= price * quantity;
                  
            }
        }
      
    }
    if(flag==="nahi"){
        alert("Item not Available")
        
    }
    swal("Thank you ! for the purchasing kindly pay the bill", Item.toUpperCase() + " " +  "x" + " " + " "  + quantity+ "--------------------------------------------------" + "Rs." + bill);


}
//     if(Item===""){
//         swal("Thank you ! for the visiting chal bsdk");

//     }
//     else if(Item==="Cakes"){
//         price=1000;
//         quantity=+prompt("Enter Quantity");
//         bill=price*quantity;
        

//     }
    
//     else if(Item==="Donuts"){
//         price=50;
//         quantity=+prompt("Enter Quantity");
//         bill=price*quantity;
        

//     }
//     else if(Item==="Spring Rolls"){
//         price=40;
//         quantity=+prompt("Enter Quantity");
//         bill=price*quantity;
        


//     }
//     else if(Item==="Crinkel Chips"){
//         price=100;
//         quantity=+prompt("Enter Quantity");
//         bill=price*quantity;
        

//     }
//     else if(Item==="Biscuits"){
//         price=800;
//         quantity=+prompt("Enter Quantity");
//         bill=price*quantity;
        

//     }
//     else if(Item==="Cold Drinks"){
//         price=60;
//         quantity=+prompt("Enter Quantity");
//         bill=price*quantity;
        

//     }
    
//     swal("Thank you ! for the purchasing kindly pay the bill", Item + "x"  + quantity+ "------------------------------------------------------" + bill);
    
// }