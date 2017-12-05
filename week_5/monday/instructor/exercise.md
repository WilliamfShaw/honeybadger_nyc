## Round 0

Write a function `lengths` that accepts a single parameter as an argument, namely
an array of strings. The function should return an array of numbers where each
number is the length of the corresponding string.

```javascript
var words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]
```

---

## For Real Now

### Round 1

Write a function `fizzbuzzer` that accepts a single parameter as an argument, a number, and will return the following:

	- The string "Fizz" if the number is evenly divisible by 3
	- The string "Buzz" if the number is evenly divisible by 5
	- The string "FizzBuzz" if the number is evenly divisible by 3 AND 5
	- The string "McClane" if the number is not divisible by 3 OR 5

## Round 2

Write a Javascript function called `transmogrifier`
This function should accept three arguments, which you can assume will be numbers.
Your function should return the "transmogrified" result

The transmogrified result of three numbers is the product of the first two numbers,
raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
power of 2` is 225.

Use your function to find the following answers.

```javascript

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

```

### Round 3

Write a function called `toonify` that takes two parameters, `accent` and `sentence`.
- If `accent` is the string `"daffy"`, return a modified version of `sentence` with all "s" replaced with "th".
- If the accent is `"elmer"`, replace all "r" with "w".
- Feel free to add your own accents as well!
- If the accent is not recognized, just return the sentence as-is.

```javascript

toonify("daffy", "so you smell like sausage")
#=> "tho you thmell like thauthage"

```

### Round 4

Write a function `digitSum` that accepts a number and returns the sum of its digits.

```javascript
var num = 42;
digitSum(num)
#=> 6;
```

### Round 5

Write a function `wordReverse` that accepts a single argument, a string. The
method should return a string with the order of the words reversed. Don't worry
about punctuation.

```javascript
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"
wordReverse("Put Hans back on the line")
# => "line the on back Hans Put"
```

### Round 6

Write a function `letterReverse` that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

```javascript
letterReverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
letterReverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"
```

### Round 7

Write a function `longest` that accepts a single argument, an array of strings. The method
should return the longest word in the array. In case of a tie, the method should
return the word that appears first in the array.

```javascript
longest(["die", "hard", "with", "a", "vengeance"]) # => "vengeance"
longest(["bruce", "willis", "was", "in", "other", "movies"]) # => "willis"
```

### Final Round

Write a function, called `repMaster`, that accepts two arguments, input and a function. Input should be able to be used with the function.  The function used as an argument must return a string.  `repMaster` should take the result of the string, passed as an argument to the argument function, and return this result with `' proves that I am the rep MASTER!'` concatenated to it.

```javascript
repMaster("Put Hans back on the line", wordReverse) # =>
"line the on back Hans Put proves that I am the rep MASTER!"
repMaster("I finished this HW", toUpperCase);
"I FINISHED THIS HW proves that I am the rep MASTER!"
```
