<template>
    <div class="container">
        <h3>sign up for newsletter</h3>
        <p>sign up to stay up to date in our work around the world. 50,000+ people already have.</p>
        <div class="input">
            <input type="text" class="inpt" placeholder="Enter Your Email Here">
            <button>sign up</button>
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url("https://images.unsplash.com/photo-1599527398744-ae6e1833256e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8eWVsbG93JTIwY29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
        background-size: cover;
    }

    h3{
        text-transform: uppercase;
        color: black;
        font-size: 30px;
    }

    p{
        color: black;
        font-size: 17px;
    }

    .input{
        display: flex;
        width: 40%;
        padding-bottom: 30px;
    }

    input{
        padding: 10px;
        border: none;
        outline: none;
        width: 100%;
    }

    input::placeholder{
        color: gray;
    }

    button{
        width: 100px;
        padding: 10px;
        background-color: black;
        color: white;
        text-transform: uppercase;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        input{
            padding: 5px;
        }

        button{
            padding: 5px;
        }
    }
</style>
