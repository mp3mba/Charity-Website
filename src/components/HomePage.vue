<template>
    <div class="container">
        <div class="wrapper">
            <h1>change the life of those, who have no <span>hope</span></h1>
            <p>be the reason someone smiles today</p>
            <button>donate now</button>
        </div>
    </div>
</template>

<style scoped>
.container{
  width: 100%;
  min-height: 100%;
  background-image: url("https://images.unsplash.com/photo-1460013477427-b0cce3e30151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper{
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
}

.wrapper h1{
  color: white;
  font-size: 70px;
  text-transform: uppercase;
  text-align: center;
}

.wrapper h1 span{
  color: yellow;
}

.wrapper p{
  color: white;
  text-transform: capitalize;
  margin-bottom: 43px;
  font-size: 19px;
}

.wrapper button{
  padding: 15px;
  background-color: yellow;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
}

@media (max-width: 768px) {
    .wrapper h1{
      font-size: 50px;
    }

    .wrapper p{
      font-size: 15px;
    }

    .wrapper button{
    padding: 12px;
    background-color: yellow;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
  }

  }

</style>