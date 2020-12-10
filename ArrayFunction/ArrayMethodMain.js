let ArrayMethodclass = require('./ArrayMethodBusinessLogic');
let readline = require('readline-sync');
let classobject = new ArrayMethodclass();
let array = [10,20,30,40,50,60,70,80,90,100];
let flag = true;


function main()
{
   
    while (flag == true)
    {
       //userinput to select the option in menu    
       console.log("1.Shift");
       console.log("2.Unshift");
       console.log("3.Pop");
       console.log("4.Push");
       console.log("5.Splice" ); 
       console.log("6.Slice");
       console.log("7.Indexof");
       console.log("8.Join");
       console.log("9.Filter");
       console.log("10.Reduce");
       console.log("11.Map");
       console.log("12.Sort");
       console.log("13.forEach");
       console.log("14.Reverse");

   let choice = readline.question("enter choice : ");

      switch (choice) 
      {
      case "1":
         classobject.shiftFunction(array);
        
      break;
      
      case "2":
         classobject.unshiftFunction(array);
      break;
                
      case "3":
         classobject.popFunction(array);
      break;

      case "4":
         classobject.pushFunction(array);
      break;

      case "5":
         classobject.spliceFunction(array);
        
      break;

      case "6":
         classobject.sliceFunction(array);
      break;

      case "7":
         classobject.indexOfFunction(array);
      break;

      case "8":
         classobject.joinFunction(array);
      break;

      case "9":
         classobject.filterFunction(array);
      break;

      case "10":
         classobject.reduceFunction(array);
      break;
            
      case "11":
         classobject.mapFunction(array);
      break;

      case "12":
         classobject.sortFunction(array);
      break;

      case "13":
         classobject.forEachFunction(array);
      break;

      case "14":
         classobject.reverseFunction(array);
      break;

      default:
        flag = false;
        console.log("Invalid option"); 
     }    
   }
}
main();