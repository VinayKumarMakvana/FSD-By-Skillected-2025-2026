# if-else (desicion making)
# if-else is used to execute code based on condition.
# true or false

age=int(input("Enter your age "))
if age>=18:
    print("You are eligible for vote")
else:
    print("You are not eligible for vote")
    
    
    
    
marks=int(input("Enter your marks "))
if marks>=40:
    print("Pass")
else:
    print("Fail")
    
    
    
    
# elif :- Usse to check multiple condition.

marks=int(input("Enter your marks "))
if marks>=90:
    print("Grade A+")
elif marks>=75:
    print("Grade A")
elif marks>=60:
    print("Grade B")
elif marks>=45:
    print("Grade C")
elif marks>=35:
    print("Grade D")
else:
    print("Fail")
    
    

# mini project
# login system

username=input("enter your username:")
password=input("enter your password:")

if username=="admin" and password=="1234":
    print("Login Successfull")
else:
    print("Login Failed")
    
    
    
    
# Odd/Even

print("Odd and Even Numbers from 1 to 20:")

for num in range(1, 21):
    if num % 2 == 0:
        print(num, "is even")
    else:
        print(num, "is odd")




from re import sub
# Pass/Fail

sub1 = int(input("Enter marks of subject 1: "))
sub2 = int(input("Enter marks of subject 2: "))
sub3 = int(input("Enter marks of subject 3: "))
sub4 = int(input("Enter marks of subject 4: "))
sub5 = int(input("Enter marks of subject 5: "))

total = sub1 + sub2 + sub3 + sub4 + sub5

percentage = (total / 500) * 100

print("-----------------")

print("Total Marks:", total)

print("Percentage:", percentage,"%")

if percentage >= 40:
    print("Pass")
else:
    print("Fail")
    
    
    
