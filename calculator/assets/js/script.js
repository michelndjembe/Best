

var operateur,a,b,n,mr,ms,point=1;

function saisie(c)
{	

	document.form1.case1.value +=c;
}

function signe(ope)
{
	if(ope=='puissance'){
		a= parseFloat(document.form1.case1.value);	
		document.form1.case1.value='';
		operateur=ope;
	}
	else{
		a+= parseFloat(document.form1.case1.value);
		operateur=ope;
		document.form1.case1.value +=ope;
	}

}
	
function calcul()
{
	if (operateur == 'puissance')
	{
		document.form1.case2.value = Math.pow(a,parseFloat(document.form1.case1.value));
	}
	if (operateur != 'puissance')
	{
    document.form1.case2.value = eval(document.form1.case1.value);
	}
	a=eval(document.form1.case1.value);
	
}
function scientific(n)
{
	a=parseFloat(document.form1.case1.value);

	switch (n)
	{ 
		case 1:
			document.form1.case1.value = Math.sqrt(a); 
			document.form1.case2.value = Math.sqrt(a); break;
		case 2:
			document.form1.case1.value = Math.abs(a);
			document.form1.case2.value = Math.abs(a); break;
		case 3:
			document.form1.case1.value = Math.PI;
			document.form1.case2.value = Math.PI; break;
		case 4:
			document.form1.case1.value = Math.sin(a);
			document.form1.case2.value = Math.sin(a); break;
		case 5:
			document.form1.case1.value = Math.cos(a);
			document.form1.case2.value = Math.cos(a); break;
		case 6:
			document.form1.case1.value = Math.tan(a);
			document.form1.case2.value = Math.tan(a);break;
		case 7:
			document.form1.case1.value = Math.log10(a);
			document.form1.case2.value = Math.log10(a); break;
		case 8:
			document.form1.case1.value = Math.exp(a);
			document.form1.case2.value = Math.exp(a); break;
		case 9:
			document.form1.case1.value = Math.log(a);
			document.form1.case2.value = Math.log(a); break;
		case 10:
			document.form1.case1.value = (a^100);
			document.form1.case2.value = (a^100); break;

		case 11:
			document.form1.case1.value = Math.asin(a);
			document.form1.case2.value = Math.asin(a); break;
		case 12:
			document.form1.case1.value = Math.acos(a);
			document.form1.case2.value = Math.acos(a); break;
        case 13:
			document.form1.case1.value = Math.atan(a);
			document.form1.case2.value = Math.atan(a); break;
        case 14:document.form1.case2.value = Math.cotan(a); break;
	}
}
function memoire(n)
{
	switch (n)
	{
        case 1: ms=parseFloat(document.form1.case1.value);
        document.form2.memory.value=ms; break;
		case 2: document.form1.case1.value=ms; break;
	}
}
	
	
