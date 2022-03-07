var timeStamp = Date.now();
var gitData = {
    user: "jetrotal",
    repo: "OpenRTP-CheckList",
    branch: "default",
    rtpFolder: "2000+2003 RTP",
    assetsFolders: ["Backdrop", "Battle", "BattleCharSet", "BattleWeapon", "CharSet", "ChipSet", "FaceSet", "GameOver", "Monster", "Music", "Panorama", "Sound", "System", "System2", "Title"]
}
var asset = {
    default: {
        icon: "⬛",
        status: "Waiting for An Artist"
    },
    wip: {
        icon: "🟨",
        status: "In Progress"
    },
    review: {
        icon: "🟦",
        status: " Under Review"
    },
    done: {
        icon: "🟩",
        status: " Done"
    },
    error: {
        icon: "🟥",
        status: " Something Went Wrong"
    }
};

var assetStatus = [Object.values(asset.default).join(' '),
    Object.values(asset.wip).join(' '),
    Object.values(asset.review).join(' '),
    Object.values(asset.done).join(' '),
    Object.values(asset.error).join(' ')
];

var assetPriority = ["review", "error", "wip", "default"];

var checklist = `
<table><thead id="assetPointer"><tr><td>` + assetStatus.join(' &emsp; ') + `</tr></td></thead></table>`;

async function list_directory(user, repo, directory, branch) {
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

async function settingFolders(result) {
    console.log("It succeeded with " + result);
    gitData.assetsFolders = result;
    if (rtp == {}) result.forEach(function(item) {
        getAsset(item);
    });

    gitData.assetsFolders.forEach(async function(item) {
        checklist += `<section id="sc` + item + `"> <h2>` + item + `</h2> 
<details> <summary>Details</summary><br><div id="shove"></div>`;
        rtp[item].forEach(async function(assetName) {
            var currBranch = gitData.branch
            var assetType = "img"; //item == "Music" ? "midi-player sound-font" : (item == "Sound" ? "video controls" : "img");

            var imgA = encodeURI(`https://raw.githubusercontent.com/` + gitData.user + `/` + gitData.repo + `/` + gitData.branch + `/` + gitData.rtpFolder + `/` + item + `/` + assetName);
            var imgB;

            var audioA;
            var audioB;
            
            var priority = assetPriority[2];
            var imgCache = encodeURI(`https://raw.githubusercontent.com/EasyRPG/RTP/master/` + item + `/` + assetName);
            var imgPath = [imgCache];
            assetPriority.forEach(function(progress) {
                imgPath.push(encodeURI(`https://raw.githubusercontent.com/` + gitData.user + `/` + gitData.repo + `/` + progress + `/` + gitData.rtpFolder + `/` + item + `/` + assetName));
            });

            for (let i = 0; i < imgPath.length; i++) {
                if (imgB) break;
                var goodURL = await isUrlFound(imgPath[i]);
                if (goodURL) priority = assetPriority[i - 1], imgB = imgPath[i];
            };
            if (!priority) priority = "done";


            (imgA.includes(".mid")||imgA.includes(".midi")) ? (audioA = `style ="cursor:pointer" onClick=" togglePlay(this,'`+imgA+`?` + timeStamp + `');"`, 
                imgA = "https://raw.githubusercontent.com/jetrotal/OpenRTP-CheckList/gh-page/img/play-circle.svg") : ``;
            
            (imgB.includes(".mid")||imgB.includes(".midi")) ? (audioB = `style ="cursor:pointer" onClick=" togglePlay(this,'`+imgB+`?` + timeStamp + `');"`, 
                imgB = "https://raw.githubusercontent.com/jetrotal/OpenRTP-CheckList/gh-page/img/play-circle.svg") : ``;
            

            // imgB = imgPath[0]
            document.getElementById("sc" + item).querySelector("#shove").innerHTML += //checklist +=
                `<table>
<thead>
<tr>
<th id="itemTitle">` + asset[priority].icon + ` ` + assetName + ` </th>
</tr>
</thead>
<tbody>
<tr>
<td><br><br></div><table><tbody><tr><td><img src="` + imgA + `?` + timeStamp + `" `+audioA+`></img></td>
<td id="assetPointer">👉</td>
<td><img src="` + imgB + `?` + timeStamp + `" `+audioB+`></img> </td></tr></tbody></table>  <table>
</table>
<ul>
<strong>STATUS</strong>: ` + asset[priority].icon + ` ` + asset[priority].status + `<br>
<strong>ORIGINALLY FROM</strong>: RPG Maker 2000/2003<br>
<strong>REPLACEMENT AUTHOR</strong>: No Author<br>
<strong>LICENSE</strong>: <x id="itemLicense">CC0</x><br>
<strong>SOURCES</strong>: None</li>
</ul>
</td>
</tr></tbody></table>
`;
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
    else settingFolders(gitData.assetsFolders);
    injectCSS();

}

function getAsset(item) {
    list_directory(gitData.user, gitData.repo, gitData.rtpFolder + "/" + item).then(function(result) {
        rtp[item] = result;
    }, failureCallback);
}



async function isUrlFound(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD',
            cache: 'no-cache'
        });

        return response.status === 200;

    } catch (error) {
        // console.log(error);
        return false;
    }
}

function togglePlay(icon, url) {
  return icon.src=="https://raw.githubusercontent.com/jetrotal/OpenRTP-CheckList/gh-page/img/play-circle.svg" +`?` + timeStamp ? 
     ( icon.src = "https://raw.githubusercontent.com/jetrotal/OpenRTP-CheckList/gh-page/img/stop-circle.svg"+`?` + timeStamp , MIDIjs.play(url) ) : 
    ( icon.src = "https://raw.githubusercontent.com/jetrotal/OpenRTP-CheckList/gh-page/img/play-circle.svg"+`?` + timeStamp, MIDIjs.stop() );
};

start();
