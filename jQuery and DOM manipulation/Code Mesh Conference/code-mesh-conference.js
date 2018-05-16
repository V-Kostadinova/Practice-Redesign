function renderHeaderInHTML(){
    let logoCodeMesh=$('<span>');
        logoCodeMesh
            .attr('id', 'logo')
            .text('Code Mesh')
            .appendTo('nav');

    //List
    let navList=$('<ul>');
        navList
            .appendTo('nav');

    let listItemOne=$('<li>');
        listItemOne
            .addClass('list-item')
            .appendTo(navList);

    let listItemTwo=$('<li>');
        listItemTwo
            .addClass('list-item')
            .appendTo(navList);

    let listItemThree=$('<li>');
        listItemThree
            .addClass('list-item')
            .appendTo(navList);

    let listItemFour=$('<li>');
        listItemFour
            .addClass('list-item')
            .appendTo(navList)

    let hrefOne=$('<a>');
        hrefOne
            .attr('href', '#')
            .text('speakers')
            .appendTo(listItemOne);

    let hrefTwo=$('<a>');
        hrefTwo
            .attr('href', '#')
            .text('schedule')
            .appendTo(listItemTwo);

    let hrefThree=$('<a>');
        hrefThree
            .attr('href', '#')
            .text('workshops')
            .appendTo(listItemThree);

    let hrefFour=$('<a>');
        hrefFour
            .attr('href', '#')
            .text('login')
            .appendTo(listItemFour);

    //Header Articles
    $('#center')
        .append('<p>The urge for coding innovations is the same as the urge to go on living</p>')
        .append(' <i class="fa fa-play-circle fa-4x"></i>')

    //Header Section
    let articleOne=$('<article>');
        articleOne
            .append('<i class="fa fa-code fa-2x" aria-hidden="true"></i>')
            .append('<p>CodeMesh returns to Sofia 11th вЂ“ 12th May, 2017.\
                     We promise you the very best developer content and awesome experiences.</p>')
            .appendTo('.header-section');

    let articleTwo=$('<article>');
        articleTwo
            .append('<i class="fa fa-area-chart fa-2x" aria-hidden="true"></i>')
            .append('<p>This year, CodeMesh is welcoming top speakers not only from the country,\
                     but Europe and even USA!</p>')
            .appendTo('.header-section');

    let articleThree=$('<article>');
        articleThree
            .append('<i class="fa fa-diamond fa-2x" aria-hidden="true"></i>')
            .append('<p>We\'re also going to have a much bigger and\
                     cooler networking event after the conference!</p>')
            .appendTo('.header-section');

    let articleFour=$('<article>');
        articleFour
            .append('<i class="fa fa-cube fa-2x" aria-hidden="true"></i>')
            .append('<p>Join us and immerse yourself in all the different tracks and\
                     topics available to out attendees!</p>')
            .appendTo('.header-section');
}

