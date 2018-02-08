



var t1 = {
    t2: "t2"
};

function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return true;
    } else {
        return false;
    }
}
removeProperty(t1, 't2');