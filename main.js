var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"]; 
var student=["family_book","Sharad","Sunil","Kyle","leye","Anita"];
var i=0;
function swtich() {
    document.getElementById("img").src=images[i];
    document.getElementById("display").innerHTML=student[i];
    i++;
    if(i>6) {
        i=0;
    }
}