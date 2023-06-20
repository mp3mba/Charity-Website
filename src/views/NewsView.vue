<template>
  <div class="about">
    <div class="container">
      <h1>news</h1>
    </div>
    <div class="box">
      <h3>what happened in this week?</h3>
      <h1>
        Solutions to Help People in Need and Save the Planet
      </h1>
      <p>
        I recently had the pleasure of meeting John, who has been participating in a charity team for the past three years. His dedication and passion for making a difference in the world left a profound impact on me. John has been raising funds for a local animal shelter and has volunteered countless hours to help care for the animals. He has organized fundraisers, held adoption events, and even fostered several animals in his home. His commitment to the cause is unwavering, and his compassion for the animals he serves is truly inspiring. Seeing the joy in the faces of the animals as they find their forever homes is a testament to the hard work and dedication that John and his team have put in.
      </p>
    </div>
  </div>
</template>

<style scoped>
  .about{
    width: 100vw;
    height: 100vh;
  }
  .container{
    background-image: url("https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxheWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
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

  .box{
    margin-top: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    background-color: rgb(240, 240, 240);
  }

  .box h3{
    text-transform: uppercase;
    font-size: 18px;
    color: rgb(83, 82, 82);
  }

  .box h1{
    text-transform: capitalize;
    font-size: 30px;
  }

  .box p{
    color: rgb(83, 82, 82);
  }
</style>
