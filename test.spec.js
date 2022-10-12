function sayHello (name, fn) {
    if (name === 'waylon') {
        fn()
    }
}

test('测试加法', () => {
    expect(1 + 2).toBe(3)
})
test('测试函数', () => {
    let fn = jest.fn()
    sayHello('waylon', fn)
    expect(fn).toHaveBeenCalled()
})