function renderMainInHTML(){
    //Left Section
    let leftInfo=$('<p>');
        leftInfo
            .text('"I think it\'s really important to think outside of the box when you\'re coding"')
            .appendTo('.left');

    let quoteAuthor=$('<span>');
        quoteAuthor
            .text('words by marc newson')
            .addClass('MarcNewson')
            .appendTo('.left');

    //Center Section
    let centerInfo=$('<p>')
        centerInfo
            .text('When youвЂ™re busy leading a team, coding and maintaining\
                standards, how do you find the time to stay ahead of\
                new technologies and develop yourself as a technical lead?\
                Software continues to transform the world in remarkable\
                ways and developers are at the center of it. At CodeMesh 2017\
                we invite you to join us in Sofia to learn about\
                latest new technologies and exciting plans on the horizon.\
                As always, CodeMesh is filled with strong technical sessions\
                as well as opportunities to meet and learn from others in\
                the industry. WeвЂ™ll make sure the schedule is filled with\
                solid content, and will strive to deliver some fun surprises along the way.')
            .appendTo('.center');

    let bottomInfo=$('<span>')
        bottomInfo
            .addClass('bottom')
            .text('You can code and create, and build the most wonderful place in the world.')
            .appendTo('.center');

    //Image
    let image=$('<img>');
        image   
            .attr('id', 'rigth-img')
            .attr('src', 'intro-img.png')
            .appendTo('#image')

    let orange=$('<div>');
        orange
            .attr('id', 'orange')
            .appendTo('#image')

    //Schedule Section
    let scheduleTitle=$('<h2>');
        scheduleTitle
            .text('Schedule: Grab some coffee & donuts and take a seat')
            .appendTo('.schedule');

    //Option One
    let optionOne=$('<div>');
        optionOne
            .addClass('registration')
            .appendTo('.schedule');

    let iconOne=$('<i>');
        iconOne
            .addClass('fa fa-address-book-o orange-icon')
            .attr('aria-hidden', 'true')
            .appendTo(optionOne);

    let spanOne=$('<span>');
        spanOne
            .addClass('time')
            .text('09:00 - 10:00 AM')
            .appendTo(optionOne);

    let paragraphOne=$('<p>');
        paragraphOne
            .text('registration')
            .appendTo(optionOne);

    //Option Two
    let optionTwo=$('<div>');
        optionTwo
            .addClass('mic')
            .appendTo('.schedule');

    let iconTwo=$('<i>');
        iconTwo
            .addClass('fa fa-microphone orange-icon')
            .attr('aria-hidden', 'true')
            .appendTo(optionTwo);

    let spanTwo=$('<span>');
        spanTwo
            .addClass('time')
            .text('11:00 - 12:00 AM')
            .appendTo(optionTwo);

    let paragraphTwo=$('<p>');
        paragraphTwo
            .text('the future of creative computing')
            .appendTo(optionTwo);

    //Option Three
    let optionThree=$('<div>');
        optionThree
            .addClass('lunch')
            .appendTo('.schedule');

    let iconThree=$('<i>');
        iconThree
            .addClass('fa fa-cutlery orange-icon')
            .attr('aria-hidden', 'true')
            .appendTo(optionThree);

    let spanThree=$('<span>');
        spanThree
            .addClass('time')
            .text('12:00 - 13:00 PM')
            .appendTo(optionThree);

    let paragraphThree=$('<p>');
        paragraphThree
            .text('lunch break')
            .appendTo(optionThree);

    //Position right Section
    //Option Four
    let optionFour=$('<div>');
        optionFour
            .addClass('linux')
            .appendTo('.position-right');

    let iconFour=$('<i>');
        iconFour
            .addClass('fa fa-microphone orange-icon')
            .attr('aria-hidden', 'true')
            .appendTo(optionFour);

    let spanFour=$('<span>');
        spanFour
            .addClass('time')
            .text('13:00 - 14:00 AM')
            .appendTo(optionFour);

    let paragraphFour=$('<p>');
        paragraphFour
            .text('linux for developers')
            .appendTo(optionFour);

    //Option Five
    let optionFive=$('<div>');
        optionFive
            .addClass('wonderful')
            .appendTo('.position-right');

    let iconFive=$('<i>');
        iconFive
            .addClass('fa fa-microphone orange-icon')
            .attr('aria-hidden', 'true')
            .appendTo(optionFive);

    let spanFive=$('<span>');
        spanFive
            .addClass('time')
            .text('14:00 - 15:00 AM')
            .appendTo(optionFive);

    let paragraphFive=$('<p>');
        paragraphFive
            .text('the wonderful world of IOT')
            .appendTo(optionFive);

    //Option Six
    let optionSix=$('<div>');
        optionSix
            .addClass('do-we-need')
            .appendTo('.position-right');

    let iconSix=$('<i>');
        iconSix
            .addClass('fa fa-microphone orange-icon')
            .attr('aria-hidden', 'true')
            .appendTo(optionSix);

    let spanSix=$('<span>');
        spanSix
            .addClass('time')
            .text('15:00 - 16:00 AM')
            .appendTo(optionSix);

    let paragraphSix=$('<p>');
        paragraphSix
            .text('do we need to read coding books?')
            .appendTo(optionSix);
}
renderHeaderInHTML();
renderMainInHTML();
