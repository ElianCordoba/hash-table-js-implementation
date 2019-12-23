interface Options {
  maxSizeOfBucket?: number;
  hashingFuntion?: (key: string) => number;
}

type Bucket = Map<any, any>;

class HashTable {
  private storage: Map<any, Bucket> = new Map();
  private maxSizeOfBucket = 3;
  private hashingFuntion!: (key: string) => number;

  constructor(options?: Options) {
    if (options?.maxSizeOfBucket) {
      this.maxSizeOfBucket = options.maxSizeOfBucket;
    }

    if (options?.hashingFuntion) {
      this.hashingFuntion = options.hashingFuntion;
    }
  }

  print() {
    console.log(this.storage);
  }

  set(key: any, value: any) {
    const hash = this.hash(key);

    if (!this.storage.has(hash)) {
      this.storage.set(hash, new Map([[key, value]]));
    } else {
      const currentValue = this.storage.get(hash)!; // Assertion needed until this is fixed github.com/microsoft/TypeScript/issues/9619
      const nextValue = currentValue.set(key, value);

      this.storage.set(hash, nextValue);
    }
  }

  get(key: string) {
    const hash = this.hash(key);

    const currentValue = this.storage.get(hash);

    if (!currentValue) {
      return;
    } else if (currentValue.size === 1) {
      return currentValue;
    } else {
      return currentValue.get(key);
    }
  }

  remove(key: string) {
    const hash = this.hash(key);

    const currentValue = this.storage.get(hash);

    if (!currentValue) {
      return;
    } else if (currentValue.size === 1) {
      return this.storage.delete(hash);
    } else {
      return currentValue.delete(key);
    }
  }

  hash(string: string): number {
    if (this.hashingFuntion) {
      return this.hashingFuntion(string);
    } else {
      return this.defaultHashingFunction(string);
    }
  }

  defaultHashingFunction(string: string): number {
    let hash = 0;
    for (const key of string) {
      hash += key.charCodeAt(0);
    }
    return hash % this.maxSizeOfBucket;
  }
}
