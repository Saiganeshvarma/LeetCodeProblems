function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
}

// Example usage
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(list) {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
console.log(listToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]

list1 = arrayToList([]);
list2 = arrayToList([]);
mergedList = mergeTwoLists(list1, list2);
console.log(listToArray(mergedList)); // Output: []

list1 = arrayToList([]);
list2 = arrayToList([0]);
mergedList = mergeTwoLists(list1, list2);
console.log(listToArray(mergedList)); // Output: [0]
