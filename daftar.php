<?php
require 'dbconn.php'; //koneksi ke database
if (isset($_POST["signup"])) {
	if (registrasi($_POST) > 0) {
		$info = true;;
	} else {
		echo mysqli_error($conn);
	}
}
?>

<!DOCTYPE html>
<html>

<head>
	<title>Techlife</title>
	<link rel="icon" type="image/png" href="image/logo.png" />
	<link rel="stylesheet" type="text/css" href="REGISTER/css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/a81368914c.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
	<ul>
		<li><a href="index.html">Home</a></li>
		<li><a href="materi_0.html">Materi</a></li>
		<li><a href="kuis.html">Quis</a></li>
		<li><a href="about.html">About</a></li>
		<li><a href="daftar.php">Register</a></li>
	</ul>

	<img class="wave" src="REGISTER/img/wave.png">
	<div class="container">
		<div class="img">
			<img src="REGISTER/img/bg.png">
		</div>
		<div class="login-content">
			<form action="" method="POST">
				<?php
				if (isset($info)) {
					echo  "Registrasi berhasil.";
				}
				?>
				<img src="REGISTER/img/avatar.png">
				<h2 class="title">Welcome</h2>
				<div class="input-div one">
					<div class="i">
						<i class="fas fa-user"></i>
					</div>
					<div class="div">
						<h5>Username</h5>
						<input type="text" class="input" name="username" id="username">
					</div>
				</div>
				<div class="input-div pass">
					<div class="i">
						<i class="fas fa-lock"></i>
					</div>
					<div class="div">
						<h5>Password</h5>
						<input type="password" class="input" name="password" id="password">
					</div>
				</div>
				<div class="input-div pass">
					<div class="i">
						<i class="fas fa-lock"></i>
					</div>
					<div class="div">
						<h5>Confirm Password</h5>
						<input type="password" class="input" name="passconfirm" id="passconfirm">
					</div>
				</div>
				<input type="submit" name="signup" class="btn" value="Daftar">
			</form>
		</div>
	</div>
	<script type="text/javascript" src="REGISTER/js/main.js"></script>
</body>

</html>