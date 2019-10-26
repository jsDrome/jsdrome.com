# Callback Hell

&nbsp;

## Summary

Javascript is a programming language with first-class functions. This means that you can treat functions like variables. You can assign them to variables, pass it as arguments, return as value etc. Callbacks are functions we want called after the execution of some function. We pass them as arguments to other functions. Like the name suggests, callbacks mean - Call back after something. And callback hell is something we get into when we have a lot of nested callbacks. To understand this, lets do a case study.

## Case study

Lets create a function, which will get a random word from an API (Datamuse) and using that word, lets fetch an image from another API (GiphyAPI). Lets assume that the word is 'elephant'.

Firstly, lets create a generic function to make a network call which will invoke a given callback on success (callbackOnSuccess) or on error (callbackOnError).

    const get = (url, callbackOnSuccess, callbackOnError) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = () => callbackOnSuccess(request.responseText);
      request.onerror = () => callbackOnError(request.statusText);
      request.send();
    }

Then, we will use that function for our purposes.

1) Lets define 2 APIs - one to get a random word and one to get an image from a word.

    const wordApi = 'https://api.datamuse.com/words?&max=1&sp=';
    const imageApi = 'https://api.giphy.com/v1/gifs/search?api_key=AkYWiLZW3zjLcZ8My1GggTXYPHFOM7l3&limit=1&q=';

2) Write the function loadImageWithWord. This function will use the get function above to make a network call to the word api, get a word, and then use the image api to fetch an image for the word.

    function loadImageWithWord(word) {
      get(wordApi + word, function(wordData) {
        get(imageApi + wordData[0].word, function(imageData) {
          console.log(JSON.parse(imageData).data[0].images.fixed_height_still.url);
        });
      });
    }

3) If you notice, the code gets intended more and more into what is called as a Pyramid of doom or Callback hell. We still havent handled the error scenario (like when the network call fails). Lets add that to the code.

    function loadImageWithWord(word) {
      get(wordApi + word, function(wordData) {
        get(imageApi + wordData[0].word, function(imageData) {
          console.log(JSON.parse(imageData).data[0].images.fixed_height_still.url);
        }, function(error) {
          console.log(error);
        });
      }, function(error) {
        console.log(error);
      });
    }

4) Finally, lets invoke this by:

    loadImageWithWord('elep?ant');

5) After all of the above, the code has become unreadable. And this is just a simple example. We will solve this problem using promises in the next chapter.