body{
    background: rgb(200, 220, 224);
}
        .form {
  font-family: Helvetica, sans-serif;
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
  padding: 16px;
  background: #ffffff;
}
.form h1 {
  background: #03773f;
  padding: 20px 0;
  font-weight: 300;
  text-align: center;
  color: #fff;
  margin: -16px -16px 16px -16px;
  font-size:  25px;
}
.form input[type="text"],
.form input[type="url"] {
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 4%;
  font-size: 17px;
  color: rgb(9, 61, 125);
}
.form input[type="text"]:focus,
.form input[type="url"]:focus {
  box-shadow: 0 0 5px #5868bf;
  padding: 4%;
  border: 1px solid #5868bf;
}

.form button {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 180px;
  margin: 0 auto;
  padding: 3%;
  background: #0853b6;
  border: none;  
  border-radius: 3px;
  font-size: 17px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  color: #fff;
  cursor: pointer;
}
.form button:hover {
  background: rgba(88,104,191, 0.5);
}
#qrcode-container{
    display:none;
}

.qrcode{
  padding: 16px;
  margin-bottom: 30px;
}
.qrcode img{
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(67, 67, 68, 0.25);
  padding: 4px;
}
