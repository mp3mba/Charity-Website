<template>
    <div class="container">
		<h1>Donate to Our Charity</h1>

		<form>
			<label for="name">Full Name:</label>
			<input type="text" id="name" name="name" required>

			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required>

			<label for="phone">Phone:</label>
			<input type="number" id="phone" name="phone" required>

			<label for="amount">Donation Amount:</label>
			<select id="amount" name="amount" required>
				<option value="10">$10</option>
				<option value="25">$25</option>
				<option value="50">$50</option>
				<option value="100">$100</option>
			</select>

			<input type="submit" value="Donate Now">
		</form>

		<p>Thank you for your support! Your donation will help us continue to provide essential services to those in need.</p>
	</div>

</template>

<script>
export default {
  mount() {
    console.log('clicked')
  },
}
</script>

<style scoped>
  .container {
			max-width: 800px;
			margin: 0 auto;
			padding: 50px 20px;
		}

		h1 {
			font-size: 36px;
			font-weight: bold;
			margin-bottom: 30px;
			text-align: center;
		}

		form {
			background-color: #fff;
			padding: 30px;
			border-radius: 5px;
			box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
			margin-bottom: 30px;
		}

		label {
			font-size: 18px;
			font-weight: bold;
			display: block;
			margin-bottom: 10px;
		}

		input[type="text"], input[type="email"], input[type="number"], select {
			width: 100%;
			padding: 10px;
			border: none;
			border-radius: 5px;
			margin-bottom: 20px;
			font-size: 16px;
			background-color: #f2f2f2;
			color: #333;
		}

		select option {
			color: #333;
		}

		input[type="submit"] {
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

		input[type="submit"]:hover {
			background-color: #555;
		}
</style>
