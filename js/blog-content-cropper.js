$(document).ready(() => {
    const posts = $('.post-content');
    
    for(let i=0; i<posts.length; i++){
        console.log(posts[i].textContent);
        posts[i].textContent = posts[i].textContent.substr(0, 350) + "...";
        posts[i].style.marginBottom = "30px";
    }
});