# Welcome -> Tuple -> ordered, immutable,Duplicat allows(A tuple is an odered and immutable collaction od elements.)

data=("vinay",19,"BCA")

# 1. count():
num=(1,2,2,3,4,2,3,5,6)
num

print(num.count(2))

# 2. index
print(num.index(4))

# new problem (set entry)
# set is a ubordred collaction of unique elements.
# unorderd hone ki vjha se indexuse nahi hota hai.
num ={1,2,3,3,4,4}
print(num)


# add()
num.add(5)
num

# remove()
num.remove(1)
num

# discard()
num.discard(10) # not show error if number in not able
num


num.pop()
num


# union() -> add
a={1,2}
b={2,3}
print(a.union(b))

# intersection()
print(a.intersection(b))


# difference()
print(a.difference(b))


emails=["a@gmail.com","a@gmail.com","b@gmail.com","c@gmail.com"]
clean=set(emails)
print(clean)


# home work
# creat a tupel and studante data feel and use set and remove duplicate dataand union intersection practice.
# make it an real example

# 1. Create a tuple for a student (tuples = fixed data)
student = ("Vinay Tailor", 19, "BCA")

print("Student Info:")
print("Name:", student[0])
print("Age:", student[1])
print("Course:", student[2])


# 2. List with duplicate subject enrollments
subjects_sem1 = ["Math", "Physics", "Chemistry", "Math", "Physics"]
subjects_sem2 = ["Biology", "Chemistry", "Math", "English"]

print("\nOriginal Subject Lists:")
print("Sem 1:", subjects_sem1)
print("Sem 2:", subjects_sem2)


# 3. Convert to sets to remove duplicates
set_sem1 = set(subjects_sem1)
set_sem2 = set(subjects_sem2)

print("\nAfter Removing Duplicates (using set):")
print("Sem 1:", set_sem1)
print("Sem 2:", set_sem2)


# 4. Union
all_subjects = set_sem1.union(set_sem2)
print("\nAll Subjects (Union):", all_subjects)


# 5. Intersection (common subjects in both semesters)
common_subjects = set_sem1.intersection(set_sem2)
print("Common Subjects (Intersection):", common_subjects)

