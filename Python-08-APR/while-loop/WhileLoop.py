# while loop :- A while loop execute a block of code as long as the condition is true.

i=1
while i<=5:
  print(i)
  i+=1
  
  
i=1
while i <= 10:
  if i%2==0:
    print(i)
  i+=1
  
  
  
# break :- break is use toterminate the loop immediately.
i=1
while i<=10:
  if i==5:
    break
  print(i)
  i+=1
  
  
  
# Continue :- its skip the corrent iteration and move ]s to the next iteration.
i=0
while i<5:
  i+=1

  if i==3:
    continue
  print(i)




# pass :- it is a nun statment (space holder)

for i in range(5):
  if i==3:
    pass
  print(i)
  
if True:
  pass



  
correct = "1234"
while True:
  password=input("enter the password ")
  if password==correct:
    print("password matched")
    print("access granted")
    break
  else:
    print("try again")
    
    
    

secret=7
attempts=0
while True:
  guess=int(input("guess the number "))
  attempts+=1
  if guess==secret:
    print("correct! you won ",attempts, "attempts")
    break
  elif guess<secret:
    print("too low")
  elif guess>secret:
    print("too high")
    
    
    
# use random number and add limits and win and loss message add karo
random=15
attempts=0
while True:
  guess=int(input("guess the number "))
  attempts+=1
  if guess==random:
    print("correct! you won ",attempts, "attempts")
    break
  elif attempts>=5:
    print("You Lost!")
    break
  elif guess<random:
    print("too low")
  elif guess>random:
    print("too high")

