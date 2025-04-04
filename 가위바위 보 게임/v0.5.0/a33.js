/***********************************************************************
 가위 바위 보 게임 (v0.5.0)

 [기존기능]
 -가위바위보 기능
 -유저가 가위바위보 외의 입력시 예외처리 추가
 -유저가 가위바위보 입력을 입력창에서 받도록 수정
 -결과 출력을 dw(){doucument.write} 가 아닌 출력화면용 textarea에 출력하도록 개선
 -가위바위보 게임을 단판이 아닌 무한으로 가능하게끔 변경

 v0.5.0 update
 -컴퓨터가 유저의 가위 바위 보 를 이미지로도 표현
 ********************************************************************/

 // t1.addEventListener('click, btn_listener);

 // 선언
 var userRpc = "";
 var comRpc = "";

 var rpcInputText;
 var rpcResultScreen;

 var resultString = "";

 //이미지를 놓을 div들
 var divRpcImgUser;
 var divRpcImgCom;

 window.onload =function(){

    rpcInputText = document.getElementById("rpc_input_text");
    rpcResultScreen = document.getElementById("rpc_result_screen");
    divRpcImgUser = document.getElementById("rpc_user");
    divRpcImgCom = document.getElementById("rpc_com");

    //rpcResultScreen.value = "고양이";

 }

function rpcInputButtonClick(){

    while(true){
        userRpc = rpcInputText.value;
        if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
            break; // 이걸 안쓰면 while이 무한루프에 빠짐 if/break 반드시 같이 붙일 것 
        } else {
            alert("장난치지마세요");
        }
    }

    comRpc = Math.floor(Math.random()*3+1);
    // Math.floor(Math.random()*n) 0부터 n-1 까지 랜덤으로 숫자 뽑을수 있는 코드
    if(comRpc == 1){
        comRpc = "가위";
    }
    if(comRpc == 2){
        comRpc = "바위";
    }
    if(comRpc == 3){
        comRpc = "보";
    }

    resultString = "Player:"+userRpc;     // 게임을 다시 시작할 경우 이 코드로 인해 기존에 누적된 내용이 초기화가 됨.
    resultString = resultString + "\n";
    resultString = resultString + "AI:"+comRpc;
    resultString += "\n";

    // 이미지 추가
    // 플레이어가 내는 가위바위보 이미지
    switch(userRpc){
        case "가위":
            divRpcImgUser.innerHTML = "<img src='sc.png'>"
            break;
        case "바위":
            divRpcImgUser.innerHTML = "<img src='ro.png'>"
            break;
        case "보":
            divRpcImgUser.innerHTML = "<img src='pa.png'>"
            break;
    }
    // CPU(컴퓨터)가 내는 가위바위보 이미지
    switch(comRpc){
        case "가위":
            divRpcImgCom.innerHTML = "<img src='sc.png>"
            break;
        case "바위":
            divRpcImgCom.innerHTML = "<img src='ro.png>"
            break;
        case "보":
            divRpcImgCom.innerHTML = "<img src='pa.png>"
            break;
    }

    var winDrawLose = "";
    switch(userRpc){
        case "가위":
            switch(comRpc){
                case "가위":
                    winDrawLose = "DRAW";
                    break;
                case "바위":
                    winDrawLose = "패배";
                    break;
                case "보":
                    winDrawLose = "승리"
                    break;
            }
            break;
        case "바위":
            switch(comRpc){
                case "가위":
                    winDrawLose = "승리";
                    break;
                case "바위":
                    winDrawLose = "DRAW";
                    break;
                case "보":
                    winDrawLose = "패배"
                    break;
            }
            break;
            case "보":
                switch(comRpc){
                    case "가위":
                        winDrawLose = "패배";
                        break;
                    case "바위":
                        winDrawLose = "승리";
                        break;
                    case "보":
                        winDrawLose = "DRAW"
                        break;
                }
                break;
    }
    // dw(winDrawLose); <- 안쓰는 이유 먼저 만들어 놨던 디자인을 싹다 없던거 처리하기 때문
    // resultString += "결과:" + winDrawLose;
    resultString =resultString + "결과" + winDrawLose;

    // 결과출력
    rpcResultScreen.value = resultString;
}