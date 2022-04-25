var urlParams = new URLSearchParams(window.location.search),
    baseURL = location.href.split(location.search || location.hash || /[?#]/)[0],
    timeStamp = Date.now(),
    displayMode,
    gitData = {
        user: "jetrotal",
        repo: "OpenRTP-CheckList",
        branch: "default",
        rtpFolder: "RTP",
        assetsFolders: "Backdrop Battle BattleCharSet BattleWeapon CharSet ChipSet FaceSet GameOver Monster Music Panorama Sound System System2 Title".split(" ")
    };

var rtpJSON = { src:{} };
rtpJSON.src.files = baseURL + "data/rtpFiles.json?" + timeStamp;
rtpJSON.src.data = baseURL + "data/rtpData.json?" + timeStamp;

urlParams.has("filter") ? gitData.assetsFolders = urlParams.get("filter").split(",") : "";
urlParams.has("mode") ? displayMode = urlParams.get("mode") : "";

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

function start() {
    injectCSS();
    loadJSON(rtpJSON.src.files, 
             function(response) { rtpJSON.files = JSON.parse(response);        
                                 loadJSON(rtpJSON.src.data, 
                                          function(response) { rtpJSON.data = JSON.parse(response); 
                                                              settingFolders(gitData.assetsFolders) 
                                                             });                  
                                });

}

async function loadJSON(src, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', src, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

async function settingFolders(result) {
    console.log("It succeeded with " + result);
    gitData.assetsFolders = result;
   
    checklist += "<section id='checklist'>";
    if (displayMode == "authors") checklist += `<h1>Authors</h1>
<p dir="auto">The following EasyRPG RTP materials are licensed under a
Creative Commons Attribution 4.0 International license.</p>
<p dir="auto">License URL: <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow">https://creativecommons.org/licenses/by/4.0/</a></p>
<br>`

    gitData.assetsFolders.forEach(async function(item) {


        var tempHTML = "";
        var currCounter = 0;

        tempHTML += '<section id="' + item + '"> <h2>' + item + '</h2> \n<details> <summary>Details</summary><br>';

        rtpJSON.files[item].forEach(async function(assetName) {
            var assetData = getData(() => rtpJSON.data[item][assetName], rtpJSON.data["default"]);
            assetData && assetData != rtpJSON.data["default"] || (assetData = rtpJSON.data["default"]);

            var imgA = encodeURI(assetsURL[gitData.branch] + item + "/" + assetName),
                imgB = encodeURI(assetsURL[assetData.status] + item + "/" + assetName),
                audioA, audioB, priority = assetData.status,
                imgPath = [encodeURI(assetsURL.done + item + "/" + assetName)];

            assetPriority.forEach(function(progress) {
                imgPath.push(encodeURI(assetsURL[progress] + item + "/" + assetName));
            });


            priority || "done";
            assetsCounter[priority]++;
            if (displayMode == "authors" && priority != "done") return;
            currCounter++;

            var faded = "default" == priority ? " style='opacity:0.1' " : "";

            imgA.includes(".mid") || imgA.includes(".midi") ? (audioA = 'style ="cursor:pointer" onClick=" toggleMusic(this,\'' + imgA + "?" + timeStamp + "');\"", imgA = assetsURL.playBT) : "";
            imgB.includes(".mid") || imgB.includes(".midi") ? (audioB = 'style ="cursor:pointer" onClick=" toggleMusic(this,\'' + imgB + "?" + timeStamp + "');\"", imgB = assetsURL.playBT) : "";
            imgA.includes(".wav") || imgA.includes(".mp3") ? (audioA = 'style ="cursor:pointer" onClick=" toggleSFX(this,\'' + imgA + "?" + timeStamp + "');\"", imgA = assetsURL.playBT) : "";
            imgB.includes(".wav") || imgB.includes(".mp3") ? (audioB = 'style ="cursor:pointer" onClick=" toggleSFX(this,\'' + imgB + "?" + timeStamp + "');\"", imgB = assetsURL.playBT) : "";


            tempHTML +=
                `<section id="` + item + `/` + assetName + `">
 <table>
  <thead>
    <tr>
      <th id="itemTitle">` + (displayMode != "authors" ? asset[priority].icon + " " : "") + assetName + ` </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><br> ` + (displayMode != "authors" ? ` <br></div>
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
        </table>` : "") + `
        <ul> ` + (displayMode != "authors" ? `
          <strong>STATUS:</strong> ` + asset[priority].icon + " " + asset[priority].status + `<br> ` : "") + `
          <strong>ORIGINALLY FROM:</strong> ` + assetData.from + `<br>
          <strong>REPLACEMENT AUTHORS/LICENSE:</strong> ` + assetData.authors + `<br>
          <strong>REPLACEMENT YEAR:</strong> ` + assetData.year + `<br>
          <strong>SOURCES:</strong> ` + assetData.sources + `</li>
        </ul>
      </td>
    </tr>
  </tbody>
 </table>
</section>`;

        });
        tempHTML += "</details></section><br>\n";
        if (currCounter > 0) checklist += tempHTML;

    });
    checklist += "</section>";
 document.getElementById("main_content").innerHTML =
`<p dir="auto"><a href="https://github.com/EasyRPG/RTP/issues/25"><code>Guide for Artists</code></a><a href="https://t.co/K4AXAeG0Yp" rel="nofollow"><a href="https://t.co/0MJZlivP9D" rel="nofollow"><code>Discord</code></a><code>EasyRPG Forum</code></a></p>` 
       
    document.getElementById("main_content").innerHTML += checklist;
    placeBar(assetsCounter);

    if (location.hash) {
        var a = location.hash;
        location.hash = "";
        location.hash = a;
    }
}

function getData(fn, defaultVal = rtpJSON.data["default"]) {
    try {
        return fn();
    } catch (e) {
        return defaultVal;
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
    document.getElementById("rtpTotal").innerHTML = currFolder + " Collection is " + Math.round(obj.percent[0]) + "% Completed.<br>"+
        + obj.total + " assets loaded.";
}

start();
