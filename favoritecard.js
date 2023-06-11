var container = document.getElementById('container')



var favrItems = localStorage.getItem('favrCart')

var favoriteCardArr = []
if(favrItems){
    favrItems = JSON.parse(favrItems)
    favoriteCardArr = favrItems
}

for(var i=0; i < favoriteCardArr.length ; i++){

    var favrObj = favoriteCardArr[i] 

    var card = `
    <div class= cardItem>
    <span><i id='cutIcon' onclick="removeItem(this)" class="fa-solid fa-xmark fa-xl "></i></span>
    <h3> Name : ${favrObj.name}</h3>
    <h3>Description : ${favrObj.discription} </h3>
    </div>
       `
       container.innerHTML += card ;
    
}

function removeAllFavrCard(item){
 favoriteCardArr = []
 container.innerHTML = ""
 localStorage.removeItem('favrCart')
    
}
