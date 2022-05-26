// 1. 입금 기능
// 입금액 input 값 받은 후 '입금 '버튼을 누르면 잔액란으로 값 이동

// 2. 거스름돈 반환
// '거스름돈 반환' 버튼 누르면 잔액이 소지금란으로 이동

// 3. 음료 구매
// 3-1. 음료 버튼 누르면 카트로 이동
// 3-2. 카트의 음료 버튼을 누르면 하나씩 수량 감소
// 3-2. '획득' 버튼 누르면 카트에 담긴 음료가 획득한 음료칸으로 이동
// 3-3. (실패) 카트에 담긴 금액이 잔액을 초과하면 alert
// 3-4. (성공) 기존 잔액 - 구매금액

// 4. 총금액 계산
// 획득한 음료의 총금액을 구해 하단에 표시

const buyCont = document.querySelector(".cont-buy");
const returnBtn = buyCont.querySelector(".btn-return");
const depositInput = buyCont.querySelector(".input-deposit");
const depositBtn = buyCont.querySelector(".btn-deposit");
const balance = buyCont.querySelector(".txt-balance");
const myMoney = document.querySelector(".txt-money");

function getChange() {
  myMoney.textContent =
    parseInt(balance.innerText) + parseInt(myMoney.innerText) + " 원";
  balance.textContent = "0 원";
}

function deposit() {
  if (depositInput.value) {
    balance.textContent =
      parseInt(balance.innerText) + parseInt(depositInput.value) + " 원";
    depositInput.value = "";
  }
}

returnBtn.addEventListener("click", getChange);
depositBtn.addEventListener("click", deposit);
