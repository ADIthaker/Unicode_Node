const list = [ "Rashmil Panchani 99 97", "Parag Vaid 95 93", "Siddharth Sanghavi 98 100" ];
const ans=[];
list.forEach(str=>{
    let temp;
    temp = str.split(" ");
    ans.push({
        Name : temp[0] +' '+ temp[1],
        Score : {
            Maths :temp[2],
            English : temp[3]
        }
    })
})
console.log(ans);