### Hash table implementation with ES5 Maps, using _separate chaining_ to handle colisions

``` javascript
// With default options
const hashTable = new HashTable();
hashTable.set('elian', 'cordoba'); // Hash: 2
hashTable.set('test', 'test');     // Hash: 1
hashTable.set('javascript', true); // Hash: 2
hashTable.set('0', {});            // Hash: 0
hashTable.print();

/*
0   -> '0': {}
|
1   -> 'test': 'test'
|
2   -> 'elian': 'cordoba'
    -> 'javascript': true
*/
```

## Build
`npm i -g typescript` if you don't have it installed already

```
tsc: build - tsconfig.json
```