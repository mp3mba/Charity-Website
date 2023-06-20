<template>
    <div class="container">
        <div class="box-left">
            <div class="wrap">
                <h1>we always serve the humanity</h1>
                <p>
                    Serving humanity is a noble and virtuous act that has been encouraged and practiced by individuals and organizations around the world. Charity websites play an important role in promoting and facilitating this act of kindness by providing a platform for people to contribute to the betterment of society.                </p>
                <div class="btn">
                    <button class="one">learn more</button>
                    <button class="two">donate now</button>
                </div>
            </div>
        </div>

        <div class="box-right">
            <img src="https://images.unsplash.com/photo-1601728735713-8561190dc839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGNoaWxkcmVuJTIwY2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="charity-image">
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        min-height: 60%;
        display: flex;
        flex-direction: row-reverse;
        background-color: rgb(241, 241, 241);;
    }

    .box-left{
        width: 50%;
        display: flex;
        justify-content: start;
        margin-left: 35px;
    }

    .box-left .wrap{
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box-right{
        width: 50%;
    }

    div .btn{
        width: 100%;
        display: flex;
        gap: 40px;
        text-align: left;
    }

    button{
        padding: 10px 15px;
        text-transform: uppercase;
        cursor: pointer;
    }

    .btn .one{
        border: 1px solid rgb(95, 95, 95);
    }

    .btn .two{
        border: none;
        background-color: yellow;
    }

    img{
        width: 100%;
        height: 100%;
    }

    .wrap p{
        text-align: left;
    }

    .wrap h1{
        text-transform: uppercase;
        text-align: left;
    }

    @media (max-width: 768px) {
        .container{
            flex-direction: column;
        }

        .box-left{
            justify-content: center;
            margin-bottom: 30px;
            width: 100%;
        }

        .box-left .wrap{
            width: 80%;
        }

        .box-right{
            width: 100%;
        }

    }
</style>
