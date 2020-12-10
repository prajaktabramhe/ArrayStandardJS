class ArrayMethodclass 
{   
    shiftFunction(array) 
    {
        console.log("\nYou choose shift");
        console.log(array);
        array.shift();
        console.log("After shift function used");
        console.log(array);
    }
    
    unshiftFunction(array) 
    {
        console.log("\nYou choose Unshift");
        console.log(array);
        array.unshift(110,120)
        console.log("After Unshift function used");
        console.log(array);
    }
    
    popFunction(array) 
    {
        console.log("\nYou choose Pop");
        console.log(array);
        array.pop()
        console.log("After Pop function used");
        console.log(array);
    }
    
    pushFunction(array) 
    {
        console.log("\nYou choose Push");
        console.log(array);
        array.push(200,300)
        console.log("After Push function used");
        console.log(array);
    }

    spliceFunction(array) 
    {
        console.log("\nYou choose Splice");
        console.log(array);
        array.splice(1,2)
        console.log("After Splice function used");
        console.log(array);
    }

    sliceFunction(array) 
    {
        console.log("\nYou choose Slice");
        console.log(array.slice(1, 5)); //start from index 1 to 4
        console.log(array);
    }

    indexOfFunction(array) 
    {
        console.log("\nYou choose indexof");
        console.log(array);
        let result = array.indexOf(100);
        console.log(result);
        
    }
    
    joinFunction(array) //join method is used to return a string representation of all the array elements joined with the specified parameter.
    {
        console.log("\nYou choose Join");
        console.log(array);
        let output1 = array.join("*");
        console.log("After Join function used");
        console.log(output1);
    }


    filterFunction(array) 
    {
        console.log("\nYou choose Filter");
        function checkFilter(element) 
        {
            return element > 50;
        }
        console.log(array.filter(checkFilter));
        console.log(array);
    }

    reduceFunction(array) 
    {
        console.log("\nYou choose Reduce");
        function myFun(total, number) 
        {
            return total + number;
        }
        console.log(array.reduce(myFun));
        console.log(array);
    }

   
    
    mapFunction(array) // return with the square root of all the value in array
    {
        console.log("\nYou choose Map");
        console.log(array.map(Math.sqrt));
        console.log(array);
    }

        
    sortFunction(array) 
    {
        
        console.log("\nYou choose Sort");
        console.log(array.sort());
        
    }

    
    forEachFunction(array) 
    {
        console.log("\nYou choose forEach");
        
        array.forEach
        (
            function(entry) 
            {
                console.log(entry);
            }
        );
    }

    
    reverseFunction(array) 
    {
        console.log("\nYou choose Reverse");
        console.log(array);
        array.reverse()
        console.log("After Reverse function used");
        console.log(array);
    }
}

module.exports = ArrayMethodclass;