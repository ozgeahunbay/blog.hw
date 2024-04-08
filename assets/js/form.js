const submitBtn = document.querySelector('#submit');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');


/*if ( username.value == '' || title.value == '' || content.value == '') {
    
    
    alert('please fill all fields before continuing')


} else { */

    
        
    


    let userinput = localStorage.getItem('userinput')
    let blogs = JSON.parse(userinput) || []
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const blogpost = {
            username: username.value,
            title: title.value,
            content: content.value,

        };
        




        if (username.value == '' || title.value == '' || content.value == '') {
            alert('please fill all fields before continuing')

        } else { window.location.replace("./blog.html"); 
        blogs.push(blogpost)
        localStorage.setItem('userinput', JSON.stringify(blogs));
       
    }

       
    });









/*document.submitInfo('submit').addEventListener('click',submitBtn)
function submitBtn(e){
    e=e || window.event;
    if (e.keyCode === 13) {
        document.submitInfo('submit').click();
        return false;
    }
    return true;
} 
document.submitInfo('submit').addEventListener('click',redirect)
function redirect(){
    var item = document.submitInfo('submit').value;

    window.location.href= 'file:///Users/ozgeahunbay/Documents/bootcamp/homework/blog.hw/index.html'
} */





