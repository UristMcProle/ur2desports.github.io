let points = [0,35,29,25,22,20,18,16,14,12,10,9,8,7,6,5,4,3,2,1,0]
let tbl = document.querySelector('.results-table')
let rows = tbl.querySelectorAll('tr')

for(let r of rows){
  let pts = r.querySelector('th:nth-last-child(1)')
  if(!pts.classList.contains('header')){
    pts.className = "points-total"
    pts.innerText = ""

    let total = 0;

    for(let c of r.querySelectorAll('td')){
      if(c.classList.contains('fl'))
        total += 1;
      if (!isNaN(c.innerText)){
        total += points[Number(c.innerText)]
      }
    }

    pts.innerText = total;
  }

}

sortTableByPoints(document.querySelector('.results-table'))

for(let c of tbl.querySelectorAll('td')){
  c.style.textAlign = "center"
  if(!c.classList.contains('points-total')){
  	switch(c.innerText.trim()){
  		case '1':
  			c.style.backgroundColor = "#FFFFBF"
  			c.className += " podium"
  			break
  		case '2':
  			c.style.backgroundColor = "#DFDFDF"
  			c.className += " podium"
  			break
  		case '3':
  			c.style.backgroundColor = "#FFDF9F"
  			c.className += " podium"
  			break
  		case '4':
  		case '5':
  		case '6':
  		case '7':
  		case '8':
  		case '9':
  		case '10':
  			c.style.backgroundColor = "#DFFFDF"
  			break
  		case '10':
  		case '11':
  		case '12':
  		case '13':
  		case '14':
  		case '15':
  		case '16':
  		case '17':
  		case '18':
  		case '19':
  		case '20':
  			c.style.backgroundColor = "#CFCFFF"
  			break
  		case 'R':
  			c.style.backgroundColor = "#EFCFFF"
  			break
  		default:
  			break
  	}

    if (c.classList.contains("pdnf")){
      c.style.backgroundColor = "#EFCFFF"
    }

    if(c.classList.contains('fl')){
      c.style.fontWeight = "bold"
    }

    if (c.classList.contains('pole')){
      c.style.fontStyle = "italic"
    }
  }
}

function sortTableByPoints(tab){
  let rows = tab.querySelectorAll('tbody > tr')
  let ordered = []

  for(let r of rows){
    ordered.push(r)
  }

  ordered.sort(function(a,b){
    return Number(b.querySelector('th:nth-last-child(1)').innerText)-Number(a.querySelector('th:nth-last-child(1)').innerText)
  })

  tab.querySelector('tbody').innerHTML = ""
  let x = 1
  for(let r of ordered){
    r.querySelector('.pos').innerText = x
    tab.querySelector('tbody').appendChild(r)
    x++
  }

}