var urlParams = new URLSearchParams( window.location.search );

var timeStamp = Date.now();
var gitData = {
    user: "jetrotal",
    repo: "OpenRTP-CheckList",
    branch: "default",
    rtpFolder: "2000+2003 RTP",
    assetsFolders: ["Backdrop", "Battle", "BattleCharSet", "BattleWeapon", "CharSet", "ChipSet", "FaceSet", "GameOver", "Monster", "Music", "Panorama", "Sound", "System", "System2", "Title"]
}

urlParams.has('filter') ? gitData.assetsFolders = urlParams.get('filter').split(",") : "";

var asset = {
    done: {
        icon: "🟩",
        status: " Done"
    },
    review: {
        icon: "🟦",
        status: " Under Review"
    },
    wip: {
        icon: "🟨",
        status: "Work In Progress"
    },
    default: {
        icon: "⬛",
        status: "Waiting for An Artist"
    },
     error: {
        icon: "🟥",
        status: " Something Went Wrong"
    }
};

var assetsCounter = {done:0, review:0, wip:0, default:0,error:0};
assetsURL = {
    done:`https://raw.githubusercontent.com/EasyRPG/RTP/master/`, 
    default:`https://raw.githubusercontent.com/` + gitData.user + `/` + gitData.repo + `/` + "default" + `/` + gitData.rtpFolder + `/`, 
    wip:`https://raw.githubusercontent.com/` + gitData.user + `/` + gitData.repo + `/` + "wip" + `/` + gitData.rtpFolder + `/`
}

assetsURL.review = assetsURL.wip;
assetsURL.error = assetsURL.wip;

var baseURL = location.href.split(location.search||location.hash||/[?#]/)[0]

assetsURL.playBT = baseURL + "/img/play-circle.svg";
assetsURL.stopBT = baseURL + "/img/stop-circle.svg";

var assetsColors = ["#16C60C","#0078D7","#FFF100","#383838","#E81224" ]


var assetStatus = [Object.values(asset.done).join(' '),
    Object.values(asset.review).join(' '),
    Object.values(asset.wip).join(' '),
    Object.values(asset.default).join(' '),
    Object.values(asset.error).join(' ')
];

var assetPriority = ["review", "error", "wip", "default"];

var checklist = `
<table><thead id="assetPointer"><tr><td>` + assetStatus.join(' &emsp; ') + `</tr></td></thead>
<div class="container">
  <div class="progress" style="margin:5px;display: flex;" id="rtpBar">
  </div> 
</div>
</table>
<div style="text-align: center; margin:auto; width:max-content" id="rtpTotal">Loaded 0 assets in total</div>`;

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
        checklist += `<section id="` + item + `"> <h2>` + item + `</h2> 
<details> <summary>Details</summary><br><div id="shove"></div>`;
        rtp[item].forEach(async function(assetName) {
            var currBranch = gitData.branch
            var assetType = "img"; //item == "Music" ? "midi-player sound-font" : (item == "Sound" ? "video controls" : "img");

            var assetData = getData(() => data[item][assetName],defaultData);
            if (!(assetData && assetData != defaultData)) assetData = defaultData;
            
            var imgA = encodeURI(assetsURL[gitData.branch] + item + `/` + assetName); 
            var imgB = encodeURI(assetsURL[assetData.status] + item + `/` + assetName); 
            
            var audioA;
            var audioB;
            
            var priority = assetData.status //"error";
            var imgCache = encodeURI(assetsURL["done"] + item + `/` + assetName); 
            var imgPath = [imgCache];
            assetPriority.forEach(function(progress) {
                imgPath.push(encodeURI(assetsURL[progress] + item + `/` + assetName));
            });

//await isUrlFound(imgPath[i]);
           
            for (let i = 0; i < imgPath.length; i++) {
                if (imgB) break;
                var goodURL = await isUrlFound(imgPath[i]);
                if (goodURL) priority = assetPriority[i - 1], imgB = imgPath[i];
            };
            if (!priority) priority = "done";
            assetsCounter[priority]++;
            //placeBar(assetsCounter);

            var hideAsset = priority == "default" ? " style='opacity:0.1' " :"";

            (imgA.includes(".mid")||imgA.includes(".midi")) ? (audioA = `style ="cursor:pointer" onClick=" toggleMusic(this,'`+imgA+`?` + timeStamp + `');"`, 
                imgA = assetsURL.playBT ) : ``;
            
            (imgB.includes(".mid")||imgB.includes(".midi")) ? (audioB = `style ="cursor:pointer" onClick=" toggleMusic(this,'`+imgB+`?` + timeStamp + `');"`, 
                imgB = assetsURL.playBT ) : ``;

            (imgA.includes(".wav")||imgA.includes(".mp3")) ? (audioA = `style ="cursor:pointer" onClick=" toggleSFX(this,'`+imgA+`?` + timeStamp + `');"`, 
                imgA = assetsURL.playBT ) : ``;
            
            (imgB.includes(".wav")||imgB.includes(".mp3")) ? (audioB = `style ="cursor:pointer" onClick=" toggleSFX(this,'`+imgB+`?` + timeStamp + `');"`, 
                imgB = assetsURL.playBT ) : ``;
            

            // imgB = imgPath[0]
            checklist += //document.getElementById("sc" + item).querySelector("#shove").innerHTML += //checklist +=
                `<table>
<thead>
<tr>
<th id="itemTitle">` + asset[priority].icon + ` ` + assetName + ` </th>
</tr>
</thead>
<tbody>
<tr>
<td><br><br></div><table><tbody><tr><td><img loading="lazy" src="` + imgA + `?` + timeStamp + `" `+audioA+`></img></td>
<td id="assetPointer">👉</td>
<td><x `+hideAsset+`><img loading="lazy" src="` + imgB + `?` + timeStamp + `" `+audioB+`></img></x> </td></tr></tbody></table>  <table>
</table>
<ul>
<strong>STATUS</strong>: ` + asset[priority].icon + ` ` + asset[priority].status + `<br>
<strong>ORIGINALLY FROM</strong>: `+assetData.from+`<br>
<strong>REPLACEMENT AUTHORS/LICENSE</strong>: `+assetData.authors+`<br>
<strong>REPLACEMENT YEAR</strong>: `+assetData.year+`<br>
<strong>SOURCES</strong>: `+assetData.sources+`</li>
</ul>
</td>
</tr></tbody></table>
`;
        });
        checklist += `</details></section><br>
`
    });

    
    document.getElementById("main_content").innerHTML = checklist
    placeBar(assetsCounter);

}



