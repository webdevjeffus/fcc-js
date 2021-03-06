# Free Code Camp - JavaScript Challenges

[Free Code Camp](http://www.freecodecamp.com/) is a free online program that teaches full-stack web development. I began work at FCC before starting Dev Bootcamp's web development immersive in the fall of 2015. While I was busy at DBC, FCC greatly expanded their curriculum, and added certifications in a variety of areas. Now that I have finished the DBC program, I am working on the new challenges at FCC to expand my experience with JavaScript. I am archiving my code for the more elaborate challenges here at Github, as well.

## Basic Algorithm Scripting
Here are my solutions to the new challenges in this section:

#### Caesar's Cipher: caesar.js
FCC Instructions: "Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on."

## Advanced Algorithm Scripting
Here are my solutions to the new challenges in this section:

#### Validate US Telephone Numbers: phone_num.js
FCC instructions: "For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise false."

#### Symmetric Difference: sym_diff.js
FCC instructions: "Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays."

#### Exact Change: exact_change.js
FCC instructions: "Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument. cid is a 2d array listing available currency. Return the string 'Insufficient Funds' if cash-in-drawer is less than the change due. Return the string 'Closed' if cash-in-drawer is equal to the change due. Otherwise, return change in coin and bills, sorted in highest to lowest order."

#### Inventory Update: inventory.js
FCC instructions: "Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order."

#### No Repeats Please: no_repeats.js
FCC instructions: "Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that duplicate characters are each unique. For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating."

#### Friendly Date Ranges: dates.js
FCC instructions: "Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format. The friendly display should use month names instead of numbers and ordinal dates instead of cardinal ("1st" instead of "1").

"Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year. If the range ends in the same month that it begins, do not display the ending year or month. Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range."