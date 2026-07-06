# Dictionary:- A dictionary is a collaction of key and valu pair.

STUDENT={"NAME":"VINAY","AGE":19,"COURSE":"BCA"}
STUDENT

# ACCESS DATA :- ACCESSING MEANCE GETING VALUE USING KEY.
print(STUDENT["NAME"])
print(STUDENT["AGE"])

# ADD

STUDENT["CITY"]="KOTA"
STUDENT

# AND UPDATE
STUDENT["AGE"]=20

# REMOVE/DELETE
STUDENT.pop("COURSE")

print(STUDENT)

print(STUDENT.get("SALARY"))


# METHODS :-
# keys() :- return all labels
print(STUDENT.keys())


# values()
print(STUDENT.values())


# items() :- returns full pairs
print(STUDENT.items())


# loop

for key in STUDENT:
  print(key,STUDENT[key])
  
  
student={}
student["name"]=input("Enter your name: ")
student["age"]=int(input("Enter your age: "))
student["city"]=input("Enter your city: ")
print(student)


# NESTED DICTIONARY
user={
    "Name":"Vinay",
    "Age":19
}


# Home work
# make a login sytem using dictionary and while loop.


# User store

users = {
    "vinay":"1234",
    "akash":"4321",
    "shubham":"uiop"
}

while True:
    print("\n--- Login System ---")
    username = input("Enter username: ")
    password = input("Enter password: ")

    if username in users:
        if users[username] == password:
            print("Login successful! Welcome,", username)
            break
        else:
            print("Incorrect password. Try again.")
    else:
        print("Username not found.")
# Option to exit
    choice = input("Do you want to try again? (yes/no): ").lower()
    if choice != "yes":
        print("Exiting program.")
        break