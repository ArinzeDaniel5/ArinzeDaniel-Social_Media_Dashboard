import {savePosts, getPosts} from "./storage.js";
const addPostBtn=document.getElementById("addPostBtn");
const postsContainer=document.getElementById("postsContainer");
function displayPosts() {
    if(!postsContainer) return;
    const posts=getPosts();
    postsContainer.innerHTML="";
    [...posts].reverse().forEach(post=>{
        const div=document.createElement("div");
        div.className="post-card";
        div.innerHTML=`
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <small>${post.date}</small>
        `
        ;
        postsContainer.appendChild(div);
    });
}
if(addPostBtn){
    addPostBtn.addEventListener("click",()=>{
        const title=document.getElementById("postsTitle").value;
        const content=document.getElementById("postsContent").value;
        if(!title||!content){
            alert("Please fill all fields");
            return;
        }
        const posts=getPosts();
        posts.push({
            title,
            content,
            date:new Date().toLocaleString()
        });
        savePosts(posts);
        document.getElementById("postsTitle").value="";
        document.getElementById("postsContent").value="";
        displayPosts();
    });
}
export {displayPosts};