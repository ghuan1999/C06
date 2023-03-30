import{question} from 'readline-sync';

function nhapMang(n:number):number[]{
    let a:number[]=[];
    for(let i:number=0; i<n;i++){
        a[i]=Number(question("Moi nhap phan tu thu "+i+": "));
    }
    return a;
}
function isSNT(n:number):boolean{
    let conf:number=1;
    for(let i:number=2;i<=Math.ceil(n/2);i++){
        if(n%i==0){
            conf=0;
            break;
        }
    }
    if(conf==1) return true;
    else return false;
}
function indexSNT(a:number[]):number[]{
    let snt:number[]=[];
    let dem:number=0;
    for(let i:number=0;i<a.length;i++){
        if(isSNT(a[i])==true){
            snt[dem]=i;
            dem++;
        }
    }
    return snt;
}
function main():void{
    let n:number=Number(question("Moi nhap so phan tu cua mang: "));
    let a:number[]=nhapMang(n);
    let arrSNT:number[]=indexSNT(a);
    console.log(arrSNT);
}
main();