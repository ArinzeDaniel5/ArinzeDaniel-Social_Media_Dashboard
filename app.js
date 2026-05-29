import "./theme.js";
import {displayPosts} from "./posts.js";
const ctx=document.getElementById("growthChart");
new Chart(ctx,{
    type:"line",
    data:{
        labels:["Jan","Feb","Mar","Apr","May","Jun"],
        datasets:[{
            label:"Followers Growth",
            data:[1200,1900,3000,5000,7000,12450],
            borderWidth:3,
            tension:0.4
        }]
    },
    options:{
        responsive:true
    }
});
displayPosts();