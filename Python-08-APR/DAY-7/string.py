# String :- a string is a sequence of characters enclosssed in quotes.
name = "vinay"
massage= "hello"


name="Vinay"
print(name[0])
print(name[1])


print(name[-1])
# indexing :- position access


# Slicing :- Slicing is used to extract a part of a string
# String[start:end]
# start=include
# end= exclude

name="Vinay"
print(name[0:3])

print(name[2:])

# Step -> jump and skip of string (indexing)
print(name[0:5:2])


print(name[::-1])

# String Methods :- String methods this is bult in function used to perfom operation on string
print("VINAY".lower())


text=" Hello python "
print(text)
print(text.strip())


text=" Hello python "
print(text)
print(text.strip())

# replace()
print("hello".replace("h","y"))


# split :-
print("hello wrold".split())

print(len("VINAY"))


username= input("enter: ").lower()
if username=="vinay":
  print("login successfully")
  # case insensitiv system
  
word = input("enter: ")
if word==word[::-1]:
  print("Paindrome")
else:
  print("Not palindrome")
  
  
# home work
  
# reverse string

word = input("enter: ")
rev = word[::-1]
print("reverse:", rev)


# palindrome

word = input("enter: ")

if word == word[::-1]:
    print("Palindrome")
else:
    print("Not palindrome")
    
    
# email splitting

email = input("enter email: ")

parts = email.split("@")

print("username:", parts[0])
print("domain:", parts[1])# password validation

password = input("enter password: ")

if len(password) >= 8:
    print("Valid password")
else:
    print("Invalid password (min 8 characters)")
