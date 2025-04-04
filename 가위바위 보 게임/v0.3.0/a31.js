/********************************************************************
 가위 바위 보 게임 (v0.3.0)

 [기존 기능]
 - 가위바위보 기능
 -유저 가위바위보 입력 시 예외처리 추가

 v0.3.0 update var.
 -유저 가위바위보 입력을 입력창에서 받도록 수정하였습니다
 -가위 바위 보 게임을 단판이 아닌 무한으로 가능하게 변경하였습니다
 */
// t1.addEventListener('click', btn_listener);

//선언
var userRpc = "";
var comRpc = "";

var rpcInputText;

// **** 중요 *****
// 기억하고 있을것 window.onload 는 기억하고 있다가 html 까지 전부 읽고 나서 실행
window.onload =function(){

    rpcInputText = document.getElementById("rpc_input_text"); // rpcTnputText를 rpc_input_text로 변경

}

function rpcInputButtonClick(){
    while(true){  // while 무한루프 예시
        // userRpc = prompt("가위, 바위, 보 중에 하나를 입력하세요:");
        userRpc = rpcInputText.value;
        if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
            break; // while 무한루프를 빠저나가는 키워드 if/break 는 한몸이라고 기억하묜 됨
        } else {
            alert("장난치지마세여");
        }
    }

    comRpc = Math.floor(Math.random()*3+1); // 랜덤 숫자 뽑는 코드 중요
    if(comRpc == 1){
        comRpc = "가위";

    }
    if(comRpc == 2){

        comRpc = "바위";
    }
    if(comRpc == 3){

        comRpc = "보";
    }
    dw("Player:"+userRpc);
    br();
    dw("AI:"+comRpc);
    br();
    var  winDrawLose = "";
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
                    winDrawLose = "승리";
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
                    winDrawLose = "패배";
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
                    winDrawLose = "DRAW";
                    break;
            }
            break;
    }
    dw(winDrawLose);        

}
