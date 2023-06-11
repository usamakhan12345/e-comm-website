var container = document.getElementById('container')
var cutIcon = document.getElementById('cutIcon')
var removeAllBtn = document.getElementById('btn')
var element = document.getElementById('cardItem')
var foodItems = localStorage.getItem('cardItem')

var cardItemsArr = []
getItems()
function getItems(){
    if(foodItems){
        foodItems = JSON.parse(foodItems)
        
        cardItemsArr = foodItems  
        // console.log(cardItemsArr)
    }

}

// console.log(foodItems)
// console.log(foodItems[0].name)

for(var i=0 ; i < cardItemsArr.length ; i++){
    var foodObj = cardItemsArr[i]
    
    var card = `
    <div class= cardItem>
    <span><i id='cutIcon' onclick="removeItem(this)" class="fa-solid fa-xmark fa-xl "></i></span>
    <h3> Name : ${foodObj.name}</h3>
    <h3>Description : ${foodObj.discription} </h3>
    </div>
       `
       container.innerHTML += card ;
}

function removeItem(item){
    var div = item.parentNode.parentNode
    div.parentNode.removeChild(div)
    localStorage.removeItem(cartItem[0])
    
}

function removeAllCard(){
    
    localStorage.clear()
    cardItemsArr = []
    container.innerHTML = ""
    

}

