# Redux Counter App

```javascript
<index>
  <App>
    <Header />
    <StoreFront>      
      <Categories>
        r:s categories
        r:a changeCategory
      </Categories>
      
      <Products>
         s:products {}
         s:activeCategory{}
         a:triggers the reduceTheStockCount
         r:filter product list for active cat
         r:reduces the inventory with the reduceStock action is dispatched
      </Products>

      <Cart>
        s:Array of added products(include details)
        a:triggers the addSelectedItem reducer
        a:changeCount
        r:addSelectedItem
      <Cart/>

    
    </StoreFront>
    <Footer />
  </App>
</index>
```


### Lab 37: Shopping Cart
```

```
