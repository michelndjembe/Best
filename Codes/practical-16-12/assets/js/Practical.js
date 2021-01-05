//==============Array==============//

let user=[];
let n;
function collect(){
    while(typeof(n)!=='number'){
        n=+prompt("Enter the length of your Array");
    }

    for(i=0; i<=n-1; i++){
        user[i]=prompt("Enter your Array's value "+(i+1));
}
alert('Your array is ['+user+']');
}

document.querySelector('register-btn').addEventListener("click", copy);
document.querySelector('input-btn-delete').addEventListener("click", deleted);
document.querySelector('input-btn-update').addEventListener("click", refresh);

function copy(event){
    event.preventDefault();
}

//==============delete==============//
function deletCheck(e){
	const item = e.target;
	
	if(item.classList[0] === 'input-btn-delete'){
		const del = item.parentElement;
		del.remove();
		
	}

	// update
	if(item.classList[0] === 'update-btn'){
		const del = item.parentElement;
		del.classList.toggle("verify")
		// const updateText = document.querySelector('.inputText');
		// updateText.innerText= input.value;
	}
}
//=======X=======delete=======X=======//

//=======X=======objectif list=======X=======//

