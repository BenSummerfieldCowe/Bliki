document.addEventListener('DOMContentLoaded',function() {
document.querySelector("input[name=title]").onchange=function() {
$.ajax({
    type: 'post',
    url: '/api/checkTitle',
    data:{ 
        title: this.value
    },
    success: function(response) {
        var error = document.getElementById('titleError');
        var submit = document.getElementById('addPost');
        if (response.exists) {
            error.style.visibility = 'visible';
            submit.disabled=true;
        } else {
            error.style.visibility = 'hidden';
            submit.disabled=false;
        }
    },
    error: function() {
        console.log('Handle error')
    }     
})
}
},false);