## Module 8

### Fetching data on the server - Video 9

- Joto ta pari we need to be fetching the data on the servers
- try to avoid doing this on the client side using a useEffect()
- can atke data directly from the database as it is adready in the backend api - don't need to create an extra api request for this !
- API key vul kore client side e rekheo dite pari amader api jkey
- back and forth natok of useEffect -> browser paint -> then effect runs -> then ui is updated after it has been renderede once
- multiple requests -> on effects - need to be individual requests - serverside data fetch - can be done in one round trip
- reduce client-server waterfalls !

advantages

- fetching data where it is needed
- no need to do props passing or props drilling or use contesxt - does deduplication

streaming

- very good for streaming

parallel and sequential data fetching

- tinta request soman vabe suru hoise - soman vabe jave
- sequential - tinta request soman vabe jabe
- rest I need tp code and take the notes

the whole thing

- clicking on sequential data fetching - shows loading posts !
- and then when we are clicking on single posts we can see the single post
- await e ekta 2 second delay ase, aro ektar 3 second delay ase, sequentially 5 second pore sob render hocche !
- both of these are independent ! we do not have any such requirements that the comments need to come after post id comes
- getPost and getComments are independent of one another - they are doing fetch requests at two different places, however they are rendered at the same time because of teh combined delay ad await
- this is when we can use parallel data fetchig to improve on this thing !
- we do that by using Promise.all() - this shit will be resolved in 3 seconds instead of resolving it in 5

with promiser.all()

- we still need to wait until all three of them are resolved !@
- imrpovement to promise.all() - we can do progressive rendering
- this is improved form of parallel rendering where we do not need to use promise.all()

```javascript
// improved version
const post = await postPromise;
//
```

## then

- the things that we know would load the fastest - we would await and resolve it -
- th rest of the things we wrap insied a suspense boundary
- then we are going to render the rest of the things@!
-

# best possile way ta jene raklam - it does not mean that we would always have teh option to be abke to do it

if we can't do this parallely - we try to do things sequentially !

### disadvantage of sequentia

waterfall
