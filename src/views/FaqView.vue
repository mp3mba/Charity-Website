<template>
  <div class="about">
    <div class="container">
      <h1>faq</h1>
    </div>

    <div class="box">
      <h1>Frequently Asked Questions</h1>

      <div class="faq">
        <h3>What is your charity all about?</h3>
        <p>Our charity is dedicated to helping those in need by providing food, shelter, and other essential services.</p>
      </div>

      <div class="faq">
        <h3>How can I get involved?</h3>
        <p>You can get involved by donating money or volunteering your time to help out at our various events and programs. Visit our <a href="#">Get Involved</a> page for more information.</p>
        <button>Donate Now</button>
      </div>

      <div class="faq">
        <h3>What kind of donations do you accept?</h3>
        <p>We accept monetary donations as well as donations of non-perishable food items, clothing, and other essential items. Visit our <a href="#">Donate</a> page for more information.</p>
        <button>Donate Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about{
    width: 100%;
    height: 100%;
  }
  .container{
    background-image: url("https://images.unsplash.com/photo-1606092195808-3107b7ed4c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYXlpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
    background-size: cover;
    width: 100%;
    height: 60vh;
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

  .box {
			max-width: 800px;
      min-width: 80vh;
			margin: 0 auto;
			padding: 50px 20px;
		}

		.box h1 {
			font-size: 36px;
			font-weight: bold;
			margin-bottom: 30px;
			text-align: center;
		}

		.faq {
			margin-bottom: 30px;
		}

		.faq h3 {
			font-size: 20px;
			font-weight: bold;
			margin-bottom: 10px;
		}

		.faq p {
			font-size: 16px;
			margin-bottom: 20px;
		}

		.faq p:last-of-type {
			margin-bottom: 0;
		}

		.faq button {
			background-color: #333;
			color: #fff;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			margin-top: 20px;
			font-size: 16px;
			transition: background-color 0.3s ease-in-out;
		}

		.faq button:hover {
			background-color: #555;
		}
</style>
