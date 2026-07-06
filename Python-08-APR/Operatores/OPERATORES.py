# OPERATORES :-
#     operators are symbols used to perdorm operation on variables and values
# Arithmetic, Assignment, Compar, logical operators


# Arethmetic operator
a=10
b=5
print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a%b)
print(a**b)
print(a//b)



# use of % -even/odd chack

num=int(input("enter a number "))
if num%2==0:
    print("Even")
else:
    print("Odd")
    
    
    
# Assingment Operators :- It is used to assign values to a veriable.

# +=, -=, *=, /=, ==, ===, ++, --

x=10
x+=5
print(x)



# Comparision Operators :- Comparision operators are used to compare two values and return value Trure or false.

a=10
b=5

print(a==b)
print(a!=b)
print(a>b)
print(a<b)
print(a<=b)
print(a>=b)



# Logical Operators :- logical operators are used to combine multiple condition.
age = 20
degree=True
print(age>18 and degree==True) # Both condition should be True than returnce True
print(age>18 or degree==False) # any one condition should True than returnce True
print(not age>18) # Reverce Valure If True than returnce False and if false than returns true



# Identity Operators :- It's check whether two variable reffre to the same object
a=10
b=10
print(a is b)
print(a is not b)

# == :- value same
# is :- memory same




# Membership operators :-

name = "Vinay"
print("a" in name) # present
print("y" not in name) # Not present



# bitwise operators
a=5 # 101
