# MongoDB $inc Operator Bug
This repository demonstrates a common error when using MongoDB's `$inc` operator. The `$inc` operator is used to increment a numeric field in a document. However, using it incorrectly can lead to unexpected behavior.

## The Bug
The bug is in the `bug.js` file.  The code attempts to increment a field that is not a number. 

## The Solution
The solution is provided in `bugSolution.js`. The solution checks whether the field exists and is a number before performing the increment.  If the field is not present, it inserts the document with the initial value. If the field is not a number, it reports the error.

## How to Reproduce
1. Clone this repository.
2. Make sure you have MongoDB installed and running.
3. Run the `bug.js` file. Note that the document update will likely fail silently or result in an unexpected value. 
4. Run the `bugSolution.js` file. The document will be updated correctly in this case.