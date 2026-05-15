# The Smart ATM Simulator

# Step 1 :- PIN and Balance

pin = "1234"
balance = 1000

# Step 2 :- User enter pin

userpin = input("Enter your PIN: ")

if userpin != pin:
  print("Access Denied")
else:
  ("Access Granted")

# Step 3 :- While loop
  while True:
    print("\n---- ATM Menu ----")
    print("1. Check Balance")
    print("2. Withdraw Money")
    print("3. Deposit Money")
    print("4. Exit")

    choice = input("Choose an option: ")

# Handling choices
    if choice == "1":
      print("Your Blance is: ",balance)
    elif choice == "2":
      withdraw = float(input("Enter the amount to withdraw: "))
      if withdraw <= balance:
        balance -= withdraw
        print("Withdraw successful")
      else:
        print("Insufficient Balance")
        print("Insufficient Funds")
    elif choice == "3":
      amount = float(input("Enter amount to deposit: "))
      balance += amount
      print("Deposit successful")
      print("New Balance:", balance)

    elif choice == "4":
      print("Thank you for using the ATM.")
      break
    else:
      print("Invalid choice. Please choose a valid option")