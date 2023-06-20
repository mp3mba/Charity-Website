<template>
  <div class="about">
    <div class="container">
      <h1>about us</h1>
    </div>
    <div class="box">
      <h3>what we offer?</h3>
      <h1>
        Solutions to Help People in Need and Save the Planet
      </h1>
      <p>
        We have curated the following volunteering opportunities for you! Find the opportunity that strikes a chord to kick start your volunteering journey today! Volunteering in local communities also provides many benefits for young people and their development. This includes building a sense of community, and developing a range of skills such as team working, interpersonal skills, and problem-solving, all of which are crucial for their success in higher education and the workplace
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
