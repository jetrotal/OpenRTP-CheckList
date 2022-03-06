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
    border: 1px solid #373737;
    margin: 0px auto 20px auto;
    text-align: left;
}
</style>
`
}