function failureCallback(error) {
    console.log("It failed with " + error);
}

function start() {
    if (!rtp) return rtp = {}, list_directory(gitData.user, gitData.repo, gitData.rtpFolder).then(settingFolders, failureCallback);
    else settingFolders(gitData.assetsFolders);
    

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

function toggleMusic(icon, url) { 
  return icon.src== assetsURL.playBT + `?` + timeStamp ? ( icon.src = assetsURL.stopBT + `?` + timeStamp  , MIDIjs.play(url) ) : ( icon.src = assetsURL.playBT + `?` + timeStamp , MIDIjs.stop() );
};

var sfx = new Pizzicato.Sound();
function toggleSFX(icon,url) {
    sfx = new Pizzicato.Sound(url, function() {
    return icon.src== assetsURL.playBT + `?` + timeStamp ? ( icon.src = assetsURL.stopBT + `?` + timeStamp  , sfx.play() ) : ( icon.src = assetsURL.playBT + `?` + timeStamp , sfx.stop() );
});
    
    
} 

function updateBar(obj) {
    return Object.keys(obj).map(v => {
        let data = Object.values(obj),
            sum = data.reduce((r, x) => r + x);

        let result = {
            type: 'column',
            name: v,
            total: sum,
            data: data,
            percent: data.map(p => (p / sum) * 100)
        }

        result["html"] = result.percent.map((p, i) => `<div class="progress-bar" role="progressbar" style="text-align:center;color:#fff;background-color:` + assetsColors[i] + `; width:` + p + `%">` + data[i] + `</div>`);
        return result

    });
}

function placeBar(obj) {
    var currRTP = updateBar(obj)[0]
    document.getElementById("rtpBar").innerHTML = currRTP.html.join("");
var currFolder = urlParams.get('filter') == gitData.assetsFolders ? "[ "+ gitData.assetsFolders.join(" + ")+" ]" : "OpenRTP" 

    document.getElementById("rtpTotal").innerHTML = currFolder +" Collection is "+Math.round(currRTP.percent[0])+"% Completed.<br> "+ currRTP.total + " assets loaded.";
}

function getData(fn, defaultVal = defaultData) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}

start();

injectCSS();
