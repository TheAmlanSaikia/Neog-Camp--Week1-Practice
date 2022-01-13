// a)    var aloo = 1;
//     if (aloo == 1) {
//     var a = 2;
//     console.log(a);
//     }
//     console.log(aloo);



                    // const aloo = 1;

                    // if(aloo ===  1){
                    // const a = 2;
                    // console.log(a)
                    // }
                    // console.log(aloo);

        // 


//    b)  var multiply = function(x, y) {
//         return x * y;
//         };

                // const multiply = (x,y) => x*y;



//     c)  var customer = {
//         name: "Bhaalo",
//         };
//         var card = {
//         amount: 20,
//         product: "Aaalo",
//         unitprice: 50,
//         };
//         var message =
//         "Hello " +
//         customer.name +
//         " wants to buy " +
//         card.amount +
//         " " +
//         card.product +
//         " for price of " +
//         card.unitprice +
//         " per piece";



    // const customer = {
    //     name: "Bhaalo",
    // };
    
    // const card = {
    //      amount: 20,
    //      product: "Aaloo",
    //      unitprice: 50,
    // };

                
    //             const { name } = customer;
    //             const {amount, product, unitprice} = card; 

    //             const message = `Hello ${name} wants to buy ${amount} ${product} for price of ${unitprice} per piece`



    // d) var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
    // CEO = Neog[0],
    // Mentor = Neog[2];


            
                // const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
                // let [CEO, ,Mentor] = Neog;

                // console.log(CEO);
                // console.log(Mentor);



    // e)  var arr = ["MA", "TA", "PA", "CA"];
    //     var firstName = arr[0],
    //     var surname = arr[1];
    //     console.log(firstName);
    //     console.log(surname);


                //     const arr =  ["MA", "TA", "PA", "CA"];
                //     let [ firstName, surname] = arr;
                //     console.log(firstName);
                //     console.log(surname);


    //   f)    var Aaloo = "Tasty";
    //         var Bhaloo = "Cute";

                //         var Obj = {
                //         Aaloo: Aaloo,
                //         Bhaloo: Bhaloo
                //         };


                    //         let Obj = {
                    //             Aaloo,Bhaloo
                    //         }

                    //         console.log(Obj);



        //   g)     var a = 5;
        //          var b = 10;
        //         // console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

                        // const Obj = {
                        //     addSum :  (a,b) => a+b,
                        //     mulSum : (a,b) => 2 *(a+b)
                        // }

                        

                        // console.log(`Fifteen is ${Obj.addSum(a,b)} and not ${Obj.mulSum(a,b)}`)


    //  h) const arithmeticsObj = {
    //      sum: (a,b) => a+b,
    //      multiply: (a,b) => a*b,
    //  }

    //          const { sum, multiply } = arithmeticsObj;

    //          console.log(sum(2,3));

    //             Use tradition func inside object. Because we do func program
    //                   multiply(a,b){
    //                       return a*b
    //                   }




    //  i)var avengers = {
    //     operation: "Assemble",
    //     members: [
    //       {
    //         ironMan: "Tony Stark"
    //       },
    //       {
    //         captainAmerica: "Steve Rogers"
    //       },
    //       {
    //         blackWidow: "Natasha Romanoff"
    //       }
    //     ]
    //   };
    //   var operation = avengers.operation,
    //     members = avengers.members;
     
                    
                //    let {
                //        operation, members 
                //     } = avengers;


    // 2. const packIt = (...args) => console.log(args)

    //    packIt(1,2,3,5,5)

           
                // function packIt(array1){

                //     console.log(array1);
                // }

                // packIt([1,2,3,4,5])

                          //for(let i=0; i<arguments.length;i++)
                          //Search For arguments keyword, which was used is Es5 feature
                            //instead of pushing the arguments in array you can use spread operator too
                                // console.log(...arguments)

    //    3. a) 
       
    //         const hello = () => "Hello"
    //         const welcome = () => "Welcome"
    //         const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
    //         console.log(Hello, Welcome)

                    
            //  b) const obj = {
            //     aloo : 1,
            //     bhallo : 2
            // }
            
            // const {c : alo = [2,3,4].push(5), aloo} = obj 
            
            // console.log(aloo)


            // let allows to reassign, var can be used to redeclare, const doesnt alows to reassign as well