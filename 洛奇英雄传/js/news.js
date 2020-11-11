let nav_list = document.getElementsByClassName('nav-list')[0].getElementsByTagName('a');
let news_list1 = document.getElementsByClassName('news-list1')[0];
let news_list2 = document.getElementsByClassName('news-list2')[0];
let news_list3 = document.getElementsByClassName('news-list3')[0];
let news_list4 = document.getElementsByClassName('news-list4')[0];
let news_list5 = document.getElementsByClassName('news-list5')[0];
console.log("nav_list的长度："+nav_list.length);
function getNews(){
    for(let i=0;i<nav_list.length;i++){
        nav_list[i].onclick = ()=>{
            for(let j= 0;j<nav_list.length;j++){
                nav_list[j].className = "";
            }
            nav_list[i].className = "on";
        if(i==0){
            news_list1.className = "news_list1 on";
            news_list1.style.display = "block";
            news_list2.className = "news_list2";
            news_list2.style.display = "none";
            news_list3.className = "news_list3";
            news_list3.style.display = "none";
            news_list4.className = "news_list4";
            news_list4.style.display = "none";
            news_list5.className = "news_list5";
            news_list5.style.display = "none";

        }
        if(i==1){
            news_list1.className = "news_list1";
            news_list1.style.display = "none";
            news_list2.className = "news_list2 on";
            news_list2.style.display = "block";
            news_list3.className = "news_list3";
            news_list3.style.display = "none";
            news_list4.className = "news_list4";
            news_list4.style.display = "none";
            news_list5.className = "news_list5";
            news_list5.style.display = "none";
            

        }
        if(i==2){
            news_list1.className = "news_list1";
            news_list1.style.display = "none";
            news_list2.className = "news_list2";
            news_list2.style.display = "none";
            news_list3.className = "news_list3 on";
            news_list3.style.display = "block";
            news_list4.className = "news_list4";
            news_list4.style.display = "none";
            news_list5.className = "news_list5";
            news_list5.style.display = "none";
            
        
    }if(i==3){
        news_list1.className = "news_list1";
        news_list1.style.display = "none";
        news_list2.className = "news_list2";
        news_list2.style.display = "none";
        news_list3.className = "news_list3";
        news_list3.style.display = "none";
        news_list4.className = "news_list4 on";
        news_list4.style.display = "block";
        news_list5.className = "news_list5";
        news_list5.style.display = "none";
        
    }if(i==4){
        news_list1.className = "news_list1";
        news_list1.style.display = "none";
        news_list2.className = "news_list2";
        news_list2.style.display = "none";
        news_list3.className = "news_list3";
        news_list3.style.display = "none";
        news_list4.className = "news_list4";
        news_list4.style.display = "none";
        news_list5.className = "news_list5 on";
        news_list5.style.display = "block";
          }
      }
   
    }
   
}
getNews();