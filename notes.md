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

# Caching

### How the caching mechanism work ?

- stores the output at a page dunamically !
- reduces computation costs
- stores response of requests
- nextjs mantains 4 caches - request memoization, data cache, full route cache, router cache!
  - request memoization : fetch er request er return value memoize kore rakha
  - only the last one happens in the client
  - this si how a nextjs application should loook like
    - root as server - branches as server - only the leaves could or could not be client component
    - form as server - form button as client - do not turn the entire form as a client component
    - sob kisu srver e takbe, last er khali button ta client component thakbe !
    - Hypothetically : 1 - : Request memoization
      - form has a parent that has done a fetch request on fetch/post
      - done the same request at another cousin branch
      - the first fetch would get reused - react tree render pass e - oitar response cousing branch e reuse hocche
      - this thing is known as request memoization - also known as request deduplication
      - duration - per request life cycle -
    - Data cache :
      - fetch res er result ei cache e thake
      - this lives in a different cache - this is persistent - cached inside of the .next folder
    - Full router cache :
      - can be revalidated
      - HTML and RSC (REact server component payload) -
      - dynamic pages - this is built on request time
      - when we go to a single post by clicking in our case
      - react innovation - page ashbe - oi page er ja ja jinish dorkar - oita server e render kore niye ashe - these are server components
      - server e pc te oi component ta render kore - render er output ei type er payload akare pathiye dei
      - this this goes to client, this payload is not html - client er react library and next js library
      - nexstjs can parse this payload and show the relevant html on the page
      - this comes in blocks - not all at once - a lot like fetch reqeusts from hte server
      - this is coming on request as they asre dynamic pages
      - almost like JSON - parsed into html
      - whenever we hit a route - nextjs knows that for which route the rsc payload is what !
      - this rsc paload is also kept in a different cache
      - this is what the full router cache is
      - is also revalidated and persistenet
    - Router Cache :
      - this is on the client side
      - also RSC payload
      - server close kore daoar poreo jinish gula kaaj kore - on different routes
      - so there is an in mmeory cache in the client side
      - this is router cache
      - it's lifetime is upto user session or time-based - reload or browser close korle ar paoa jabe na !
      - router cache pea gele are request korei na
  - react server and client component reconciliation !
    - server component - purely done one the server - no apis or user interaction - just pure rendering
    - first request always goes to the server
    - first rooot page and layout gets rendered - creates the html with rsc payload
    - now it goes to two of its server children - one has fetching which is also done on the server side
    - when it sees a client component it puts an empty placeholder box there
    - when all of the server components are rendered - gives control to browse
    - before - browser has react library and everything that was once done on the client side - like next js utilities
    - on client component react reconsiles
    - placeholder er faka code gula client e load hoi
    - ager rsc gulo na
    - pdf generation - purely server side - heavy task done on a server component - output gets translated to html
      - if we had used on raw react - or client componetn - all of this pdf processing would have been done by the clients or browser
      - this pdf generatio would have been done on the browser
      - browser would have to download this pdf library
      - as this is a server c omponent - this would have worked on the server
    - the generated html would trickle down- but the library would not as it is a server compoent
    - Pure react - everything would have had to done on the browser
      - where does it reconciles -
      - onclick handler that is in the browser - only on those places
      - but this also has an rsc payload
      - modular identifier kore
      - source code dekhe browser e kaaj kore chole jai - what ?
  - This is how server and client component works
  - pure server side SSR - wksathe generate hoye diye dei
  - this also gets streamed btw
  - eitarr karone sob dhoroner performacne improve hoi! THIS IS PART OF HOW IT HELPS SEO
  -
