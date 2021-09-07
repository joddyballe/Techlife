<?php
// koneksi ke databse techlife
$conn = mysqli_connect('localhost', 'root', '', 'techlife');

function registrasi($data)
{
    global $conn;

    $username = $data["username"];
    $password = mysqli_real_escape_string($conn, $data["password"]);
    $passconfirm = mysqli_real_escape_string($conn, $data["passconfirm"]);

    // cek konfirmasi password
    if ($passconfirm !== $password) {
        echo "<script> alert('Konfirmasi kata sandi tidak cocok') </script>";
        return false;
    } else {
        // cek ketersediaan email
        $usernamequery = mysqli_query($conn, "SELECT username FROM `users` WHERE username='$username'");
        if (mysqli_fetch_assoc($usernamequery)) {
            echo "<script> alert('Username sudah digunakan. Gunakan username yang lain') </script>";
            return false;
        }
    }

    // enkripsi password pada database
    $password = password_hash($password, PASSWORD_DEFAULT);

    // tambahkan user baru ke database
    mysqli_query($conn, "INSERT INTO `users` VALUES (NULL, '$username', '$password')");

    return mysqli_affected_rows($conn);
}
