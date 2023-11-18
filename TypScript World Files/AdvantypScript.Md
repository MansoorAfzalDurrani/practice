/////////////Advance type Script
             Out Comes for Today Lecture
  1 Create union types using the | operator
  2 create intersection types using the & operator
  3 Explain the concept of 'type narrowing'
  4 Create useful subtypes with Built-in generic helpter such as pic/omit/partial
  5 explain why and how to use literal types to restrict the type of string or number wariables to specific strings or numbers.

  import { isVariableDeclaration } from "typescript";

const someOject:{ thing: string | number }= { thing: 'someValue'};
someOject.thing ='a';
// can't reply on influence if the type might change

type PersonWithTwoName ={ firstname: string, lastName: string};
type PersonWithFullName ={fullName: string};
type Person = PersonWithFullName | PersonWithTwoName;
// Intersactions
type ServerError ={error:false;} | {error:true; errorMessage:string;}
type GetUsersResponse = GetUsersData & ServerError;
type GetProductsResponse = GetProductsData & ServerError;
funciton  processProductsResponse(response: GetProductsResponse){
  if(Response.error){
    console.error(Response.error)
  }else{

  }
}

/////////////////////////////////type narrowing//////////
function handleProduct(productId: number | string){
  console.log(`ID:${productId}`);
  productId.toFixed(2); // only function combine in both..... thats why not accepting.
  //type Narrowing.
  if(typeof productId === 'string'){
    productId. /// all string related Action can perform here
  }else{
   productId. // all number related Action can perform here
  }
}
////////////////////////////////////////////////
interface Dragon{
  breatheFire(): void;
  hunt(): void;
}
interface Shark{
  swim(): void;
  hunt(): void;
}
declare function getCreature(): Dragon | Shark;
let creature = getCreature();
//////////////////////type Narrow with "in" operator
creature.hunt(); // as it exists both in Dragon And also in Shark
typeof creature; //Ojbect
if("breatheFire" in creature){ 
 creature.breatheFire();
}else{
  creature.swim(); // his one was creature.swim(); my one is n't  dn't know why
}

////////////////////////////////

type Instruction = 'L' | 'R' | 'M';
function processInstruction(instruction: Instruction){
  switch(instruction){
    case 'L':
      // Move left
      break;
  }
  }
  function getUserInput(): string{
    return 'L';
  }
  
  const input = getUserInput();
  processInstruction(input); // Argument of type 'string' is not assignable to parameter of type 'Instruction'
    ////////////////////////type Guard////////////////////////
    function isInstruction(input :string) : input is Instruction{
      // return valid_input.includes(input);
      return input === 'L' || input === 'R' || input === 'M';
    }
    if(isInstruction(input)){
      processInstruction(input); // we narrow string to instruction withcustom logic.
      }else{
        input // here it is string.
      }
/////////////////////

let someString = "Original";
someString ="Reassigned";
const anotherString = "constrant";

function print(text : string, alignment: "left" | " right" | "centre"){

}
function compare(a:string,b:string) : -1 | 0 | 1{
  return a===b? 0:(a>b? 1: -1);
}

let TEXT_COLOURS=['text-normal', 'text-dark', 'text-success'] as const ;
//Array<string>
// "as const " applies to object or arrays. now pushing is not allowed. and it
// becomes readonly array.

type TextColor = typeof TEXT_COLOURS[number];
function print(text: string, alignment: 'left' | 'right'| 'center', colour: TextColor){

}

function isTextcolour( s: string) : s is TextColor{
  return TEXT_COLOURS.includes(S);
}

//////////////////////// generic - "type that varies"
function somefunction(someNumber: number){
}
somefunction(22);
const other : Array<string> =['s'];
const stuff : Array<number> = [1,2,3]

//type MyArray = ???;
type MyArray<T> = T[];
const one: MyArray<number> = [1,2,3];
const two : MyArray<User |string>= [1,2,'a'];
const three : MyArray<string> = ['ab'];

////////////////////////Pick, Partial, Omit///////////////////////////
// build-in generic helpers.

declare type UserPost = any;
declare type UserComment = any;
declare function isValidId(id : string) : boolean;
type UserRole = 'None' | 'Admin' | 'Moderator';
type User ={
  id: string;
  name: string;
  roles: Array<UserRole>; //UserRole[]
  posts: Array<UserPost>; //UserPost[]
  comments: Array<UserComment>; //UserComment[]
  active: boolean;
}

//type UserIdAndRoles = { id: string, role: Array<UserRole>};

function doesUserHaveRole( user:  Pick< User, 'id'| 'roles'>, role: UserRole){
  if(!isValidId(user.id)) return false;
  return user.roles.includes(role);
}

type OptionalUser = Partial<User>;
type UserWithoutId= Omit<User,'id'>;


