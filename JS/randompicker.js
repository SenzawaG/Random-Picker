const inpRan = document.getElementById('inpRan');
const inpFix = document.getElementById('inpFix');
let   memRan = [];
let   memFix = [];
let   backSp =  0;

const memAdd = (input,target) => {
  const memory = input.value;
  let    index = 0;
        target = [];

  for ( i = 0; i < memory.length; i++) {
    if (target[index] == undefined) target[index] = "";
    if (memory[i] != '\n')          target[index] += memory[i];
    else index++;
  }
  return target;
}

inpRan.addEventListener('input', async()=> {
  memRan = memAdd(inpRan,memRan);
});
inpFix.addEventListener('input', async()=> {
  memFix = memAdd(inpFix,memFix);
});

// const query_json = (path) => {
//   $.getJSON(`${path}.json`, (data)=> {
//     console.log(data.member);
//   })
// } 
