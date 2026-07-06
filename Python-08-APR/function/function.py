# Function :- Function is a block of code that perfotm a spacific task

def make_chai():
  print("boiling water and milk")
  print("Adding tea and shuger")
  print("serve tea")
  
  
make_chai() # function calling. We can use it multiple time
  
  
make_chai()


# Perameter :- a perameter is a variable defined in the function.

def make_chai(type): #perimeter
  print("making",type,"chai")
  
make_chai("ginger") # Argument :- An argument is the actual value pass to the function.

make_chai("Black tea")


def make_chai(type,sugar):
  print("making",type,"tea with",sugar,"sugar")
  
make_chai("ginger","less") # Argument pass


make_chai("Elaichi")
 
# default argument :- default argument provides a default value if no argument pass.
def make_chai(type,sugar="less"):
  print("making",type,"chai with",sugar,"sugar")
 
make_chai("elaichi","more") 
  
make_chai(sugar="less",type="masala") # keyword argument

# return :- return is used to send a value back from a function

def add(a,b):
  return a+b


add(5,3)
# print(result)


def order(name,type):
  return{"name":name,"chai":type}
o1=order("Vinay","Kullar")
print(o1)


def greet(name):
  print("hello",name)
greet("Vinat")


def intro(name,age):
  print("my name is",name,"and i am",age,"year old.")
intro("vinay",19)



def intro(name,age=20):
  print("my name is",name,"and i am",age,"year old")
intro("vinay")



def square(x):
  return x*x
def result(num):
  return square(num)+10
print(result(5))



