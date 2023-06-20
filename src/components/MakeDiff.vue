<template>
    <div class="container">
        <div class="box-left">
            <div class="wrap">
                <h1>let's make a difference today</h1>
                <p>
                    Making a difference in the lives of those less fortunate is a noble act that can bring about tremendous change. With your support, we can make a real difference in the lives of those in need. Your donation can provide food, shelter, and education to individuals and families struggling to make ends meet. Every contribution, no matter how small, can have a significant impact on the lives of those who need it most.
                </p>
                <div class="btn">
                    <button class="one">learn more</button>
                    <button class="two">donate now</button>
                </div>
            </div>
        </div>

        <div class="box-right">
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="charity-image">
        </div>
    </div>
</template>

<style scoped>
    .container{
        min-width: 100%;
        min-height: 60%;
        display: flex;
        margin-top: 65px;
        background-color: rgb(241, 241, 241);;
    }

    .box-left{
        width: 50%;
        display: flex;
        justify-content: center;
    }

    .box-left .wrap{
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
    }

    .box-right{
        width: 50%;
    }

    div .btn{
        width: 100%;
        display: flex;
        gap: 40px;
        text-align: left;
        margin-bottom: 10px;
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
        align-items: center;
    }

    .box-left{
        width: 90%;
    }

    .box-left .wrap{
        width: 100%;
        margin-bottom: 15px;
    }

    .box-right{
        width: 100%;
    }

    div .btn{
        justify-content: center;
    }

    }
</style>
