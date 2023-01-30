let resumeData={
    name:"Nagaraj",
    age:22,
    qualification:[
        {
            class:10,
            schoolName:"ASS Matric Higher secondary School",
            percentage:71
        },
        {
            class:12,
            schoolName:"MDV Higher Secondary School",
            percentage:55
        },
        {
            ugDegree:"Computer Technology",
            collegeName:"Erode arts and science College",
            percentage:65
        },
        {
            pgDegree:"Computer Application",
            collegeName:"EXcel Engineering College",
            percentage:72            
        }    
    ],
    address:"5/279 kuchipalayam, Near ksr college, Tiruchengode, Namakkal - 637215",
    phoneNumber:7373432975
}
//---------------------------------object print--------------------------------------------

// console.log(resumeData["name"]);

//----------------------------------Object keys-------------------------------------------
var keys=Object.keys(resumeData)
// console.log(keys)

//----------------------------------Object Values-----------------------------------------
var keysValues=Object.values(resumeData)
// console.log(keysValues)

//----------------------------------For Loop----------------------------------------------

for (let index = 0; index < keys.length; index++) {
    // console.log(keys[index],":",keysValues[index]);    
}

//---------------------------------For in Loop------------------------------------------------

for (const i in resumeData){
    // console.log("Keys :",i,", values :",resumeData[i])    
}

//---------------------------------For of Loop-----------------------------------------------

for (const i of keys) {
    // console.log("Keys :", i,",  Values :",resumeData[i])
}

//---------------------------------For Each Loop---------------------------------------------   

keys.forEach((val,ind,arr) => {
    console.log("keys :",val,"values :",resumeData[val])
    
});






