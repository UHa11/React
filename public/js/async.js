const serverData = [{
    id: 1,
    name: "U-Ha"
}, {
    id: 2,
    name: "U-Hu"
}, {
    id: 3,
    name: "U-He"
}]
//기존 콜백방식
// function getUser(data,succesCallback,errorCallback){
//     //일반 함수 내에서 비동기 작업 실행
//     setTimeout(()=>{
//         //완료 후 callback을 통한 데이터 전달
//         const user = serverData.filter(u => u.id ===data.id);
//         if(user.length > 0 )succesCallback(user);
//         else errorCallback("user을 찾을 수 없습니다.");
//     },3000);
// }

// getUser({id:1},(user)=>{
//     console.log(user);
// },(errorMsg) => {
//     console.log(errorMsg);
// })

function getUser(data) {
    //Promise -> 비동기작업을 실행해줄 객체
    return new Promise((resolve, reject) => {
        //resolve : 성공시 실행해줄 ㅅ함수
        //reject : 실패시 실행해줄 함수
        setTimeout(() => {
            //완료 후 정해진 함수를 통한 데이터 전달
            const user = serverData.filter(u => u.id === data.id);
            if (user.length > 0) resolve(user);
            else reject("user을 찾을 수 없습니다.");
        }, 3000);
    })
}

// getUser(serverData)
//     .then(result => {
//         console.log("then 결과:", result);
//     }).catch(error => {
//         console.log("error결과 :", error);
//     }).finally(()=> {
//         console.log("finally 실행");
//     });

// const getUser = new Promise(()=>{

// })

async function testAsync() {
    try{
        const result = await getUser({id: 3});
    console.log("then 결과",result);
    } catch(error){
        console.log("catch 결과:", error);
    } finally {
        console.log("finally 실행");
    }
}

//xhr -> ,XMLHttpRequest