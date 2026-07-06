# Collection data type :- it is use to store multiple values in a single variable

# MAIN TYPE

# 1. LIST :- order and changable(Mutable)
# 2. TUPLE :- order and not changeble
# 3. SET :- unorder and unique
# 4. DICTIONARY :- key-value pair


# List :- list is a conection of multiple item stored in a single variable

items=["Leptop","Mouse","Keyboard"]
print(items)

# Add data
# append() :- add items at end.

items.append("mobile")
print(items)

# insert():- using index through adding.
items.insert(2,"tab")

print(items)

# modify
items[1]="headphone"
items

# remove()
# items.remove("tab")

items


# pop()
items.pop(0)

items

items=['tab', 'headphone', 'tab', 'tab', 'tab', 'Mouse', 'Keyboard', 'mobile']
print(items)

for item in items:
  print(item)

marks=[85,90,78,60,97]
print(marks)

print(max(marks))
print(min(marks))
print(sum(marks))


# PROJECT

students=[]
while True:
  name=input("Enter Name:(exit to stop)")
  if name=="exit":
    break
  students.append(name)
print(students);


# home work
# card system hetrogenous
# mark system and
# price system that sum at end.

# Hetrogenous and homogenous

# homogeneous:- Same datatype
number=[1,2,3,4,5]

# heterogenous:- different DATATYPES
data=["vinay",24,True,85.2]

# list kaha store hoti he?
# Lists are stored in non-volatile storage (like hard drives, SSDs, or databases)
# to retain data when the power is turned off, or in volatile storage (RAM) for temporary, fast access.

# card system hetrogenous.

cards = []

n = int(input("Enter number of cards: "))

for i in range(n):
    print("\nEnter details of card", i+1)

    name = input("Enter name: ")
    Quantity = int(input("Enter Quantity: "))
    price = float(input("Enter price: "))

    card = {
        "name": name,
        "Quantity": Quantity,
        "price": price
    }

    cards.append(card)

print("\n--- Card Details ---")
for c in cards:
    print(c)
    


# Mark system in Python

students = []

n = int(input("Enter number of students: "))

for i in range(n):
    print("\nEnter details for student", i+1)

    name = input("Name: ")
    marks = int(input("Marks: "))

    student = {
        "name": name,
        "marks": marks
    }

    students.append(student)

total_marks = 0

print("\n--- Student Marks ---")
for s in students:
    print(f"Name: {s['name']}, Marks: {s['marks']}")
    total_marks += s['marks']

average = total_marks / n

print("\n--- Result ---")
print("Total Marks:", total_marks)
print("Average Marks:", average)


# Price system with total sum
items = []

n = int(input("Enter number of items: "))

for i in range(n):
    print("\nEnter item", i+1)

    name = input("Item name: ")
    price = float(input("Item price: "))

    item = {
        "name": name,
        "price": price
    }

    items.append(item)

total_price = 0

print("\n--- Item List ---")
for item in items:
    print(f"Item: {item['name']}, Price: {item['price']}")
    total_price += item['price']

print("\n--- Total ---")
print("Total Price:", total_price)


