let myTable = document.getElementsByClassName("my-table")[0];
let friendTable = document.getElementsByClassName("friend-table")[0];
let amountShipsDestruction = 0
let counterText = document.getElementById('counter__text');

let randomNumber;
// gif webp (!) 10%

let show = true;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function createTable(table) {
  for (let i = 0; i < 10; i++) {
    let newRow = `
        <tr>
            <td id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
            <img class="bulk" src="https://s3-alpha-sig.figma.com/img/2eb0/2f37/91581abf51c52904af35bc4cc5e2be4a?Expires=1687132800&Signature=dmNnvn-QxQEPfi6mXuEE0qFoQhVF5O4FzjjTsOZlzk3zErhdiZtWaj0TjCMr2HXSbk1-fkSrRE0hUeQQQ-C5jcgUiqAv6eTej4DzAgGHFevMZ43~m6J5YESd9IhVOozSExLBZ94v3X0gKkCSvdC8NUevupjBTsv3oibgqEpmvqIWnvcXLP-JjwQRy6UkcNjtZmNLuUB71RCPf2iXgdtld5wkjZVNQOTDSnW23gpu2pO2SygvvVKlMz17ehPu7ycvYrzyBoiL1yFXh91eCN8zmNPTWTq8R81Oz~WAyiSijLXM1J62qiUE~HMpmQ-AeTYY2WxzMJPWqsDDygZL2WiG9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
            </td>
            <td id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div6" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div7" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div8" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div9" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
            <td id="div10" ondrop="drop(event)" ondragover="allowDrop(event)"></td>
        </tr>  
        `;
    table.innerHTML += newRow;
  }
}

createTable(myTable);
createTable(friendTable);

let busyTd = [];



function randomPc(typeShip, amount) {
  debugger;
  if (typeShip == 1) {
    
    for (let i = 0; i < amount; i++) {

      try {
      
      randomNumber = Number((Math.random() * 99).toFixed(0)); // '9' '34' '88' 99 10

      if (busyTd.includes(randomNumber)) {
        
        randomPc(typeShip, amount - i-1);
      } else {
        document.getElementsByTagName("td")[randomNumber].classList.add("ship-item");
        document.getElementsByTagName("td")[randomNumber].classList.add("ship-item-1");
        document.getElementsByTagName("td")[randomNumber-1].classList.add("gap-ship");
        document.getElementsByTagName("td")[randomNumber+1].classList.add("gap-ship");
        busyTd.push(randomNumber - 1);
        busyTd.push(randomNumber + 1);
        busyTd.push(randomNumber);
        
        addBusyTd(1)
      
      }
      } catch(e){
        randomPc(typeShip, amount - i-1);
      }
      
      
      
      
      
        
      
      
      
      
      
    }
    
    
   
    
  }

  
  
  
  if (typeShip == 2) {
    for (let i = 0; i < amount; i++) {
      randomNumber = Number((Math.random() * 99).toFixed(0)); // '9' '34' '88' 99 10
      
  
      if ((randomNumber).toString().slice((randomNumber).toString().length-1) == '9') {
        return randomPc(typeShip, amount - i);
        
        
      }
     
      
      

      if (busyTd.includes(randomNumber) ||  busyTd.includes(randomNumber+1)) {
        randomPc(typeShip, amount - i);
      } else {
        document
          .getElementsByTagName("td")
          [randomNumber].classList.add("ship-item");
        document
          .getElementsByTagName("td")
          [randomNumber].classList.add("ship-item-2");
        document
          .getElementsByTagName("td")
          [randomNumber + 1].classList.add("ship-item");
        document
          .getElementsByTagName("td")
          [randomNumber + 1].classList.add("ship-item-2");
        
        busyTd.push(randomNumber);
        busyTd.push(randomNumber + 1);

        busyTd.push(randomNumber - 1);
        busyTd.push(randomNumber + 2);
        busyTd.push(randomNumber + 1);
         document
          .getElementsByTagName("td")
          [randomNumber - 1].classList.add("gap-ship");
        
         document
          .getElementsByTagName("td")
          [randomNumber + 2].classList.add("gap-ship");
        
        
        
         addBusyTd(2)
        

        
      }
    }
    }


  
  
  
  if (typeShip == 3) {
    for (let i = 0; i < amount; i++) {
      randomNumber = Number((Math.random() * 100).toFixed(0)); // '9' '34' '88' 99 10

    
      if (busyTd.includes(randomNumber)) {
        randomPc(typeShip, amount - i);
      } else {
        document.getElementsByTagName("td")[randomNumber].classList.add("ship-item");
        document
          .getElementsByTagName("td")
          [randomNumber + 1].classList.add("ship-item");
        document
          .getElementsByTagName("td")
          [randomNumber + 2].classList.add("ship-item");
        
        
        addBusyTd(3)
        

        busyTd.push(randomNumber - 1);
        busyTd.push(randomNumber + 2);
        busyTd.push(randomNumber + 3);
        busyTd.push(randomNumber + 1);
        busyTd.push(randomNumber);
      }
    }
  }
  

  if (typeShip == 4) {
    randomNumber = Number((Math.random() * 100).toFixed(0)); // '9' '34' '88' 99 10

    if (busyTd.includes(randomNumber)) {
      randomPc(typeShip);
    } else {
      document
        .getElementsByTagName("td")
        [randomNumber].classList.add("ship-item");
      document
        .getElementsByTagName("td")
        [randomNumber + 1].classList.add("ship-item");
      document
        .getElementsByTagName("td")
        [randomNumber + 2].classList.add("ship-item");
      document
        .getElementsByTagName("td")
        [randomNumber + 3].classList.add("ship-item");

      busyTd.push(randomNumber - 1);
      busyTd.push(randomNumber + 2);
      busyTd.push(randomNumber + 3);
      busyTd.push(randomNumber + 4);
      busyTd.push(randomNumber + 1);
      busyTd.push(randomNumber);
      
        addBusyTd(4)
    }
  }
  
  
  

  
}




