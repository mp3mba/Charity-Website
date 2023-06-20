<template>
    <div class="container">
      <div class="wrapper">
        <div class="box-1">
            <h2>charity</h2>
            <p class="desc"><span><i class="fa-solid fa-location-dot"></i></span> <span>123 block q, mwanza </span></p>
            <p class="desc"><span><i class="fa-solid fa-phone"></i></span> <span>+255 769 323 980</span></p>
            <p class="desc"><span><i class="fa-regular fa-envelope"></i></span> <span>charityhome@gmail.com</span></p>
            <p class="icons"><span><i class="fa-brands fa-facebook-f"></i></span> <span><i class="fa-brands fa-twitter"></i></span><span><i class="fa-brands fa-google-plus-g"></i></span></p>
        </div>
        <div class="box-2">
            <h2>pages</h2>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Causes</a>
            <a href="#">News</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
        </div>
        <div class="box-3">
            <h2>latest news</h2>
            <p class="desc"><span class="span">safe water for everyone</span><span class="date">April 03, 2023</span></p>
            <p class="desc"><span class="span">children are made up of their mind</span><span class="date">April 03, 2023</span></p>
            <p class="desc"><span class="span">foregoing lorem narration</span><span class="date">April 03, 2023</span></p>
        </div>
        <div class="box-4">
            <h2>instagram</h2>
            <div class="img-box">
                <div class="img">
                    <img src="https://images.unsplash.com/photo-1664990594667-9bd4c60cbcfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
                    <img src="https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
                    <img src="https://images.unsplash.com/photo-1510025369388-f613ec4bc10b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
                </div>

                <div class="img">
                    <img src="https://images.unsplash.com/photo-1591851395349-6d8c2fe76e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
                    <img src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
                    <img src="https://images.unsplash.com/photo-1586628711525-a7fedb92d80f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
 .container{
    width: 100%;
    min-height: 45%;
    background-color: rgb(46, 46, 46);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
 }

 .container .wrapper{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 20px;
 }

 .box-1, .box-2,.box-3,.box-4{
    width: 25%;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    text-align: left;

 }

 .box-1 h2,  .box-2 h2, .box-3 h2, .box-4 h2{
    text-transform: uppercase;
    color: yellow;
    font-size: 23px;
 }

 .box-3 .desc{
    display: flex;
    flex-direction: column;
 }
 .span{
    color: rgb(156, 154, 154);
    font-size: 18px;
 }

 .date{
    color: yellow;
    font-weight: 700;
 }

 .box-1 .desc,  .box-2 a{
    color: rgb(156, 154, 154);
    text-decoration: none;
 }

 .img-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
 }

 .img{
    width: 100%;
    display: flex;
    gap: 5px;
 }

 .img img{
    width: 33.33%;
    filter: grayscale(50%);
 }

 .icons{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    gap: 5px;
 }
 .icons span{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 10px;
    background-color: rgb(143, 142, 142);
    display: flex;
    justify-content: center;
    align-items: center;
 }

 .icons span i{
    color: black;
 }

 @media (max-width: 768px) {
   .wrapper{
      flex-direction: column;
   }
 }
</style>