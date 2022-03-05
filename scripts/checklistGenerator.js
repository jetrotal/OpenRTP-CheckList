document.body.innerHTML+=`<style>
#assetPointer{
    vertical-align: middle;
}
.inner {
    position: relative;
    max-width: calc(100% - 100px) !important;
}
summary{
cursor: pointer
}
</style>`
var assetProgress = ["review", "error", "wip", "default"];
var checklist = `
<table>
<thead id="assetPointer"><tr><td>

⬛ Waiting for An Artist &emsp; 🟨 In Progress &emsp; 🟦 Under Review &emsp; 🟩 Done &emsp; 🟥 Something Went Wrong 
</tr></td></thead></table>`;

var gitData = {
    user: "jetrotal",
    repo: "OpenRTP-CheckList",
    branch:"default",
    rtpFolder: "2000+2003 RTP",
    assetsFolders: ["Backdrop","Battle","BattleCharSet","BattleWeapon","CharSet","ChipSet","FaceSet","GameOver","Monster","Music","Panorama","Sound","System","System2","Title"]
}

async function list_directory(user, repo, directory,branch) {
    const url = `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}`;
    directory = directory.split('/').filter(Boolean);
    const dir = await directory.reduce(async (acc, dir) => {
        const {
            url
        } = await acc;
        const list = await fetch(url).then(res => res.json());
        return list.tree.find(node => node.path === dir);
    }, {
        url
    });
    if (dir) {
        const list = await fetch(dir.url).then(res => res.json());
        return list.tree.map(node => node.path);
    }
}

function settingFolders(result) {
    console.log("It succeeded with " + result);
    gitData.assetsFolders = result;
    if (rtp == {}) result.forEach(function(item) {
        getAsset(item);
    });

    gitData.assetsFolders.forEach(function(item) {
            checklist += `<section id="sc`+item+`"> <h2>`+item + `</h2> 
<details> <summary>Details</summary><br>`;
            rtp[item].forEach(function(asset) {
                var currBranch= gitData.branch
                var imgA = encodeURI(`https://raw.githubusercontent.com/`+gitData.user+`/`+gitData.repo+`/`+gitData.branch+`/`+gitData.rtpFolder+`/`+item+`/`+asset);
                var imgCache = encodeURI(`https://raw.githubusercontent.com/EasyRPG/RTP/master/`+item+`/`+asset);
                var imgPath = [imgCache];
                assetProgress.forEach(function(progress) {
                    imgPath.push( encodeURI(`https://raw.githubusercontent.com/`+gitData.user+`/`+gitData.repo+`/`+progress+`/`+gitData.rtpFolder+`/`+item+`/`+asset) );
                });
                var imgB = imgPath[0]
                
              checklist += 
`<table>
<thead>
<tr>
<th>⬛ `+asset+` </th>
</tr>
</thead>
<tbody>
<tr>
<td><br><br></div><table><tbody><tr><td><img src="`+imgA+`">   </td><td id="assetPointer">👉</td>  <td> <img src="`+imgB+`" onerror='checkStatus(this,`+JSON.stringify(imgPath)+`)'> </td></tr></tbody></table>  <table>


</table>
<ul>
<strong>STATUS</strong>: Free Slot<br>
<strong>ORIGINALLY FROM</strong>: RPG Maker 2000/2003<br>
<strong>REPLACEMENT AUTHOR</strong>: No Author<br>
<strong>LICENSE</strong>: None<br>
<strong>SOURCES</strong>: None</li>
</ul>

</td>
</tr></tbody></table>

`
            });
        checklist += `</details></section><br>
`
    });
    document.getElementById("main_content").innerHTML = checklist

}

function failureCallback(error) {
    console.log("It failed with " + error);
}

function start() {
  if (!rtp) return rtp = {}, list_directory(gitData.user, gitData.repo, gitData.rtpFolder).then(settingFolders, failureCallback);
  else settingFolders(gitData.assetsFolders)

}

function getAsset(item) {
    list_directory(gitData.user, gitData.repo, gitData.rtpFolder + "/" + item).then(function(result) {
        rtp[item] = result;
    }, failureCallback);
}

function checkStatus(image,arr, mode=0){


image.onerror = function() {
    
if (mode < arr.length -1){
    mode++
   checkStatus(image,arr, mode)
}
}
//arr[progressMode]
    image.src = arr[mode];
    if (mode == arr.length -1) image.style.opacity ="0"
    
}




start();
