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
  height: 100%;
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

</style>