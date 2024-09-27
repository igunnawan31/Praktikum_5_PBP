function getXMLHTTPRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
        // 
    }
    else {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function get_server_time() { 
    var xmlhttp = new XMLHttpRequest();
    var page = 'get_server_time.php';

    
    xmlhttp.onreadystatechange = function() {
        document.getElementById('showtime').innerHTML = '<img src="ajax_loader.gif" alt="Loading..."/>';
        if((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
            document.getElementById('showtime').innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", page, true);
    xmlhttp.send(null);
}

// function add_customer_get() {
//     var xmlhttp = getXMLHTTPRequest();
//     var name = encodeURI(document.getElementById('name').value);
//     var address = encodeURI(document.getElementById('address').value);
//     var city = encodeURI(document.getElementById('city').value);

//     if (name != "" && address != "" && city != "") {
//         var url = "add_customer_get.php?name=" + name + "&address=" + address + "&city=" + city;
//         var inner = "add_response";

//         xmlhttp.open('GET', url, true);
//         xmlhttp.onreadystatechange = function() {
//             // document.getElementById(inner).innerHTML = '<img src="ajax_loader.gif" alt="Loading..."/>';
//             if((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
//                 document.getElementById(inner).innerHTML = xmlhttp.responseText;
//             }
//             return false;
//         }
//         xmlhttp.send(null);
//     }
//     else {
//         alert("Please fill all the fields");
//     }
// }

function add_customer_get() {
    var xmlhttp = getXMLHTTPRequest();

    var name = encodeURI(document.getElementById('name').value);
    var address = encodeURI(document.getElementById('address').value);
    var city = encodeURI(document.getElementById('city').value);

    // Validate
    if (name != "" && address != "" && city != "") {
        var url = "add_customer_get.php?name=" + name + "&address=" + address + "&city=" + city;
        var inner = "add_response";
        // TODO 2: Buatlah sebuah HTTP Request dengan method GET

        // open request
        xmlhttp.open("GET", url, true);
        xmlhttp.onreadystatechange = function() {
            // document.getElementById(inner).innerHTML = '<img src="../images/ajax_loader.png"/>';
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById(inner).innerHTML = xmlhttp.responseText;
            } 
            return false;
        }
        xmlhttp.send(null);
    } else {
        alert("Please fill all the fields");
    }
}

function add_customer_post() {
    var xmlhttp = getXMLHTTPRequest();

    var name = encodeURI(document.getElementById('name').value);
    var address = encodeURI(document.getElementById('address').value);
    var city = encodeURI(document.getElementById('city').value);

    // Validate
    if (name != "" && address != "" && city != "") {
        // TODO 3: Buatlah sebuah HTTP Request dengan method POST
        var url = "add_customer_post.php";
        var inner = "add_response";

        var params = "name=" + name + "&address=" + address + "&city=" + city;
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function() {
            // document.getElementById(inner).innerHTML = '<img src="../images/ajax_loader.png"/>';
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById(inner).innerHTML = xmlhttp.responseText;
            } 
            return false;
        }
        xmlhttp.send(params);
    } else {
        alert("Please fill all the fields");
    }
}




