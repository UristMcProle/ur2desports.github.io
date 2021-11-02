let tbl = document.querySelector('.results-table')
let rows = tbl.querySelectorAll('tr')

for(let r of rows){
  r.lastChild.className += " points-total"
}

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

    if (c.classList.contains("p_dnf")){
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