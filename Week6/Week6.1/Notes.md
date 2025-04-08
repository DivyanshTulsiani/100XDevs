# HTTP Deep Dive
Auth and JWT is just like a bank sysytem 

We create a account on a site and have our id password stored there
When we try to sign in the site returns us a token everytime which we use to sent request to the site lets ay to see posts on facebook etc this token is our authentication that we are not someone else 

We have to keep our token safe 

Simmilarly we get a cheque book from a bank

## If someone gets our token 
they can access our material so it is imp to hide it
our token enabes us to access contents that belong to us only we send the token on all request we get a token everytime we log in 

## How it is better
This is helpful as everytime we dont have to send username and passwod 
Even if token is leaked we can get it revoked ublike if password gets leaked then it is not safe 