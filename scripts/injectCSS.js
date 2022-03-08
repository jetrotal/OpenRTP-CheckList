function injectCSS(){
document.body.innerHTML += `
<style>
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

</style>
`
}
