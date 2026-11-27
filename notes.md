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

-
