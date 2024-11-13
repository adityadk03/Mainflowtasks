<?php 

include 'connect.php';

if(isset($_POST['signUp'])){
    $firstName=$_POST['First name'];
    $lastName=$_POST['Last name'];
    $email=$_POST['Email'];
    $password=$_POST['Password'];
    $password=md5($password);

     $checkEmail="SELECT * From users where Email='$email'";
     $result=$conn->query($checkEmail);
     if($result->num_rows>0){
        echo "Email Address Already Exists !";
     }
     else{
        $insertQuery="INSERT INTO users(FirstName,LastName,Email,Password)
                       VALUES ('$firstName','$lastName','$email','$password')";
            if($conn->query($insertQuery)==TRUE){
                header("location: index.php");
            }
            else{
                echo "Error:".$conn->error;
            }
     }
   

}

if(isset($_POST['signIn'])){
   $email=$_POST['Email'];
   $password=$_POST['Password'];
   $password=md5($password) ;
   
   $sql="SELECT * FROM users WHERE email='$email' and Password='$password'";
   $result=$conn->query($sql);
   if($result->num_rows>0){
    session_start();
    $row=$result->fetch_assoc();
    $_SESSION['Email']=$row['Email'];
    header("Location: homepage.php");
    exit();
   }
   else{
    echo "Not Found, Incorrect Email or Password";
   }

}
?>