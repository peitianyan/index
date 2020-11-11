// 完成二级菜单显示
function showMenu(str) {
    let sub_menu = document.getElementById(str);
    let dis_v = sub_menu.style.display;
    if (dis_v == "block") {
        sub_menu.style.display = "none";
    } else {
        sub_menu.style.display = "block";
    }

}
// 遍历头部标题
let list = document.getElementById('ul').getElementsByTagName('li');
console.log(list.length);
for (let i = 0; i < list.length; i++) {
    list[i].onmouseover = function () {
      
        showMenu('menu');

    }
}


// 官方部分轮播

function rotateGf(){
    let index = 1;
    let auto = null;
    let left = 0;
    let status = false;
    let dots = document.getElementsByClassName('dot')[0].getElementsByTagName('div'); 
    let ul_img1 = document.getElementById("ul_img1");
function nextImg() {
    if (status) {
        return false;
    }
    left = parseInt(ul_img1.style.left); //现在的起点位置
    let new_left = left - 740; //终点位置

    if (new_left < -5180) {
        new_left = 0;
    }
    index = ++index > 6 ? 1 : index;
    console.log("官方轮播："+index);

    animate(new_left);



}

// 轮播动画
function animate(new_left) {
    status = true;
    let left = parseInt(ul_img1.style.left);
    let offset = new_left - left; //总距离
    let interval = 10;
    let speed = offset / (740 / interval);

    // 先执行后等待
    function go() {
        left = parseInt(ul_img1.style.left); //当前位置
        let next_left = left + speed; //下一帧
        ul_img1.style.left = next_left + "px";
        if (speed < 0 && next_left >= new_left || speed > 0 && next_left <= new_left) {
            setTimeout(() => {
                go();


            }, interval);
        } else {

            ul_img1.style.left = new_left + "px";
            if (new_left <= -5180) {
                ul_img1.style.left = -740 + "px";
            }
            if (new_left >= 0) {
                ul_img1.style.left = -4440 + "px";
            }
            changeDot();
            status = false; // 动画结束，并且把动画状态设置为false
        }

    }
    go();


}
// 自动轮播图片的方法
function autoPlay() {

    auto = setInterval(() => {
        nextImg();
    }, 3000);


}

//绑定焦点事件
for(let i = 0;i<dots.length;i++){
    dots[i].onclick = ()=>{
        if(index == i+1 ||status){
            return false;
        }
        let new_index = i+1;
        let new_left = (i+1)* - 740;

        index = new_index;
        animate(new_left);
    }
}

//检查并显示对应图片焦点的方法
function changeDot(){
    for(let i =0 ;i<dots.length;i++){
        dots[i].className = "";
    }
    dots[index-1].className="on";
}
autoPlay();


}
rotateGf();
//合作轮播
function rotateHz(){
    let index = 1;
    let auto = null;
    let left = 0;
    let dot1 = document.getElementById('dot1').getElementsByTagName('div'); 
    let img2 = document.getElementById("ul_img2");
    let status1 = false;

function nextImg1() {
    console.log("合作轮播");
    console.log(status1);
    if (status1) {
        return false;
    }
    left = parseInt(img2.style.left); //现在的起点位置
    let new_left = left - 740; //终点位置

    if (new_left < -4440) {
        new_left = 0;
    }
    index = ++index > 5 ? 1 : index;
    console.log("合作轮播："+index);

    animate1(new_left);



}

// 轮播动画
function animate1(new_left) {
    status1 = true;
    let left = parseInt(img2.style.left);
    let offset = new_left - left; //总距离
    let interval = 10;
    let speed = offset / (740 / interval);

    // 先执行后等待
    function go() {
        left = parseInt(img2.style.left); //当前位置
        let next_left = left + speed; //下一帧
        img2.style.left = next_left + "px";
        if (speed < 0 && next_left >= new_left || speed > 0 && next_left <= new_left) {
            setTimeout(() => {
                go();


            }, interval);
        } else {

            img2.style.left = new_left + "px";
            if (new_left <= -4440) {
                img2.style.left = -740 + "px";
            }
            if (new_left >= 0) {
                img2.style.left = -3700 + "px";
            }
            changeDot1();
            status1 = false; // 动画结束，并且把动画状态设置为false
        }

    }
    go();


}
// 自动轮播图片的方法
function autoPlay1() {

    auto = setInterval(() => {
        // console.log("自动调用next");
        nextImg1();
        // changeFade();
    }, 3000);


}

//绑定焦点事件
for(let i = 0;i<dot1.length;i++){
    dot1[i].onclick = ()=>{
        if(index == i+1 ||status1){
            return false;
        }
        let new_index = i+1;
        let new_left = (i+1)* - 740;

        index = new_index;
        animate1(new_left);
    }
}

//检查并显示对应图片焦点的方法
function changeDot1(){
    for(let i =0 ;i<dot1.length;i++){
        dot1[i].className = "";
    }
    dot1[index-1].className="on";
}
autoPlay1();

}
rotateHz();


