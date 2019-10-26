# Promises

&nbsp;

## Summary

This is a continuation of the previous chapter where we saw the problem of callback hell where the code becomes unreadable and eventually, unmaintainable. We will solve that problem using promises.

## Concept

From the MDN Documentation: A Promise is a proxy for a value not necessarily known when the promise is created. In our case, its a proxy for a network call which might succeed or fail in the future. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. In our case, this means that we can attach functions for the success and error scenarios of the promise. This lets asynchronous methods return values behave like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. So, invoking this function will give you an object.

This object, can be in one of 3 states:

**Pending**: *initial state, neither fulfilled nor rejected.*

**Fulfilled**: *meaning that the operation completed successfully.*

**Rejected**: *meaning that the operation failed.*

## Case study

Lets create a function, which will get a random word from an API (Datamuse) and using that word, it will fetch its image from another API (GiphyAPI). Lets assume that the word is elephant.


Firstly, lets create a generic asynchronous function which will accept a url to make a network call and will return a promise object.

    const get = url => new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = () => resolve(request.responseText);
      request.onerror = () => reject(request.statusText);
      request.send();
    });

Then, we will use that promise to attach events on success or failure.

1) Define the APIs

    const wordApi = 'https://api.datamuse.com/words?&max=1&sp=';
    const imageApi = 'https://api.giphy.com/v1/gifs/search?api_key=AkYWiLZW3zjLcZ8My1GggTXYPHFOM7l3&limit=1&q=';

2) Write the function loadImageWithWord. This function will use the get function above to make a network call to the word api, get a word, and then use the image api to fetch an image for the word.

    function loadImageWithWord(word) {
      get(wordApi + word)
        .then(function(wordData) {
          return get(imageApi + wordData[0].word);
        })
        .then(function(imageData) {
          console.log(JSON.parse(imageData).data[0].images.fixed_height_still.url);
        });
    }

3) If you notice, we will not encounter the pyramid of doom scenario because we are not nesting things or the callback hell scenario because there are no callbacks here. We just used the *.then* block to handle the success scenarios and we chained 2 of them for 2 network calls, one for the word and one for the image. But, we still havent handled the error scenario (like when the network call fails). Lets add that to the code.

    function loadImageWithWord(word) {
      get(wordApi + word)
        .then(function(wordData) {
          return get(imageApi + wordData[0].word);
        })
        .then(function(imageData) {
          console.log(JSON.parse(imageData).data[0].images.fixed_height_still.url);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

4) Invoke using:

    loadImageWithWord('elep?ant');

## Inference

We implemented a get method which retuned a Promise. We chained promises which solved the callback hell issue and we needed just 1 catch block to handle any error scnarios arising from either of the network calls. As a result, the code is now easier to read and to maintain.

To make things even more simple, we have Async/Await now which are even better than Promises. More on that later.