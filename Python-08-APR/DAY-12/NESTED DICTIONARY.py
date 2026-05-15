# NESTED DICTIONARY :- A nested dictionary is a dictionary inside onother dictionary

student={}
student[1]={"name":"vinay","age":19}
student[2]={"name":"shubham","age":19}
print(student)

# access
print(student[1])


print(student[1]["name"])

# print(student["name"])  KeyError

for i in student:
  print(student[i]["name"])
  # multiple record process
  

# real system
students={}
while True:
  id=input("enter id(exit to stop)")
  if id == "exit":
    break
  name = input("enter name: ")
  age = int(input("enter age: "))
  students[id] = {"name":name,"age":age}
  print(students)
  
  
  
# 5 student add
# 2 extra field add
# print using loop


student={}

# 5 student add
student[1]={"name":"vinay","age":19,"Course":"BCA", "City":"Kota"}
student[2]={"name":"Akash","age":24,"Course":"MCA", "City":"Pune"}
student[3]={"name":"shubham","age":19,"Course":"MBBS", "City":"Kota"}
student[4]={"name":"Arjun","age":19,"Course":"ITI", "City":"Ramganjmandi"}
student[5]={"name":"Payal","age":18,"Course":"BA", "City":"Chechat"}

# print using loop
for i in student:
  print(student[i])
