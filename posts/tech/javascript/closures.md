# Closures in Javascript

&nbsp;

## Summary

This is an attempt to better explain the example at W3 Schools for the same topic. Lets implement 2 counters. An up counter and a down counter. Lets look at the problems we face and their solutions.

## Case 1

Lets create a global variable called counter and a function which will increment it and return it.

![closures-case-1-before](/img/closures-case-1-before.png "closures-case-1-before")

    let counter = 0;

    const add = () => {
      counter++;
    }

    add();
    add();
    add();

At this point, the value of the counter is 3 and it does serve our purpose. But, the problem here is that the variable is in the global lexical scope. It can be accessed by any function in the application. That can be a problem. How? Lets implement the down counter in a similar way. We'd create a global variable called counter and a function to decrement the value. It will obviously interfere with our up counter. Something like this:

![closures-case-1-after](/img/closures-case-1-after.png "closures-case-1-after")

So, we need to make the counter variable lexically scoped, meaning it being accessible only to the function calling it. This ensures that both the up counter and the down counter both use their own counter variables which are independent of each other. Something like this:


## Case 2

Lets change the lexical scope to move the counter variable inside the up counter.

![closures-case-2](/img/closures-case-2.png "closures-case-2")

    const add = () => {
      let counter = 0;
      counter++;
      return counter;
    }

    add();
    add();
    add();

In this case, after the 3rd call of add(), the value of the counter is 1, because its initiated on every call. So, this defeats the whole purpose of the counter.

## Case 3

So in the first case, the problem was the counter variable being in the global scope. In the second function, we moved the variable into the function scope, we initiated it to 0 at each call. So, if there is a way to keep the variable lexically scoped, and at the same time, initiate the counter to 0 only once, it will solve our problem. So how would we do that?

The way to do it is by creating closures. How do we do that?

Lets write a function which will initiate a counter and return a function to increment the counter and return its value.

![closures-case-3-before](/img/closures-case-3-before.png "closures-case-3-before")

    const add = () => {
      let counter = 0;
      return () => {
        counter++;
        return counter;
      }
    };

Change it to a self invoking function so that the counter is initiated and add becomes a function the purpose of which is only to increment the counter.

![closures-case-3-after](/img/closures-case-3-after.png "closures-case-3-after")

    const add = (() => {
      let counter = 0;
      return () => {
        counter++;
        return counter;
      }
    })();

By this point, after invoking itself, add becomes a function which will increment a counter which had been initiated previously by the function enclosing it. The interesting thing here is that add still has access to the variable counter. This is because of closures. By enclosing it inside a self invoking function, we created a closure which you can imagine to be something like an enclosure within which there is a counter variable and an add function which keeps incrementing the counter and returning it.


Call add() 3 times.

    add();
    add();
    add();

And the value is 3.