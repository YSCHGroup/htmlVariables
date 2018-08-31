# HTML Variables


# Installation
**Download** or **Reference** to the cdn: ```<script src="https://cdn.rawgit.com/YSCHGroup/htmlVariables/b2104873/main.js"></script>```

# Usage
### Basics
Add the tag ``<hv>`` *(html variable)* with an ``key`` attribute that points towards an global JavaScript variable. This tag will instantly update it's value/text/inner html when the variable change at any time.

### Attributes
* ``key``: Point the tag to a JavaScript variable. 
* ``default``: Set a default value if the variable is null, undefined or empty *("")*. 

### Example 1:
**HTML**
```
<body>
    <p> Hello <hv key="place">! </p>
</body>
```
**JavaScript**
```
place = "World";
setTimeout(function() {
    place = "Universe";
}, 1000);
```

### Example 2:
**HTML**
```
<body>
    <p> Welcome <hv key="name" default="Unknown human"></hv> to the world! </p>
    <input type="text" onkeyup="window.name = this.value"/>
</body>
```
