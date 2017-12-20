# Create an Account

An account should have the following attributes:

- a balance (starts at 0) -> `balance`

An account should be able to:

- deposit money -> `deposit`
	- should deposit money into the current account
- withdraw money -> `withdraw`
	- should withdraw money from the current account but only if enough is available

# Create a Bank

A Bank should have the following attributes:

- a name -> `name`
- an address -> `address`
- accounts -> `accounts`
	- you decide how this should be represented
	- a bank starts with a checking AND savings account

A Bank should be able to:

- display its information -> `information`
	- should return the banks name and address
- make a transaction - `makeTransaction`
	- should accept three arguments -> a transaction type, an account type, and an amount
	- should use the appropriate account functions to perform a transaction (deposit or withdrawal)
	- should render the new balances
- display the account balances -> `render`
	- should take the current balances of the savings and checking accounts, then update the DOM display of the bank account balances

# Click events

Define a click event on the deposit and withdrawal buttons that will drive the application. When deposit is clicked, the value to deposit should be retrieved, a transaction should be performed, and the account display balance should be updated. Likewise, when withdrawal is clicked the appropriate transaction should be performed.