randomPc(1, 4)


if (document.getElementsByClassName("ship-item-1").length == 3) {
      randomPc(1, 1);
    }



randomPc(2, 3);



// randomPc(3, 2);
// randomPc(4, 1);

document.getElementsByTagName("td")[0];

if (show == false) {
  for (let i = 0; i < 100; i++) {
    document.getElementsByTagName("td")[i].classList.add('ship-item')
  }
}


let allShip = document.getElementsByClassName('ship-item')

for (let i = 0; i < allShip.length; i++) {
  allShip[i].addEventListener('click', function (e) {
    if (getComputedStyle(e.target).backgroundColor != 'rgb(255, 0, 0)') {
       e.target.style.backgroundColor = 'rgb(255, 0, 0)'
      amountShipsDestruction++
      counterText.textContent = amountShipsDestruction

    }
   
  })
}


let dd = document.querySelectorAll("table")[0].querySelectorAll("td:not(.ship-item)");
for (let i = 0; i < dd.length; i++) {

  dd[i].addEventListener('click', function (e) {
    e.target.style.background = 'transparent'
    
    clickPc()

  })
}

let clickedPc = []


function clickPc () {
  // 3245+345-3245*12/234.324
  // time (1 September 1970)
  //   4234243432434546
  // 4234243432434546*14/4*80*4
  

  let rand = Number((Math.random()*100).toFixed(0))+100
    if (clickedPc.includes(rand)) {
    clickPc()
  } else {
  clickedPc.push(rand)
  document.getElementsByTagName('td')[rand].style.background = 'black'
  
  }
}


function addBusyTd(type) {
 
    busyTd.push(randomNumber-11);
    busyTd.push(randomNumber-10);
    busyTd.push(randomNumber-9);

    busyTd.push(randomNumber+9);
    busyTd.push(randomNumber+10)
    busyTd.push(randomNumber+11)
  document.getElementsByTagName("td")[randomNumber-11].classList.add("gap-ship");
  document.getElementsByTagName("td")[randomNumber-10].classList.add("gap-ship");
  document.getElementsByTagName("td")[randomNumber-9].classList.add("gap-ship");
  document.getElementsByTagName("td")[randomNumber+11].classList.add("gap-ship");
  document.getElementsByTagName("td")[randomNumber+10].classList.add("gap-ship");
  document.getElementsByTagName("td")[randomNumber+9].classList.add("gap-ship");

  if (type > 1) {
    
    
    
    
        busyTd.push(randomNumber-8);
        busyTd.push(randomNumber+8);
      document.getElementsByTagName("td")[randomNumber-8].classList.add("gap-ship");
      document.getElementsByTagName("td")[randomNumber+12].classList.add("gap-ship");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
  if (type > 2) {
        busyTd.push(randomNumber-7);
        busyTd.push(randomNumber+7);
    document.getElementsByTagName("td")[randomNumber-7].classList.add("gap-ship");
      document.getElementsByTagName("td")[randomNumber+7].classList.add("gap-ship");
  }
  
    if (type > 3) {

        busyTd.push(randomNumber-6);
        busyTd.push(randomNumber+6);
      
      
      document.getElementsByTagName("td")[randomNumber-6].classList.add("gap-ship");
      document.getElementsByTagName("td")[randomNumber+6].classList.add("gap-ship");
  }
  
  
  
  
  
          
}

// 450 12154 5452 4587  452 451 12501  583
