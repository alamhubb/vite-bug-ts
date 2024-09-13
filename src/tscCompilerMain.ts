function Resource(target, {kind, name}) {
    return function (initialValue) {
        console.log(222222) //1
        return 666;
    };
}

class TestSerivce {
    @Resource
    testA;

    test() {
        console.log(11111);
        console.log(this.testA);
    }
}

const newc = new TestSerivce()
newc.test()
