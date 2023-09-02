// Wait for the document to be ready

console.log(5)
// Equivalent JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    const url = document.querySelectorAll('li.activity.modtype_url .activitytitle .activityiconcontainer img');
    const hvp = document.querySelectorAll('li.activity.modtype_hvp .activitytitle .activityiconcontainer img');
    const challenge = document.querySelectorAll('li.activity.modtype_quiz .activitytitle .activityiconcontainer img');
    console.log(url);
    console.log(hvp);
    console.log(challenge);
    url.forEach(function(element) {
        element.setAttribute('src', M.cfg.wwwroot + '/theme/htu_boshdev/pix/activities_icons/Learn.png');
        element.style.height = '100%';
        element.style.width = '100%';
        element.classList.add('nofilter');
        element.parentNode.style.padding= '0';
    });

    hvp.forEach(function(element) {
        element.setAttribute('src', M.cfg.wwwroot + '/theme/htu_boshdev/pix/activities_icons/Play.png');
        element.style.height = '100%';
        element.style.width = '100%';
        element.classList.add('nofilter');
        element.parentNode.style.padding= '0';
    });

    challenge.forEach(function(element) {
        element.setAttribute('src', M.cfg.wwwroot + '/theme/htu_boshdev/pix/activities_icons/Challenge.png');
        element.style.height = '100%';
        element.style.width = '100%';
        element.classList.add('nofilter');
        element.parentNode.style.padding= '0';
    });


    // Dev
    const editField = document.querySelectorAll(`[data-name="Age Group"]`);
    editField.forEach(element => {
        element.addEventListener('click', function(e){
            setTimeout(function(){
                console.log(document.querySelectorAll('.modal'))
                document.querySelector('.modal').style.display = 'block';
            }, 3000)
        });
    })

    console.log(editField)


});










// $(document).ready(function() {
//
//     // $('li.activity.modtype_url .activitytitle .activityiconcontainer img').attr('src', 'https://injazcampus.org/wp-content/uploads/2023/06/Ourselves.png');
//     // $('li.activity.modtype_url .activitytitle .activityiconcontainer img').css({
//     //     height: '100%',
//     //     width: '100%'
//     // });
//
//     // Select the HP5 activity elements by their class, ID, or other attributes
//     // let hp5ActivityIcons = $('.hp5-activity-icon'); // Replace with the actual selector you identified
//     //
//     // // Loop through each HP5 activity icon element
//     // hp5ActivityIcons.each(function() {
//     //     // Replace the 'src' attribute with the URL of your custom icon
//     //     $(this).attr('src', 'path/to/your/custom-icon.png'); // Replace with the actual path
//     // });
//
//
//
// });
