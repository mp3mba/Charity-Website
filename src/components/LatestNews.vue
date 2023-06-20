<template>
    <div class="container">
        <h2>latest news</h2>
        <div class="wrapper">
            <div class="box-1">
                <div class="img">
                    <img src="https://images.unsplash.com/photo-1523396140703-e5bdad4e5dea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxjaGlsZHJlbiUyMGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
                </div>
                <div class="desc">
                  <div class="desc-1">
                    <h3>safe water for everyone</h3>
                    <small>03 April 2023</small>
                    <p>
                        Access to safe water is a basic human right, but for millions of people around the world, it's a luxury they can't afford.
                    </p>
                  </div>
                    <button>read more</button>
                </div>
            </div>
            <div class="box-1">
                <div class="img">
                    <img src="https://images.unsplash.com/photo-1637148778990-621fbe8a8358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUyfHxjaGlsZHJlbiUyMGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
                </div>
                <div class="desc">
                    <div class="desc-1">
                        <h3>children are made up of their mind</h3>
                        <small>03 April 2023</small>
                        <p>
                            Do you want to make a difference in the world? You can! It's never too early to start making a positive impact on the world around you..
                        </p>
                    </div>
                    <button>read more</button>
                </div>
            </div>
            <div class="box-1">
                <div class="img">
                    <img src="https://images.unsplash.com/photo-1584789874194-b82d600b16f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxjaGlsZHJlbiUyMGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
                </div>
                <div class="desc">
                   <div class="desc-1">
                        <h3>forgoing lorem narrationn</h3>
                        <small>03 April 2023</small>
                        <p>
                            Thanks to the support of generous donors like you, our charity has been able to make a meaningful difference in the lives of people in need.                    
                        </p>
                   </div>
                    <button>read more</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container > h2{
        text-transform: uppercase;
        font-size: 30px;
    }

    .wrapper{
        width: 75%;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .desc-1{
        height: 200px
    }

    .img img{
        width: 100%;
        height: 150px;
    }

    .box-1{
        min-height: 100%;
        text-align: left;
        margin-bottom: 20px;
    }

    .desc h3{
        text-transform: uppercase;
    }

    button{
        padding: 10px 25px;
        border: 1px solid gray;
        background: transparent;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 700;
    }

    button:hover{
        background-color: yellow;
        border: none;
        box-shadow: 0 0 20px 0 rgba(11, 10, 2, 0.2);        
    }

    @media (max-width: 768px) {
        .wrapper{
            flex-direction: column;
        }

        .img img{
            height: 250px;
        }

        .desc-1{
            height: 140px;
        }

        .box-1{
            padding: 6px;
            box-shadow: 0 0 20px 0 rgba(187, 170, 41, 0.2);       
         }
    }
</style>

