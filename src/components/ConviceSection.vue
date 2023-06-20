<template>
    <div class="container">
        <div class="wrapper">
            <h1>Get Involved</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo rem tenetur, a totam magni exercitationem neque eveniet corrupti laborum commodi distinctio maiores nemo dolorem quas minus natus itaque? Et.
            </p>
            <div class="box">
                <div class="box1">
                    <p class="up">
                        <span><i class="fa-regular fa-handshake"></i></span>
                        <span class="desc">Volunteering</span>
                    </p>
                    <p class="btm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perspiciatis repellat, culpa impedit vero praesentium reiciendis iste blanditiis porro et dolores explicabo eligendi quo ducimus earum aliquam. At, ipsa vitae.
                    </p>    
                </div>
                <div class="box1">
                    <p class="up">
                        <span><i class="fa-solid fa-sack-dollar"></i></span>
                        <span class="desc">donating</span>
                    </p>
                    <p class="btm-yellow">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perspiciatis repellat, culpa impedit vero praesentium reiciendis iste blanditiis porro et dolores explicabo eligendi quo ducimus earum aliquam. At, ipsa vitae.
                    </p>    
                </div>
                <div class="box1">
                    <p class="up">
                        <span><i class="fa-solid fa-user-nurse"></i></span>
                        <span class="desc">supporting</span>
                    </p>
                    <p class="btm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, perspiciatis repellat, culpa impedit vero praesentium reiciendis iste blanditiis porro et dolores explicabo eligendi quo ducimus earum aliquam. At, ipsa vitae.
                    </p>    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
  width: 100%;
  display: flex;
  justify-content: center;
}

.wrapper{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper h1{
  margin-top: 40px;
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
}

.wrapper p{
  padding: 25px;
  text-align: center;
  margin-bottom: 40px;
  text-transform: capitalize;
  background-color: rgb(241, 241, 241);
  border-radius: 10px;
}

.box{
    display: flex;
    justify-content: center;
    gap: 30px;
}

.box1{
    display: flex;
    flex-direction: column;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
}

.box1 .up{
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    padding: 12px 0;
    font-weight: 700;
    font-size: 23px;
}

.box1 .up span > i{
    font-size: 60px;
}

.box1 .up .desc{
    padding-top: 20px;
}

.box1 .btm{
    padding: 25px 30px;
    background-color: black;
    color: rgb(210, 208, 208);
    text-transform: capitalize;
}

.box1 .btm-yellow{
    padding: 25px 30px;
    background-color: #fdd44f;
    color: rgb(210, 208, 208);
    text-transform: capitalize;
    color: black;
}

@media (max-width: 768px) {
.box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.box1 .up span > i{
    color: black;
}
}
</style>