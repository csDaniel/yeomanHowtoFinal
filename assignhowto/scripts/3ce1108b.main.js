function createMenu(a,b){var c=document.getElementById("sideMenu"),d=document.createElement("li");d.innerHTML='<a href="'+a+'">'+b+"</a>",c.appendChild(d)}window.onload=function(){createMenu("index.html","Home"),createMenu("gettingStarted.html","Part 1: Getting Started"),createMenu("installing3.html","Part 2: Installing the Pieces"),createMenu("createPage.html","Part 3: Creating the Page"),createMenu("exploreFiles.html","Part 4: Exploring the Files"),createMenu("addingContent.html","Part 5: Adding Content"),createMenu("prepareContent.html","Part 6: Preparing the Content for Publication"),createMenu("conclusion.html","Part 7: Conclusion")};