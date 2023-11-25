// Wait for the document to be ready

function applyChangesToIcons(){
    const url = document.querySelectorAll('.modtype_url .activitytitle .activityiconcontainer img');
    const hvp = document.querySelectorAll('.modtype_hvp .activitytitle .activityiconcontainer img');
    const challenge = document.querySelectorAll('.modtype_quiz .activitytitle .activityiconcontainer img');
    const feedback = document.querySelectorAll('.modtype_feedback .activitytitle .activityiconcontainer img');
    const page = document.querySelectorAll('.modtype_page .activitytitle .activityiconcontainer img');

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

    feedback.forEach(function(element) {
        element.setAttribute('src', M.cfg.wwwroot + '/theme/htu_boshdev/pix/activities_icons/FEEDBACK.png');
        element.style.height = '100%';
        element.style.width = '100%';
        element.classList.add('nofilter');
        element.parentNode.style.padding= '0';
    });

    page.forEach(function(element) {
        element.setAttribute('src', M.cfg.wwwroot + '/theme/htu_boshdev/pix/activities_icons/PAGE.png');
        element.style.height = '100%';
        element.style.width = '100%';
        element.classList.add('nofilter');
        element.parentNode.style.padding= '0';
    });
}

applyChangesToIcons();


// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(function(mutationsList, observer) {
    // Check each mutation in the list
    for (const mutation of mutationsList) {
        // Check if nodes were added to the DOM
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if any of the added nodes have the class .modtype_url
            const addedUrlElements = document.querySelectorAll('.modtype_url');
            const addedHvpElements = document.querySelectorAll('.modtype_hvp');
            const addedQuizElements = document.querySelectorAll('.modtype_quiz');

            if (addedUrlElements.length > 0) {
                // If .modtype_url elements were added, apply your changes
                applyChangesToIcons();
            }

            if (addedHvpElements.length > 0) {
                // If .modtype_url elements were added, apply your changes
                applyChangesToIcons();
            }

            if (addedQuizElements.length > 0) {
                // If .modtype_url elements were added, apply your changes
                applyChangesToIcons();
            }
        }
    }
});

// Start observing the document for changes
observer.observe(document.body, { childList: true, subtree: true });




// document.addEventListener('DOMContentLoaded', function() {
//
// });




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
