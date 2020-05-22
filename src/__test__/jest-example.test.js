test('delete object key', () => {
    const data = {
      foo: 'foo',
      bar: 'bar',
    }
  
    delete data.bar
  
    expect(data).toEqual({
      foo: 'foo',
    })
  })
  