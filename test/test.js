function Map() {
    var struct = function (key, value) {
        this.key = key;
        this.value = value;
    }
    var put = function (key, value) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].key === key) {
                this.arr[i].value = value;
                return;
            }
        }
        this.arr[this.arr.length] = new struct(key, value);
    }
    var get = function (key) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].key === key) {
                return this.arr[i].value;
            }
        }
        return null;
    }
    var remove = function (key) {
        var v;
        for (var i = 0; i < this.arr.length; i++) {
            v = this.arr.pop();
            if (v.key === key) {
                continue;
            }
            this.arr.unshift(v);
        }
    }
    var size = function () {
        return this.arr.length;
    }
    var isEmpty = function () {
        return this.arr.length <= 0;
    }
    this.arr = new Array();
    this.get = get;
    this.put = put;
    this.remove = remove;
    this.size = size;
    this.isEmpty = isEmpty;
}

var map = new Map();
map.put("A","12345");
map.put("B","67890");
map.put("C","66666");
map.put("D","89898989");
map.put("E","123");
map.put("F","1234567890c");

function Have_Username(Username){
    if(map.isEmpty()){
        return "-1";
    }
    var res = map.get(Username);
    if(res == null){
        return "-1";
    }
    return res;
}
function signup(Username, Password){
    if(Have_Username(Username) != "-1"){
        return "Username is already existed.";
    }
    else{
        map.put(Username,Password);
        return "Success!";
    }
}

function login(Username, Password){
    var password = Have_Username(Username);
    if(password == "-1"){
        return "Username doesn't exist!";
    }
    else{
        if(password != Password){
            return "Wrong password!";
        }
        else{
            return "Login success!";
        }
    }
}

// test('',function(){
//     ok();
// });

test('Have_Username()',function (){
    equal(Have_Username("A"), "12345");
    equal(Have_Username("B"), "67890");
    equal(Have_Username("D"), "89898989");
    equal(Have_Username("F"), "1234567890c");
    equal(Have_Username("G"), "-1");
    equal(Have_Username("hahahahah"), "-1");
});

test('signup()',function (){
    equal(signup("A", "33"), "Username is already existed.");
    equal(signup("F", "233333"), "Username is already existed.");
    equal(signup("G", "233"), "Success!");
    equal(signup("age", "23893"), "Success!");
    equal(signup("G", "233"), "Username is already existed.");
});

test('login()',function (){
    equal(login("A", "12345"), "Login success!");
    equal(login("C", "66666"), "Login success!");
    equal(login("I", "12345"), "Username doesn't exist!");
    equal(login("asdfg", "12348455"), "Username doesn't exist!");
    equal(login("A", "123456"), "Wrong password!");
});