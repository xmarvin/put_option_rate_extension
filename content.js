function addInterestRate(tr) {
  const diff = new Date(parseInt(document.querySelectorAll("select")[0].value)*1000) - new Date()
  const strikeDays = parseInt(diff / (1000 * 60 * 60 * 24), 10);
  const strike = parseFloat(tr.children[2].textContent)
  const lastPrice = parseFloat(tr.children[3].textContent)
  const result = (lastPrice / strike * 100 / strikeDays * 365).toFixed(2) + '%'
  const td = document.createElement('td');
  td.appendChild(document.createTextNode(result));
  tr.appendChild(td);
}
function addHeader(){
  const headerSelector = ".puts.list-options thead tr";
  const tr = document.querySelector(headerSelector);
  if (document.querySelectorAll(".puts.list-options thead tr th").length == 12){
    return false;
  }
  const th = document.createElement('th');
  th.className = "Va(b) Py(4px) Fw(400) Fz(xs) Pstart(7px) C($tertiaryColor) Cur(p)"
  const span = document.createElement('span');
  span.appendChild(document.createTextNode("Rate"));
  th.appendChild(span);
  tr.appendChild(th);
  return true;
}

function rate(){
  setTimeout(function(){
    if (addHeader()){
      const trSelector = ".puts.list-options tbody tr";
      document.querySelectorAll(trSelector).forEach(addInterestRate);
      const select = document.querySelector("select");
      select.addEventListener("change", rate);
    }
  }, 3000)
}

rate();
