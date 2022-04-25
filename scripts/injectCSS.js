function injectCSS(){
if (!document.getElementById("injectCSS")) 
document.head.innerHTML+=`<link rel="shortcut icon" type="image/x-icon" href="./img/favIco.png?">`,
document.body.innerHTML += 
`<style id="injectCSS">
#forkme_banner{display:none!important}
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
table{
    max-width:1070px;
    border: 1px solid #373737;
    margin: 10px auto;
    text-align: left;
}

.folderBt{
background-color:#aeaeae;
  width:7%;
  padding:1%; 
  text-align:center; 
  font-size:100%;
  margin:10px;
cursor:pointer;
}

#folderGrid {
  margin:auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
}

#main_content {
    padding-top: 10px;
}
img {
    image-rendering: pixelated;
}

</style>
`
}
