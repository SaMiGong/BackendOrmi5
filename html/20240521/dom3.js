const myBtn = document.querySelector("button");
const myUl = document.querySelector("ul");

myBtn.addEventListener('click', function(){
    for(let i=0; i < 5; i++){
        const myLi = document.createElement('li');
        const btnDel = document.createElement('button');
        const btnTxt = document.createTextNode('버튼');

        btnDel.append(btnTxt);
        btnDel.addEventListener('click', ()=>{
            myLi.remove();
        });
        myLi.append('삭제하기: ', btnDel);
        myUl.appendChild(myLi);
    }
});

// parentElement.insertBefore(target, location); target요소를 parentElement의 자식인 location 위치 앞으로 이동합니다.

const span = document.createElement("span");
const sibling = document.getElementById("childElement");
const parentDiv = document.getElementById("parentElement");
parentDiv.insertBefore(span, sibling);