// 获取官方（合作）轮播切换按钮
//                   官方按钮
let ul_img1 = document.getElementsByClassName('banner1')[0]; 
let ul_img2 = document.getElementsByClassName('banner2')[0];                 //合作按钮
let nav_btn = document.getElementsByClassName('nav_btn')[0];
let btn = nav_btn.getElementsByTagName('a');                     //获取按钮
console.log("btn的长度为："+btn.length);
//获取官方/合作按钮
function getBtn(){
    for(let i =0;i<btn.length;i++){
        btn[i].onclick = ()=>{
            for(let j=0;j<btn.length;j++){
                btn[j].className = "";
            }
            btn[i].className = "on";
            if(i==0){
                ul_img1.className = "banner1 on";
                ul_img1.style.display = "block";
                ul_img2.className = "banner2";
                ul_img2.style.display = "none";
            }else{
                ul_img1.className = "banner1";
                ul_img1.style.display = "none";
                ul_img2.className = "banner2 on";
                ul_img2.style.display = "block";
            }
        }
    }
}
getBtn();

/* 
获取消息列表
*/
let news_list_ul1 = document.getElementsByClassName("news_list_ul1")[0];
let news_list_ul2 = document.getElementsByClassName("news_list_ul2")[0];
let news_list_ul3 = document.getElementsByClassName("news_list_ul3")[0];
let news_list_ul4 = document.getElementsByClassName("news_list_ul4")[0];
let news_list_ul5 = document.getElementsByClassName("news_list_ul5")[0];
let news_nav = document.getElementsByClassName("news_nav")[0].getElementsByTagName('a');
console.log("nav的长度为："+news_nav.length);
function getList(){
    for(let i=0;i<news_nav.length-1;i++){
        news_nav[i].onclick = ()=>{
             for(let j=0;j<news_nav.length-1;j++){
            news_nav[j].className = "";
        }
        news_nav[i].className = "on";
        if(i==0){
            news_list_ul1.className = "news_list_ul1 on";
            news_list_ul1.style.display = "block";
            news_list_ul2.className ="news_list_ul2";
            news_list_ul2.style.display = "none";
            news_list_ul3.className ="news_list_ul3";
            news_list_ul3.style.display = "none";
            news_list_ul4.className ="news_list_ul4";
            news_list_ul4.style.display = "none";
            news_list_ul5.className ="news_list_ul5";
            news_list_ul5.style.display = "none";

        }
        if(i==1){
            news_list_ul1.className = "news_list_ul1";
            news_list_ul1.style.display = "none";
            news_list_ul2.className ="news_list_ul2 on";
            news_list_ul2.style.display = "block";
            news_list_ul3.className ="news_list_ul3";
            news_list_ul3.style.display = "none";
            news_list_ul4.className ="news_list_ul4";
            news_list_ul4.style.display = "none";
            news_list_ul5.className ="news_list_ul5";
            news_list_ul5.style.display = "none";
        }
        if(i==2){
            news_list_ul1.className = "news_list_ul1";
            news_list_ul1.style.display = "none";
            news_list_ul2.className ="news_list_ul2";
            news_list_ul2.style.display = "none";
            news_list_ul3.className ="news_list_ul3 on";
            news_list_ul3.style.display = "block";
            news_list_ul4.className ="news_list_ul4";
            news_list_ul4.style.display = "none";
            news_list_ul5.className ="news_list_ul5";
            news_list_ul5.style.display = "none";

        }
        if(i==3){
            news_list_ul1.className = "news_list_ul1";
            news_list_ul1.style.display = "none";
            news_list_ul2.className ="news_list_ul2";
            news_list_ul2.style.display = "none";
            news_list_ul3.className ="news_list_ul3";
            news_list_ul3.style.display = "none";
            news_list_ul4.className ="news_list_ul4 on";
            news_list_ul4.style.display = "block";
            news_list_ul5.className ="news_list_ul5";
            news_list_ul5.style.display = "none";

        }
        if(i==4){
            news_list_ul1.className = "news_list_ul1";
            news_list_ul1.style.display = "none";
            news_list_ul2.className ="news_list_ul2";
            news_list_ul2.style.display = "block";
            news_list_ul3.className ="news_list_ul3";
            news_list_ul3.style.display = "none";
            news_list_ul4.className ="news_list_ul4";
            news_list_ul4.style.display = "none";
            news_list_ul5.className ="news_list_ul5 on";
            news_list_ul5.style.display = "block";

            }
        }
    
    }

}
getList();

