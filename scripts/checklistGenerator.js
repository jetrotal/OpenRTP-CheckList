var urlParams = new URLSearchParams(window.location.search),
    timeStamp = Date.now(),
    gitData = {
        user: "jetrotal",
        repo: "OpenRTP-CheckList",
        branch: "default",
        rtpFolder: "2000+2003 RTP",
        assetsFolders: "Backdrop Battle BattleCharSet BattleWeapon CharSet ChipSet FaceSet GameOver Monster Music Panorama Sound System System2 Title".split(" ")
    };

urlParams.has("filter") ? gitData.assetsFolders = urlParams.get("filter").split(",") : "";

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
    },
    assetsCounter = { done: 0, review: 0, wip: 0, default: 0, error: 0 };

assetsURL = {
    done: "https://raw.githubusercontent.com/EasyRPG/RTP/master/",
    default: "https://raw.githubusercontent.com/" + gitData.user + "/" + gitData.repo + "/default/" + gitData.rtpFolder + "/",
    wip: "https://raw.githubusercontent.com/" + gitData.user + "/" + gitData.repo + "/wip/" + gitData.rtpFolder + "/"
};

assetsURL.review = assetsURL.wip;
assetsURL.error = assetsURL.wip;

var baseURL = location.href.split(location.search || location.hash || /[?#]/)[0];

assetsURL.playBT = baseURL + "/img/play-circle.svg";
assetsURL.stopBT = baseURL + "/img/stop-circle.svg";

var assetsColors = ["#16C60C", "#0078D7", "#FFF100", "#383838", "#E81224"],
    assetStatus = [Object.values(asset.done).join(" "), Object.values(asset.review).join(" "), Object.values(asset.wip).join(" "), Object.values(asset.default).join(" "), Object.values(asset.error).join(" ")],

    assetPriority = ["review", "error", "wip", "default"],

    checklist =
`<table>
  <thead id="assetPointer">
    <tr>
      <td>` + assetStatus.join(" &emsp; ") + `
    </tr>
    </td>
  </thead>
  <div class="container">
    <div class="progress" style="margin:5px;display: flex;" id="rtpBar">
    </div>
  </div>
</table>
<div style="text-align: center; margin:auto; width:max-content" id="rtpTotal">Loaded 0 assets in total</div>`;

async function list_directory(user, repo, directory, branch) {
    user = `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}`;
    directory = directory.split("/").filter(Boolean);
    if (directory = await directory.reduce(async (acc, dir) => {
            ({
                url: acc
            } = await acc);
            return (await fetch(acc).then(res => res.json())).tree.find(node => node.path === dir);
        }, {
            url: user
        })) {
        return (await fetch(directory.url).then(res => res.json())).tree.map(node => node.path);
    }
}
async function settingFolders(result) {
    console.log("It succeeded with " + result);
    gitData.assetsFolders = result;
    rtp == {} && result.forEach(function(item) {
        getAsset(item);
    });
    gitData.assetsFolders.forEach(async function(item) {
        checklist += '<section id="' + item + '"> <h2>' + item + '</h2> \n<details> <summary>Details</summary><br><div id="shove"></div>';
       
        rtp[item].forEach(async function(assetName) {
            var assetData = getData(() => data[item][assetName], defaultData);
            assetData && assetData != defaultData || (assetData = defaultData);
            
            var imgA = encodeURI(assetsURL[gitData.branch] + item + "/" + assetName),
                imgB = encodeURI(assetsURL[assetData.status] + item + "/" + assetName),
                audioA, audioB, priority = assetData.status,
                imgPath = [encodeURI(assetsURL.done + item + "/" + assetName)];
            
            assetPriority.forEach(function(progress) {
                imgPath.push(encodeURI(assetsURL[progress] + item + "/" + assetName));
            });
            
            for (var i = 0; i < imgPath.length && !imgB; i++) {
                await isUrlFound(imgPath[i]) && (priority = assetPriority[i - 1], imgB = imgPath[i]);
            }
            
            priority || "done";
            assetsCounter[priority]++;
            
            var faded = "default" == priority ? " style='opacity:0.1' " : "";
            
            imgA.includes(".mid") || imgA.includes(".midi") ? (audioA = 'style ="cursor:pointer" onClick=" toggleMusic(this,\'' + imgA + "?" + timeStamp + "');\"", imgA = assetsURL.playBT) : "";
            imgB.includes(".mid") || imgB.includes(".midi") ? (audioB = 'style ="cursor:pointer" onClick=" toggleMusic(this,\'' + imgB + "?" + timeStamp + "');\"", imgB = assetsURL.playBT) : "";
            imgA.includes(".wav") || imgA.includes(".mp3") ? (audioA = 'style ="cursor:pointer" onClick=" toggleSFX(this,\'' + imgA + "?" + timeStamp + "');\"", imgA = assetsURL.playBT) : "";
            imgB.includes(".wav") || imgB.includes(".mp3") ? (audioB = 'style ="cursor:pointer" onClick=" toggleSFX(this,\'' + imgB + "?" + timeStamp + "');\"", imgB = assetsURL.playBT) : "";


            checklist += 
`'<section id="' + item + '/' + assetName + '">
 <table>
  <thead>
    <tr>
      <th id="itemTitle">` + asset[priority].icon + " " + assetName + ` </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><br><br></div>
        <table>
          <tbody>
            <tr>
              <td><img loading="lazy" src="` + imgA + "?" + timeStamp + `" ` + audioA + `></img></td>
              <td id="assetPointer">👉</td>
              <td>
                <x ` + faded + `><img loading="lazy" src="` + imgB + "?" + timeStamp + `" ` + audioB + `></img></x>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
        </table>
        <ul>
          <strong>STATUS</strong>: ` + asset[priority].icon + " " + asset[priority].status +
                `<br>
          <strong>ORIGINALLY FROM</strong>: ` + assetData.from + `<br>
          <strong>REPLACEMENT AUTHORS/LICENSE</strong>: ` + assetData.authors + `<br>
          <strong>REPLACEMENT YEAR</strong>: ` + assetData.year + `<br>
          <strong>SOURCES</strong>: ` + assetData.sources + `</li>
        </ul>
      </td>
    </tr>
  </tbody>
 </table>
</section>`;

        });
        checklist += "</details></section><br>\n";
    });
    document.getElementById("main_content").innerHTML = checklist;
    placeBar(assetsCounter);
}

function failureCallback(error) {
    console.log("It failed with " + error);
}

function start() {
injectCSS();
    if (rtp) {
        settingFolders(gitData.assetsFolders);
    } else {
        return rtp = {}, list_directory(gitData.user, gitData.repo, gitData.rtpFolder).then(settingFolders, failureCallback);
    }
}

function getAsset(item) {
    list_directory(gitData.user, gitData.repo, gitData.rtpFolder + "/" + item).then(function(result) {
        rtp[item] = result;
    }, failureCallback);
}
async function isUrlFound(url) {
    try {
        return 200 === (await fetch(url, {
            method: "HEAD",
            cache: "no-cache"
        })).status;
    } catch (error) {
        return !1;
    }
}

function toggleMusic(icon, url) {
    return icon.src == assetsURL.playBT + "?" + timeStamp ? (icon.src = assetsURL.stopBT + "?" + timeStamp, MIDIjs.play(url)) : (icon.src = assetsURL.playBT + "?" + timeStamp, MIDIjs.stop());
}

var sfx = new Pizzicato.Sound();

function toggleSFX(icon, url) {
    sfx = new Pizzicato.Sound(url, function() {
        return icon.src == assetsURL.playBT + "?" + timeStamp ? (icon.src = assetsURL.stopBT + "?" + timeStamp, sfx.play()) : (icon.src = assetsURL.playBT + "?" + timeStamp, sfx.stop());
    });
}

function updateBar(obj) {
    return Object.keys(obj).map(v => {
        let data = Object.values(obj),
            sum = data.reduce((r, x) => r + x);
        v = {
            type: "column",
            name: v,
            total: sum,
            data,
            percent: data.map(p => p / sum * 100)
        };
        v.html = v.percent.map((p, i) => '<div class="progress-bar" role="progressbar" style="text-align:center;color:#fff;background-color:' + assetsColors[i] + "; width:" + p + '%">' + data[i] + "</div>");
        return v;
    });
}

function placeBar(obj) {
    obj = updateBar(obj)[0];
    document.getElementById("rtpBar").innerHTML = obj.html.join("");
    var currFolder = urlParams.get("filter") == gitData.assetsFolders ? "[ " + gitData.assetsFolders.join(" + ") + " ]" : "OpenRTP";
    document.getElementById("rtpTotal").innerHTML = currFolder + " Collection is " + Math.round(obj.percent[0]) + "% Completed.<br> " + obj.total + " assets loaded.";
}

function getData(fn, defaultVal = defaultData) {
    try {
        return fn();
    } catch (e) {
        return defaultVal;
    }
}

start();
