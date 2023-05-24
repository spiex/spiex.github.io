<?php

if (isset($_POST['register'])) {
  // ^ only start the code if the submit button was actually clicked
  require 'database.php';
  // ^ add connection to the database

  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $confirmPassword = $_POST['confirmPassword'];

  // ARE ALL FIELDS FILLED IN?
  if (empty($username) || empty($email) || empty($password) || empty($confirmPassword)) {
      header("Location: ../login.php?error=emptyfields&username=".$username);
      // ^ if any of the fields are actually empty, redirect the user back to the form
      // from register.inc.php go one folder higher ( ../ ), then go to register.php
      exit();
  } elseif (!preg_match("/^[a-zA-Z0-9]*/",$username)) { // search pattern, where to search
      // DOESNT WORK?! ^
      header("Location: ../login.php?error=invalidusername&username=".$username);
      exit();
  } elseif ($password !== $confirmPassword) {
      header("Location: ../login.php?error=passwordsdontmatch&username=".$username);
      exit();
  } else {
      // is the username already taken?
      // PREPARED STATEMENT, SAFE FROM SQL INJECTIONS, SENDS QUERY AND DATA SEPARATELY
      $sql = "SELECT zawodnik FROM users WHERE zawodnik = ?";
      $stmt = mysqli_stmt_init($conn);
      if (!mysqli_stmt_prepare($stmt, $sql)) {
          // test check if the query is ok
          header("Location: ../login.php?error=sqlerror");
          exit();
      } else {
          mysqli_stmt_bind_param($stmt,"s", $username); // assigning data to "?"
          // statement, data type (s = string, i = integer, b = boolean), actual data
          // two string params = "ss", integer and boolean = "ib"
          mysqli_stmt_execute($stmt);
          mysqli_stmt_store_result($stmt); // stores the result back in the $stmt variable
          $rowCount = mysqli_stmt_num_rows($stmt); // 0 or 1

          if ($rowCount > 0) {
              header("Location: ../login.php?error=usernametaken");
              exit();
          } else { // all checks passed, insert data
              $sql = "INSERT INTO users (zawodnik, mail, haslo) VALUES (?, ?, ?)";
              $stmt = mysqli_stmt_init($conn);
              if (!mysqli_stmt_prepare($stmt, $sql)) {
                  header("Location: ../login.php?error=sqlerror");
                  exit();
              } else {
                  // BEFORE UPLOADING, HASH THE PASSWORD FOR SECURITY
                  $hashedPass = password_hash($password, PASSWORD_DEFAULT); // what to hash, how to hash

                  mysqli_stmt_bind_param($stmt,"sss", $username, $email, $hashedPass);
                  // ^ needs to be in the same order as the query
                  mysqli_stmt_execute($stmt);
                  header("Location: ../login.php?success=registered");
                  exit();
              }
          }
      }
  }
  mysqli_stmt_close($stmt);
  // ^ close the statement
  mysqli_close($conn);
  // ^ close the connection to the database to save resources
}


 ?>
