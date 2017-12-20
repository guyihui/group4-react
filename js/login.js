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
    var isEmpty = function () {
        return this.arr.length <= 0;
    }
    this.arr = new Array();
    this.get = get;
    this.put = put;
    this.remove = remove;
    this.isEmpty = isEmpty;
}

var map = new Map();

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