document.getElementById("submit").addEventListener("click", async()=>{
    let p=document.getElementById("num4").value;
    let x=document.getElementById("num1").value;
    let y=document.getElementById("num2").value;
    let c=document.getElementById("num3").value;
    let ab=document.getElementById("num5").value;
    ab==="" ? f=0 : f=1;
    if(p===""||x===""||y===""||c===""){
        alert("Please enter all the values :(")
        window.location.reload();
    }
    else if(parseFloat(c)===100){
        const newH2 = await document.createElement('h2')
        newH2.innerText = `You can never reach 100% attendance`
        document.body.appendChild(newH2)
        
        document.getElementById("submit").addEventListener("click", async()=>{
            alert("you can never reach 100% attendance 🥶")
            window.location.reload();
        })
    }
    else{
    p=parseFloat(p);
    x=parseFloat(x);
    y=parseFloat(y);
    c=parseFloat(c);
    let s=0,p1=p+1,fx=x,fy=y;
    let arr=[5,5,6,4,4,4];
    let fp=arr[p]
    let itr=arr[p1];
    let atten=[],nr=[],dr=[],ai=0
    var cr=(x/y)*100;
    cr = cr.toFixed(2)
    let h;
    (parseFloat(ab)-p>=0)?(h=parseFloat(ab)-p):(h=6-Math.abs(parseFloat(ab)-p));
    console.log(h)
    while(1){
        if(((x/y)*100)>c) break;
        if(p>5) p=0;
        if(f==1 && h==ai){
            y+=arr[p];
            p++;
            console.log("absent: "+x+" "+y+" "+p)
            nr[ai]=x;
            dr[ai]=y;
        atten[ai++]=((x/y)*100).toFixed(2);
        f=0;
        }
        else{
        x+=arr[p];
        y+=arr[p];
        s++;
        p++;
        nr[ai]=x;
        dr[ai]=y;
        console.log("present: "+x+" "+y+" "+p)
        atten[ai++]=((x/y)*100).toFixed(2);
        }
    }
    console.log(atten)
    
    
    const newH4 = await document.createElement('h4')
    newH4.innerText = `Current Attendance: ${cr}%`
    document.body.appendChild(newH4)
    const newH2 = await document.createElement('h2')
    newH2.innerText = `You need to attend ${s} more days to reach ${c}% attendance [${(s/7).toFixed(2)} weeks]`
    document.body.appendChild(newH2)
    const newH3 = await document.createElement('h5')
    newH3.innerText = `Day wise attendance info:`
    document.body.appendChild(newH3)
    const yValues = atten;
    let xValues=[];
for(let i=1;i<=atten.length;i++){
    xValues.push(i);
}

new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        label: 'Attendance over time ',
        backgroundColor:"rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    
  });
    ai=0,day=1;
    while(ai<atten.length){

        const newH3 = await document.createElement('h5')
        if(ai-1>=0) {
            let nrt=nr[ai-1],drt=dr[ai-1];
            let per=[],dper=[]
            let inc=1;
            console.log(itr)
            while(itr--){
                per.push((((parseInt(nrt)+inc)/(parseInt(drt)+inc))*100).toFixed(2))
                dper.push((((parseInt(nrt))/(parseInt(drt)+inc))*100).toFixed(2))
                inc++
                
            }
            p1++;
            if(p1>5) p1=0;
            itr=arr[p1];
            
            (atten[ai]-atten[ai-1]>0)?(newH3.innerText = `After ${day++} days: ${atten[ai]}% [${nr[ai]}/${dr[ai]}] [${(atten[ai]-atten[ai-1]).toFixed(2)}% increase] ✅------->Per period increase [${per}]`):(newH3.innerText = `After ${day++} days: ${atten[ai]}% [${nr[ai]}/${dr[ai]}] [${(atten[ai-1]-atten[ai]).toFixed(2)}% decrease] ❌------->Per period decrease [${dper}]`)
        }
        else {
            let fper=[];
            let inc=1;
            while(fp--){
                fper.push((((parseInt(fx)+inc)/(parseInt(fy)+inc))*100).toFixed(2));
                inc++;
            }
            (atten[ai]-cr>0)?(newH3.innerText = `After ${day++}st day: ${atten[ai]}% [${nr[ai]}/${dr[ai]}] [${(atten[ai]-cr).toFixed(2)}% increase] ✅------->Per period increase [${fper}]`):(newH3.innerText = `After ${day++} days: ${atten[ai]}% [${nr[ai]}/${dr[ai]}] [${(cr-atten[ai]).toFixed(2)}% decrease] ❌`)
        }
        document.body.appendChild(newH3)
        ai++
    }
    document.getElementById("submit").addEventListener("click", async()=>{
        window.location.reload();
    })
    
}

    

    

})


