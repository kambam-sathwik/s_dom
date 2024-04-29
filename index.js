// Creating Elements & DOM Relations
// Deliverables:

// 1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".

// 2. Make the sub-heading text italic.

// 2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

// 3. On this paragraph tag set an id of "fruits-total".
/*const subhead = document.createElement('h3');
const subheadtxt = document.createTextNode(
  'Buy high quality organic fruits online'
);
subhead.appendChild(subheadtxt);
subhead.style.fontStyle='italic';
const head = document.querySelector('#header');
head.appendChild(subhead);
const para=document.createElement('p');
const paratxt=document.createTextNode('Total fruits: 4');
para.appendChild(paratxt);
const ul=document.querySelector('.fruits');
const divs=document.querySelectorAll('div');
const secdiv=divs[1];
// secdiv.insertBefore(para,ul);*/
// Deliverables:

// 1. In each "li" after the delete button add an edit button with class 'edit-btn'
// 2. Now, implement the add and delete functionality just the way it is done in the video. There is only one difference that now the new 'li' element that you will create will have two buttons (delete and edit) instead of one button.
/*const lis=document.querySelectorAll('li');
for(let i=0;i<lis.length;i++){
  const ebtn=document.createElement('button');
  const ebtntxt=document.createTextNode('Edit');
  ebtn.appendChild(ebtntxt);
  ebtn.setAttribute('class','edit-btn');
  lis[i].appendChild(ebtn);
};
const fruits_list=document.querySelector('.fruits');
const fm=document.querySelector('form');
fm.addEventListener("submit",function(event){
  event.preventDefault();
  const fta=document.querySelector('#fruit-to-add');
  const nli=document.createElement('li');
  nli.innerHTML=fta.value+'<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';
  nli.setAttribute('class','fruit');
  fruits_list.appendChild(nli);
})
fruits_list.addEventListener('click',function(event){
  event.preventDefault();
  if(event.target.classList.contains('delete-btn')){
    const ftd=event.target.parentElement;
    fruits_list.removeChild(ftd);
  }
})*/
// Deliverables:

// 1. Use DOM Manipulation to add another input element inside form, before the button. This input element will take the description of the fruit.

// 2. Use DOM Manipulation to show the fruit description (in italics) on screen alongwith the fruit name. This description should be shown in the next line (HINT: To show description on next line you can make use of the paragraph tag).

// 3. Now, create a filter that shows only those fruits whose either name or description or both matches the entered text.
const dbtn=document.createElement('input');
dbtn.setAttribute('id','description');
const fm=document.querySelector('form');
const sbtn=document.querySelector('button');
fm.insertBefore(dbtn,sbtn);
fm.addEventListener('submit',function(event){
  event.preventDefault();
});
const fruits_list=document.querySelector('.fruits');
fm.addEventListener('submit',function(event){
  event.preventDefault();
  const nli=document.createElement('li');
  nli.setAttribute('class','fruit');
  const fta=document.querySelector('#fruit-to-add');
  const ftatxt=document.createTextNode(fta.value);
  nli.appendChild(ftatxt);
  const dta=document.createElement('p');
  const dtavalue=document.querySelector('#description');
  const dtatxt=document.createTextNode(dtavalue.value);
  dta.appendChild(dtatxt);
  nli.appendChild(dta);
  const dbtn=document.createElement('button');
  dbtn.setAttribute('class','delete-btn');
  const dbtntxt=document.createTextNode('x');
  dbtn.appendChild(dbtntxt);
  nli.appendChild(dbtn);
  fruits_list.appendChild(nli);
});
const search=document.querySelector('#filter');
search.addEventListener('keyup',function(event){
  const searchtxt=event.target.value.toLowerCase();
  const fruititems=document.querySelectorAll('.fruit');
  for(let i=0;i<fruititems.length;i++){
    const ftxt=fruititems[i].firstChild.textContent.toLowerCase();
    const dtxt=fruititems[i].firstElementChild.textContent.toLowerCase();
    if(ftxt.indexOf(searchtxt)===-1 && dtxt.indexOf(searchtxt)===-1){
      fruititems[i].style.display='none';
    }
    else{
      fruititems[i].style.display='flex';
    }
  }
});