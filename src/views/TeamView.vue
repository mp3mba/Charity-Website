<template>
  <div class="team">
    <div class="container">
      <h1>our staff</h1>
      <h3>get to know our happiness team</h3>
    </div>
    <div class="wrapper">
      <div class="box-wrapper">
        <div class="box">
      <div class="child">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
        </div>
        <h2>Glory Davis</h2>
        <p class="desc">
          I recently had the pleasure of meeting Maisha, who has been participating in a charity team for the past three years. Her dedication and passion for making a difference in the world left a profound impact on me.
        </p>
      </div>
    </div>
      <div class="box">
      <div class="child">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
        </div>
        <h2>Giana Levi</h2>
        <p class="desc">
          I recently had the pleasure of meeting Maisha, who has been participating in a charity team for the past three years. Her dedication and passion for making a difference in the world left a profound impact on me.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="child">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1599698011977-c08128ff1652?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
        </div>
        <h2>Maisha love</h2>
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
    background-image: url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eSUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
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

  @media (max-width: 768px){
    .box-wrapper{
      flex-direction: column;
    }

    .image{
      height: 300px;
    }
  }

</style>
