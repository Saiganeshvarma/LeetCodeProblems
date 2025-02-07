var hasCycle = function(head) {
    var fast = head;
    var slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast === slow) {
            return true; 
        }
    }
    
    return false; 
};
console.log(hasCycle([3,2,0,-4]));