### Hash table implementation with ES5 Maps, using _separate chaining_ to handle colisions

``` javascript
// With default options
const hashMap = new HashMap();
hashMap.set('elian', 'cordoba'); // Hash: 2
hashMap.set('test', 'test');     // Hash: 1
hashMap.set('javascript', true); // Hash: 2
hashMap.set('0', {});            // Hash: 0
hashMap.print();

/*
0   -> '0': {}
|
1   -> 'test': 'test'
|
2   -> elian: cordoba
    -> javascript: true
*/
```

## Build
`npm i -g typescript` if you don't have it installed already

```
tsc: build - tsconfig.json
```