declare namespace umdLib {
  const version: string
  function doSomething(): void
}

// umd库必须加上这一条
export as namespace umdLib

export = umdLib