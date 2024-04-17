/* Sync & Async

    sync: sync matalb ek ke baad dusra hoga, jab tak ek command complete na ho,
    dusra suru nehi hoga.

    Async: async matalb saare kaam ek sath shuru kardo, jiska answers pehel ayega
    uska jawaab dena. */

    console.log("hello")
    setTimeout(function(){
        console.log("i am raja")
    },12000)
    console.log("Hyy")


    /* 
        Mainstack -> Sync
        Sidestack -> Async  */


/* Promisse:
     JavaScript Promise are easy to manage when dealing with multiple asynchronous operations .
     It can be three cases promise rejected, resolve and processing 
     if promise is rejected then run .catch part
     if promise is resolve run .then part */

// Example1
  var ans = new Promise((res,req)=>{
        if(true){
            return res()
        }else{
            return  req()
        }
    })
ans
    .then(function(){
        console.log("resolve hogaya")
    })
    .catch(function(){
        console.log("rejected hogaya")
    })

//Example2
  var ans1 = new Promise((res,req)=>{
        let n = Math.floor(Math.random()*10);
        if(n<5){
            return res();
        }else{
            return req()
        }
    })
    ans1
    .then(function(){
        console.log("below");
    })
    .catch(function(){
        console.log("above");
    })


/* Async await */

   async function abc(){
      let raw = await fetch(`https://randomuser.me/api/`)
      let ans = await raw.json()
      console.log(ans);
    }