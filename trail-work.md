# Trail

notion is a series (1..n) of problems which are in a static website.
Each trail is a like a section in a book, focused on a specific set of ideas to learn in JS.
No "account" concept in this POC.

## Outline

- site/sitelet is focused on 1.n of problems
- each problem has
  - intro text/sample starter code
  - test code
  - solution code/text

```

Each page would be one problem. The page wouldbe "hard coded" to just run the one problem.
Then, could we use cookies to track progress thru, for a given browser?

Could this be made Mobile-friendly so people could try it on a phone.

Each problem would have explanatory test, a sample, but incomplete, soln.
The user has to edit the sample code and press a "test" button to see if it passes or fails.

Each problem could also have one or more "sample solutions".

=== Y equals ?

Look at each of these formulas, and determine what *y* is based on substituting the given value of *x*.

----
If y = 3x + 5 and x = 2

what is y?
----

****
x = 2

y = 3x + 5

y = (3 times x) plus 5

y = (3 times 2) plus 5

y = 6 plus 5

y = 11
****

Now, here are a few problems for you to solve.

==== ?

----
Given the following formula,
 
y = 6x - 7

what is y, if x = 2?
----

==== ?

----
Given the following formula,
 
y = 3x + 8

what is y, if x = 5?
----
```

### Thoughts that spurred this

- could the current REPL be used to handle some simple JS problems?
- a newbie would have an account
- the account would have a series of “tracks”
- each track might be a series of programming problems to solve
- each problem could have an explanatory text that shows how it could be done(?)
- can MOST of this be done on the client side? the session being small?
- could most of the site be STATIC?
