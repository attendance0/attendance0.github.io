document.getElementById("submit").addEventListener("click", async()=>{
    let p=document.getElementById("num4").value;
    let x=document.getElementById("num1").value;
    let y=document.getElementById("num2").value;
    let c=document.getElementById("num3").value;
    if(p===""||x===""||y===""||c===""){
        alert("Please enter all the values")
        window.location.reload();
    }
    else if(parseFloat(c)===100){
        const newH2 = await document.createElement('h2')
        newH2.innerText = `You can never reach 100% attendance`
        document.body.appendChild(newH2)

        document.getElementById("submit").addEventListener("click", async()=>{
            window.location.reload();
        })
    }
    else{
    p=parseFloat(p);
    x=parseFloat(x);
    y=parseFloat(y);
    c=parseFloat(c);
    let s=0;
    let arr=[5,5,6,4,4,4];
    let atten=[],ai=0
    var cr=(x/y)*100;
    cr = cr.toFixed(2);
    while(1){
        if(((x/y)*100)>c) break;
        if(p>5) p=0;
        x+=arr[p];
        y+=arr[p];
        s++;
        p++;
        atten[ai++]=((x/y)*100).toFixed(2);
    }
    
    const newH4 = await document.createElement('h4')
    newH4.innerText = `Current Attendance: ${cr}%`
    document.body.appendChild(newH4)
    const newH2 = await document.createElement('h2')
    newH2.innerText = `You need to attend ${s} more days to reach ${c}% attendance`
    document.body.appendChild(newH2)
    const newH3 = await document.createElement('h5')
    newH3.innerText = `Day wise attendance info:`
    document.body.appendChild(newH3)
    ai=0,day=1
    while(ai<atten.length){

        const newH3 = await document.createElement('h5')
        if(ai-1>=0) newH3.innerText = `After ${day++} days: ${atten[ai]}% [${(atten[ai]-atten[ai-1]).toFixed(2)}% increase]`
        else newH3.innerText = `After ${day++} days: ${atten[ai]}%`
        document.body.appendChild(newH3)
        ai++
    }
    document.getElementById("submit").addEventListener("click", async()=>{
        window.location.reload();
    })
    
}

    

    

})