/* 
获取人物信息事件
*/
let role_btn = document.getElementsByClassName('role-btn')[0].getElementsByTagName('a');
let role_box1 = document.getElementsByClassName('role-show-box1')[0];
let role_box2 = document.getElementsByClassName('role-show-box2')[0];
let role_box3 = document.getElementsByClassName('role-show-box3')[0];
let role_box4 = document.getElementsByClassName('role-show-box4')[0];
let role_box5 = document.getElementsByClassName('role-show-box5')[0];
let role_box6 = document.getElementsByClassName('role-show-box6')[0];
let role_box7 = document.getElementsByClassName('role-show-box7')[0];
let role_box8 = document.getElementsByClassName('role-show-box8')[0];
let role_box9 = document.getElementsByClassName('role-show-box9')[0];
console.log("role的长度为："+role_btn.length);
function getRole(){
    for(let i=0;i<role_btn.length;i++){
        role_btn[i].onclick = ()=>{
            for(let j=0;j<role_btn.length;j++){
                role_btn[j].className = "";
            }
            role_btn[i].className = "on";
            if(i==0){
                role_box1.className = "role-show-box1 on"
                role_box1.style.display = "block";
                role_box2.className = "role-show-box2"
                role_box2.style.display = "none";
                role_box3.className = "role-show-box3"
                role_box3.style.display = "none";
                role_box4.className = "role-show-box4"
                role_box4.style.display = "none";
                role_box5.className = "role-show-box5"
                role_box5.style.display = "none";
                role_box6.className = "role-show-box6"
                role_box6.style.display = "none";
                role_box7.className = "role-show-box7"
                role_box7.style.display = "none";
                role_box8.className = "role-show-box8"
                role_box8.style.display = "none";
                role_box9.className = "role-show-box9"
                role_box9.style.display = "none";        
            }
            if(i==1){
                role_box1.className = "role-show-box1"
                role_box1.style.display = "none";
                role_box2.className = "role-show-box2 on"
                role_box2.style.display = "block";
                role_box3.className = "role-show-box3"
                role_box3.style.display = "none";
                role_box4.className = "role-show-box4"
                role_box4.style.display = "none";
                role_box5.className = "role-show-box5"
                role_box5.style.display = "none";
                role_box6.className = "role-show-box6"
                role_box6.style.display = "none";
                role_box7.className = "role-show-box7"
                role_box7.style.display = "none";
                role_box8.className = "role-show-box8"
                role_box8.style.display = "none";
                role_box9.className = "role-show-box9"
                role_box9.style.display = "none";    
            }
            if(i==2){
                role_box1.className = "role-show-box1"
                role_box1.style.display = "none";
                role_box2.className = "role-show-box2"
                role_box2.style.display = "none";
                role_box3.className = "role-show-box3 on"
                role_box3.style.display = "block";
                role_box4.className = "role-show-box4"
                role_box4.style.display = "none";
                role_box5.className = "role-show-box5"
                role_box5.style.display = "none";
                role_box6.className = "role-show-box6"
                role_box6.style.display = "none";
                role_box7.className = "role-show-box7"
                role_box7.style.display = "none";
                role_box8.className = "role-show-box8"
                role_box8.style.display = "none";
                role_box9.className = "role-show-box9"
                role_box9.style.display = "none";    
            }
            if(i==3){
                role_box1.className = "role-show-box1"
                role_box1.style.display = "none";
                role_box2.className = "role-show-box2"
                role_box2.style.display = "none";
                role_box3.className = "role-show-box3"
                role_box3.style.display = "none";
                role_box4.className = "role-show-box4 on"
                role_box4.style.display = "block";
                role_box5.className = "role-show-box5"
                role_box5.style.display = "none";
                role_box6.className = "role-show-box6"
                role_box6.style.display = "none";
                role_box7.className = "role-show-box7"
                role_box7.style.display = "none";
                role_box8.className = "role-show-box8"
                role_box8.style.display = "none";
                role_box9.className = "role-show-box9"
                role_box9.style.display = "none";    
            }
            if(i==4){
                role_box1.className = "role-show-box1"
                role_box1.style.display = "none";
                role_box2.className = "role-show-box2"
                role_box2.style.display = "none";
                role_box3.className = "role-show-box3"
                role_box3.style.display = "none";
                role_box4.className = "role-show-box4"
                role_box4.style.display = "none";
                role_box5.className = "role-show-box5 on"
                role_box5.style.display = "block";
                role_box6.className = "role-show-box6"
                role_box6.style.display = "none";
                role_box7.className = "role-show-box7"
                role_box7.style.display = "none";
                role_box8.className = "role-show-box8"
                role_box8.style.display = "none";
                role_box9.className = "role-show-box9"
                role_box9.style.display = "none";    
            }
            if(i==5){
                role_box1.className = "role-show-box1"
                role_box1.style.display = "none";
                role_box2.className = "role-show-box2"
                role_box2.style.display = "none";
                role_box3.className = "role-show-box3"
                role_box3.style.display = "none";
                role_box4.className = "role-show-box4"
                role_box4.style.display = "none";
                role_box5.className = "role-show-box5"
                role_box5.style.display = "none";
                role_box6.className = "role-show-box6 on"
                role_box6.style.display = "block";
                role_box7.className = "role-show-box7"
                role_box7.style.display = "none";
                role_box8.className = "role-show-box8"
                role_box8.style.display = "none";
                role_box9.className = "role-show-box9"
                role_box9.style.display = "none";    
            }
            if(i==6){
                role_box1.className = "role-show-box1"
                role_box1.style.display = "none";
                role_box2.className = "role-show-box2"
                role_box2.style.display = "none";
                role_box3.className = "role-show-box3"
                role_box3.style.display = "none";
                role_box4.className = "role-show-box4"
                role_box4.style.display = "none";
                role_box5.className = "role-show-box5"
                role_box5.style.display = "none";
                role_box6.className = "role-show-box6"
                role_box6.style.display = "none";
                role_box7.className = "role-show-box7 on"
                role_box7.style.display = "block";
                role_box8.className = "role-show-box8"
                role_box8.style.display = "none";
                role_box9.className = "role-show-box9"
                role_box9.style.display = "none";    
            }
            if(i==7){
                role_box1.className = "role-show-box1"
                role_box1.style.display = "none";
                role_box2.className = "role-show-box2"
                role_box2.style.display = "none";
                role_box3.className = "role-show-box3"
                role_box3.style.display = "none";
                role_box4.className = "role-show-box4"
                role_box4.style.display = "none";
                role_box5.className = "role-show-box5"
                role_box5.style.display = "none";
                role_box6.className = "role-show-box6"
                role_box6.style.display = "none";
                role_box7.className = "role-show-box7"
                role_box7.style.display = "none";
                role_box8.className = "role-show-box8 on"
                role_box8.style.display = "block";
                role_box9.className = "role-show-box9"
                role_box9.style.display = "none";    
            }
            if(i==8){
                role_box1.className = "role-show-box1"
                role_box1.style.display = "none";
                role_box2.className = "role-show-box2"
                role_box2.style.display = "none";
                role_box3.className = "role-show-box3"
                role_box3.style.display = "none";
                role_box4.className = "role-show-box4"
                role_box4.style.display = "none";
                role_box5.className = "role-show-box5"
                role_box5.style.display = "none";
                role_box6.className = "role-show-box6"
                role_box6.style.display = "none";
                role_box7.className = "role-show-box7"
                role_box7.style.display = "none";
                role_box8.className = "role-show-box8"
                role_box8.style.display = "none";
                role_box9.className = "role-show-box9 on"
                role_box9.style.display = "block";    
            }
        }

    }
}
getRole();

