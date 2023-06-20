<template>
    <div class="container">
        <div class="box">
            <div class="child">
               <div class="wrapper-1">
                <h2 class="header">urgent cause</h2>
                <p class="paragraph">
                    Millions of families around the world are struggling to make ends meet. The COVID-19 pandemic has caused widespread unemployment and financial insecurity, leaving many without access to basic necessities like food and clean water.
                </p>
               </div>
                <div class="wrapper">
                    <div class="box-1">
                        <h1>target</h1>
                        <h2>$25000</h2>
                    </div>
                    <div class="box-2">
                        <h1>65% done</h1>
                        <h2>donate</h2>
                    </div>
                    <div class="box-3">
                        <h1>collected</h1>
                        <h2>$15000</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        background: url("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHMlMjB0b2dldGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
        background-color: rgba(0, 0, 0, 0);
        background-size: cover;
        background-attachment: fixed;
        min-height: 100%;
        display: flex;
        justify-content: center;
    }

    .box{
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
    }

    .child{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
    }

    .wrapper-1{
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header{
        text-transform: uppercase;
        color: rgb(48, 36, 36);
    }

    .paragraph{
        color: rgb(238, 5, 5);
    }

    .child h2{
        font-size: 35px;
    }

    .child h2, .child p{
        color: white;
        text-align: center;
    } 

    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper .box-1, .wrapper .box-3{
        padding: 40px;
        height: 200px;
        background-color: white;
    }

    .wrapper .box-2{
        padding: 40px;
        height: 250px;
        background-color: yellow;
    }

    .box-1 h1,.box-1 h2,.box-2 h1,.box-2 h2,.box-3 h1,.box-3 h2{
        color: black;
        text-transform: uppercase;
    }

    .box-1 h1,.box-2 h1,.box-3 h1{
        font-size: 23px;
    }

    @media (max-width: 768px) {
        .child{
        width: 100%;
    }

    .wrapper-1{
        width: 90%;
    }

    .wrapper{
       flex-direction: column;
       margin-bottom: 25px;
    }

    .wrapper .box-2{
        width: 250px;
    }

    .child{
        padding-bottom: 10px;
    }
    
    }
</style>