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


# SO WHATS THE BENEFIT
1. jwt basically prevents 1 round trip from the backenf server and  db for any user request

2. jwt can be stored in a cookie header or a normal auth header

3. It is encoded not encrypted

## imp question
do we have to go to the database to check if the jwt is right???

the answer is no 
once the user signin again after signup wwe chck with the datab that are his 
crediantials right but once they are  verified we change the username of the user 
into a jwt and send this jwt back to the user once the user sends a /me request to us
the user send s only the jwt which is converred agian into the usernae now sice 
we can clearly knoe that this username is right as this jwt was uniquely made for 
that user only hence it lets it use  the endpoint 

on the othert hand if we used tokens while we signed in the database woul now be given 
our token which will be used in future when we used /me endpoint but it will call the 
database to check but using jwt we will avoid this call

for getting any data further the user will have to sen username password to db only jwt reduces one step only

## what happens now on every subsequent request

now we will send the token on every subsequent req to validate our identity


# What can we do with the key and jwt (how is jwt not encryption)

1. unlike in ecryption u can encrypt and decoode only if u have the key

2. But hey in jwt anyone can decode the jwt and get to know and decode the string to get the original string

3. But u can only verify(means that it was u only who created the account) u then need the  jwt secret variable 

4. this makes jwt confusing as anyone can decode but hey u can verify only if u have the secvar

# Bank cheques and json web token

1. There are a lot of similarities here bank issues a cheque now anyone can see the check you signed and may even create a duplicate themselves but the wont accept theirs as it **authenticaterss/verifies** the user who has sent the cheque

2. JWTs are  very similar they can also be issued and replicates as we say on jwt.io as anyone could decode and create a jwt that decodes exactly the same but...

3. Here is the catch the jwt is synced to our secret variable which will only be accesible to us and this jwt gets verified using our secret variable and our **secret variable verifues only our jwt** hence other jwt which might look similar wont be able to enter the site