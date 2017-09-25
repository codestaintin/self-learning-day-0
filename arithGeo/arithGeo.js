const aritGeo = (array) => { 
    
   if (!(array instanceof Array))
       return "Not an array";
   if (array.length === 0)
       return 0;
   if ( array.length <= 2 && array.length > 0 )
       return "Enter at least 3 array index values";
   if (array === undefined)
       return "Undefined parameter";
// Check for common Difference between the vslues
   let cDifference = array[1] - array[0];

// Check for common ratio between the values
   let cRatio = array[1] / array[0];
 
   let arithmetic = true;
   let geometric = true;
 
   for(let i = 0; i < array.length - 1; i++) {     
     if( array[i + 1] - array[i] !== cDifference )
       arithmetic = false;
     if (array[i + 1] / array[i] !== cRatio )
       geometric = false;     
   } 
     if(arithmetic)
         return "Arithmetic";
     else if(geometric)
         return "Geometric";
     else
         return -1;
}

export default aritGeo;