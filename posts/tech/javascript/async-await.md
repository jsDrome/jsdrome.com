# Aync/Await

&nbsp;

## Summary

This is a continuation of the previous chapter where we implemented Promises to chain 2 network calls. In this chapter, we will use the ES7 async/await feature to implement the same in a much simpler way.

## With Promises

We have the API keys,

    const wordApi = 'https://api.datamuse.com/words?&max=1&sp=';
    const imageApi = 'https://api.giphy.com/v1/gifs/search?api_key=AkYWiLZW3zjLcZ8My1GggTXYPHFOM7l3&limit=1&q=';

We have a get function which returns a promise.

    const get = url => new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = () => resolve(request.responseText);
      request.onerror = () => reject(request.statusText);
      request.send();
    });

We chained multiple promises and caught any errors.

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

## With asyc/await

    const loadImageWithWord = async word => {
      try {
        const wordArr = await get(wordApi + word);
        const imgArr = await get(imageApi + wordArr[0].word);
        console.log(JSON.parse(imgArr).data[0].images.fixed_height_still.url);
      } catch(e) {
        console.err(e);
      }
    }

## Inference
With async/await, we got the ability salient features of promises and at the same time, write it in a declarative manner instead of having to use the chaining methods then and catch. Much simpler.