// 小轮播
function rotateW(){
    let index = 1;
    let auto = null;
    let left = 0;
    let status = false;
    let write_list = document.getElementById('write_list');

    function nextWrite() {
        if (status) {
            return false;
        }
        left = parseInt(write_list.style.left); //现在的起点位置
        let new_left = left - 170; //终点位置

        if (new_left < -680) {
            new_left = 0;
        }
        index = ++index > 3 ? 1 : index;
        console.log("write轮播：" + index);

        animateWrite(new_left);


    }

    // 轮播动画

    console.log(write_list);

    function animateWrite(new_left) {
        status = true;
        let left = parseInt(write_list.style.left);
        let offset = new_left - left; //总距离
        let interval = 10;
        let speed = offset / (170 / interval);

        // 先执行后等待
        function go() {
            left = parseInt(write_list.style.left); //当前位置
            let next_left = left + speed; //下一帧
            write_list.style.left = next_left + "px";
            if (speed < 0 && next_left >= new_left || speed > 0 && next_left <= new_left) {
                setTimeout(() => {
                    go();


                }, interval);
            } else {

                write_list.style.left = new_left + "px";
                if (new_left <= -680) {
                    write_list.style.left = -170 + "px";
                }
                if (new_left >= 0) {
                    write_list.style.left = -510 + "px";
                }
                changeDotWrite();
                status = false; // 动画结束，并且把动画状态设置为false
            }

        }
        go();


    }
    // 自动轮播图片的方法
    function autoPlayWrite() {

        auto = setInterval(() => {
            nextWrite();
            // changeFade();
        }, 3000);


    }

    //绑定焦点事件
    let write_btn = document.getElementsByClassName('write_btn')[0].getElementsByTagName('span');
    console.log(write_btn.length);
    for (let i = 0; i < write_btn.length; i++) {
        write_btn[i].onclick = () => {

            if (index == i + 1 || status) {
                return false;
            }
            let new_index = i + 1;
            let new_left = (i + 1) * -170;

            index = new_index;
            animateWrite(new_left);
        }
    }

    //检查并显示对应图片焦点的方法
    function changeDotWrite() {
        for (let i = 0; i < write_btn.length; i++) {
            write_btn[i].className = "";
        }
        write_btn[index - 1].className = "on";
    }

    autoPlayWrite();

}
rotateW();