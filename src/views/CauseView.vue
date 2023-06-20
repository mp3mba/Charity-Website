<template>
  <div class="team">
    <div class="container">
      <h1>causes</h1>
      <hr>
      <h3>involved & create greater world</h3>
    </div>
    <div class="wrapper">
      <div class="box-wrapper">
        <div class="box">
      <div class="child">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1622865709218-9cda3d11f595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNtaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
        </div>
        <h2>Gwanuka Neneko</h2>
        <p class="desc">
          I recently had the pleasure of meeting Maisha, who has been participating in a charity team for the past three years. Her dedication and passion for making a difference in the world left a profound impact on me.
        </p>
      </div>
    </div>
      <div class="box">
      <div class="child">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1624188327913-e0c59aaaa3ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
        </div>
        <h2>Kilu Ndile</h2>
        <p class="desc">
          I recently had the pleasure of meeting Maisha, who has been participating in a charity team for the past three years. Her dedication and passion for making a difference in the world left a profound impact on me.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="child">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNtaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
        </div>
        <h2>Guhuma Jocholi</h2>
        <p class="desc">
          I recently had the pleasure of meeting Maisha, who has been participating in a charity team for the past three years. Her dedication and passion for making a difference in the world left a profound impact on me.
        </p>
      </div>
    </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  .team{
    width: 100%;
    height: 100%;
  }
  .container{
    background-image: url("https://images.unsplash.com/photo-1664990594674-418f27010fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
    background-size: cover;
    width: 100%;
    height: 50%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(228, 228, 228, 0.8);
  }

  .container h1{
    text-transform: uppercase;
    color: yellow;
    font-size: 70px;
    font-weight: 900;
  }

  .container h3{
    color: white;
    text-transform: capitalize;
    font-weight: 700;
  }

  .wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  .box-wrapper{
    width: 80%;
    display: flex;
    gap: 20px;
  }

  .box{
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(240, 240, 240);
  }

  .child{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .child h2{
    width: 100%;
  }
  .child h2, .child p{
    text-align: left;
  }

  .image{
    width: 100%;
    height: 150px;
  }

  .image img{
    width: 100%;
    height: 100%;
  }

  hr{
    border: 3px solid white;
    margin-top: 0;
    width: 100px;
  }

  @media (max-width: 768px){
    .box-wrapper{
      flex-direction: column;
    }

    .image{
      height: 300px;
    }
  }

</style>
