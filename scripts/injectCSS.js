function injectCSS(){
if (!document.getElementById("injectCSS")) 
document.head.innerHTML+=`<link rel="shortcut icon" type="image/x-icon" href="./img/favIco.png?">`,
document.body.innerHTML += 
`<style id="injectCSS">
#header_wrap .inner {
    padding: 20px 0
}

code {
    padding: 5px
}

#project_tagline {
    font-size: 17px;
    margin: 0
}

#assetPointer {
    vertical-align: middle
}

.inner {
    max-width: calc(100% - 100px)!important;
    position: relative
}

.folderBt,summary {
    cursor: pointer
}

table {
    border: 1px solid #373737;
    margin: 10px auto;
    max-width: 1070px;
    text-align: left
}

.folderBt {
    background-color: #aeaeae;
    font-size: 100%;
    margin: 10px;
    padding: 1%;
    text-align: center;
    width: 7%
}

#folderGrid {
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto
}

#main_content {
    padding-top: 10px
}

img {
    image-rendering: pixelated
}
</style>
`
}
