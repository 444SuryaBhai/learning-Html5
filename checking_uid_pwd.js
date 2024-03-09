#!/bin/bash

# Prompt the user to enter a username and password
read -p "Enter username: " username
read -sp "Enter password: " password
echo

# Check if the username and password are valid
if [[ "$username" == "valid_username" && "$password" == "valid_password" ]]; then
  echo "Username and password are valid"
else
  echo "Invalid username or password"
fi


   3. Save the file as check_credentials.sh in a directory of your choice.
   4. Open a terminal window and navigate to the directory where the check_credentials.sh script is saved.
   5. Make the script executable by running the following command:

chmod +x check_credentials.sh

   6. Run the script by typing the following command:

./check_credentials.sh


Solution:
Here is the solution code for the check_credentials.sh script:

#!/bin/bash
 
# Prompt the user to enter a username and password
read -p "Enter username: " username
read -sp "Enter password: " password
echo
 
# Check if the username and password are valid
if [[ "$username" == "valid_username" && "$password" == "valid_password" ]]; then
  echo "Username and password are valid"
else
  echo "Invalid username or password"
fi



   7. The script will prompt you to enter a username and password. Enter the hard-coded values (valid_username and valid_password in this example) to see the message "Username and password are valid". Enter any other  values to see the message "Invalid username or password".