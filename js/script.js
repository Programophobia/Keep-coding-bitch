'use strict';


const optArticleSelector = '.post',
 optTitleSelector = '.post-title',
 optTitleListSelector = '.titles';
function generateTitleLinks(){
 /* remove contents of titleList */
 const titleList = document.querySelector(optTitleListSelector);
 titleList.innerHTML = '';
 /* find all the articles and save them to variable: articles */
 /* ... */const articles = document.querySelectorAll(optArticleSelector);
 let html = '';
 for(let article of articles){
let articleID = article.getAttribute('id');
let titleElement = article.querySelector(optTitleListSelector);

 /* ... */
 /* find the title element */
 /* ... */
 /* get the title from the title element */
 /* ... */
 /* find the title element */
 /* ... */
 /* get the title from the title element */
 
 /* create HTML of the link */
 let linkHTML = '<li><a href="#' + articleID +'"><span>' + articleID + '</span></a></li>';
 /* insert link into html variable */
 html = html + linkHTML;
 }
 titleList.innerHTML = html;
}
generateTitleLinks();
function titleClickHandler(event){
    event.preventDefault();
 const clickedElement = this;
 console.log('clickedElement ' + clickedElement);

 /* remove class 'active' from all article links */
 const activeLinks = document.querySelectorAll(' .titles a.active');
for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}
 /* add class 'active' to the clicked link */
 clickedElement.classList.add('active');
 /* remove class 'active' from all articles */
 const activeArticles = document.querySelectorAll('.posts article.active')
for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}
 /* get 'href' attribute from the clicked link */
 const articleSelector = clickedElement.getAttribute('href');
 /* find the correct article using the selector (value of 'href'
attribute) */
const targetArticle = document.querySelector(articleSelector);
 /* add class 'active' to the correct article */
 targetArticle.classList.add('active');
}
const links = document.querySelectorAll('.titles a');
for(let link of links){
 link.addEventListener('click', titleClickHandler);
}