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



    



/*---------Changing page---------*/

/*----x----for login----x----*/
function sign(){
    if(document.form.username.value!==""){
        if(document.form.password.value!==""){
            for(var i=0; i<localStorage.length; i++){
                let callback = localStorage.key(i);
                a = localStorage.getItem(callback);
                c = JSON.parse(a).email;
                b = JSON.parse(a).password;
                if (b == document.form.password.value){
                    document.getElementById('masquer').style.display = 'none';
                    document.getElementById('masquer2').style.display = 'none';
                    document.getElementById('intro').style.display = 'none';
                    document.getElementById('issue').style.display = 'block';
                }
                else{
                    document.form.username.value = 'Your email or password may be incorrect'
                }
            }
        }
    }
}
/*----x----for login----x----*/

/*---------for signup---------*/

function sign2(){



    if(document.form2.username2.value!==""){
        if(document.form2.password2.value!==""){
                if(document.form2.Email.value!==""){

    if (!localStorage.getItem('users'))
     localStorage.setItem('users', JSON.stringify([]));

    const name = document.getElementById('username2').value;
    const password = document.getElementById('password2').value;
    const email = document.getElementById('Email').value;
    
    const data = {name, password, email};
    
    const users = JSON.parse(localStorage.getItem('users'));
    
    users.push(data);
    
    localStorage.setItem('users', JSON.stringify(users));


                            document.getElementById('masquer2').style.display = 'none';    
                            document.getElementById('masquer').style.display = 'none';
                            document.getElementById('intro').style.display = 'none';
                            document.getElementById('issue').style.display = 'block';
                        

                }
        }
    }
    }


/*----x----for signup----x----*/


/*----x----Changing page----x----*/


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


