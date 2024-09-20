class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteDuplicates(head) {
    let current = head;
    
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next; 
        } else {
            current = current.next; 
        }
    }
    
    return head;
}


function arrayToList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}


function listToArray(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}


let head1 = arrayToList([1, 1, 2]);
let result1 = deleteDuplicates(head1);
console.log(listToArray(result1));

let head2 = arrayToList([1, 1, 2, 3, 3]);
let result2 = deleteDuplicates(head2);
console.log(listToArray(result2)); 
