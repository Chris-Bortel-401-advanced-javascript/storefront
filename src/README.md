# Redux Counter App

```javascript
<index>
  <App>
    <Header />
    <StoreFront>
      s:counter
      r:reducer
      r:a increment
      r:a decrement
      
      <Categories>
        r:s categories
        r:a display
        r:a decrement
      </Categories>
      
      <Products>

      </Products>
    </StoreFront>
    <Footer />
  </App>
</index>
```


```
{
  "count": 1,
  "results": [
    {
      "_id": "5f8798edcd2e0500175b2857",
      "name": "banana",
      "category": "fruit",
      "description": "yellow",
      "price": 1.99,
      "inStock": 50,
      "__v": 0
    }
  ]
}
```
