class tablet{
    tabletWidth;
    tabletHeigth;
    AndroidVersion;
    msgArray = new Array;
    f;

    constructor(tabletHeigth, tabletWidth, AndroidVersion, msgArray,f){
        this.tabletHeigth = tabletHeigth;
        this.tabletWidth = tabletWidth;
        this.AndroidVersion = AndroidVersion;
        this.msgArray = msgArray;
        this.f = f;
         setTimeout(() => {
             this.root();
             this.reversed(this.msgArray);
         }, 2000);
    }


root(){
    let root = Math.sqrt(this.f);
    console.log(`The root of the propery f is ${root}`);
 }

reversed(str){
    let array = new Array;
    for(let j=0; j<str.length; j++){
            array[j] = str[j].split('').reverse( );
    }
        console.log(array); 
 }
}

let samsung = new tablet('280','140','7.1',['i love you',' where are you', 'miss you'],'120');
console.log(samsung);