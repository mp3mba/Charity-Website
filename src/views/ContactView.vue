<template>
    <div class="contact">
     <div class="container">
        <h1>Contact Us</h1>
      <form action="#" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

        <input type="submit" value="Send" />
      </form>
     </div>

    </div>
</template>

<style scoped>
      .contact{
        width: 100%;
        height: 100%;
        margin: 50px 0;
      }

      .container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
      }

      h1 {
        text-align: center;
        color: #333;
        margin-top: 80px;
      }

      form {
        width: 50%;
        margin: 0 auto;
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      }

      input[type="text"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        font-size: 16px;
      }

      input[type="submit"] {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 50%;
      }

      input[type="submit"]:hover {
        background-color: #555;
      }

      @media (max-width: 768px) {
        form{
          width: 65%;
        }

        input[type="submit"]{
          width: 100%;
        }
      }
</style>
