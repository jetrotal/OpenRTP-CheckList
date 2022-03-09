{% assign wipRepo = "https://raw.githubusercontent.com/jetrotal/OpenRTP-CheckList/wip" %}
{% assign defRepo = "https://raw.githubusercontent.com/jetrotal/OpenRTP-CheckList/gh-page" %}
<style id="injectCSS"></style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pizzicato/0.6.4/Pizzicato.min.js" integrity="sha512-K+cPWcoDCr2JFFfe912LrvRUQbVJuWNfeWK5r/HrmpDs8ELrsjVib8Fs5oAxzu76fG66ajGhDLvvcxBbeEzl9g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type='text/javascript' src='//www.midijs.net/lib/midi.js'></script>
<script src="{{wipRepo}}/scripts/rtpFiles.js?{{site.time}}"></script>
<script src="{{wipRepo}}/scripts/rtpData.js?{{site.time}}"></script>
<script src="{{defRepo}}/scripts/injectCSS.js?{{site.time}}"></script>
<script src="{{defpRepo}}/scripts/checklistGenerator.js?{{site.time}}" defer></script>
