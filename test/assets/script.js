/*---------show login---------*/
function masquer_div(id)
{
  if (document.getElementById(id).style.display == 'none')
  {
       document.getElementById(id).style.display = 'block';
  }
  else
  {
       document.getElementById(id).style.display = 'none';
  }
}
/*----x----show login----x----*/

/*----x----for login----x----*/
function sign(){
    if(document.form.usermail.value!==""){
        if(document.form.password.value!==""){
                    document.getElementById('masquer').style.display = 'none';
                    document.getElementById('issue').style.display = 'block';

/*========x=======local storage=======x========*/
            if (!localStorage.getItem('users'))
        localStorage.setItem('users', JSON.stringify([]));
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const data = { email, password};                    
        const users = JSON.parse(localStorage.getItem('users'));
                            
        users.push(data);
                            
        localStorage.setItem('users', JSON.stringify(users));
        
/*========x=======local storage=======x========*/
        }
    }
}
/*----x----for login----x----*/

/*---------for signup---------*/

var counter = 0; 
/*---------Issues part---------*/
function addIssue(){
    
    const issue=document.createElement('div');
    issue.classList.add('issue');
    issue.setAttribute('name','issue');
    document.getElementById('issue').appendChild(issue);

    
    const issueList=document.createElement('li');
    issueList.classList.add('issue-items');
    issueList.setAttribute('name','issue-items');
    issue.appendChild(issueList);

    const inputText=document.createElement('input');
    inputText.classList.add('issue-data');
    inputText.setAttribute('name','issue-data');
    inputText.setAttribute('id', +counter);
    inputText.setAttribute('placeholder','Enter an issue');
    issueList.appendChild(inputText);



    const detailsBtn=document.createElement('button');
    detailsBtn.innerHTML = '<i class="fa fa-bars"> details<i>';
    detailsBtn.classList.add('details-btn');
    issueList.appendChild(detailsBtn);


    const updateBtn=document.createElement('button');
    updateBtn.innerHTML = '<i class="fa fa-pencil-square-o">save</i>';
    updateBtn.classList.add('update-btn');
    issueList.appendChild(updateBtn);


    const deleteBtn=document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa fa-trash-o"> delete</i>';
    deleteBtn.classList.add('delete-btn');
    issueList.appendChild(deleteBtn);

    /*===============local storage===============*/
counter++;
}



const issueContainer = document.querySelector('.container-issue');
issueContainer.addEventListener("click", targetIssue);

function  targetIssue(e){
    const item = e.target;
    if(item.classList[0] === 'delete-btn'){
        const del = item.parentElement;
        del.remove();
    }

    if(item.classList[0] === 'update-btn'){
        const upd = item.parentElement.firstChild;
        if(upd.value!==""){
            upd.disabled = !upd.disabled;
            if(upd.hasAttribute('disabled')){
                item.innerHTML = '<i class="fa fa-pencil-square-o">update</i>';
                
            }
            else{
                item.innerHTML = '<i class="fa fa-pencil-square-o">save</i>';
            }
        }
    }

}


/*----x----Issues part----x----*/

