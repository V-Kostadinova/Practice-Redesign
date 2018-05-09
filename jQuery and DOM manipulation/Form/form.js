function renderFormInHTML(){
    //Title
    let title=$("<h1>");
        title
            .text("Basic calculated fields sample.")
            .appendTo("#header-ctr");

    let emptyLine=$('<hr>');
        emptyLine
            .appendTo('#header-ctr');
    
    //Form
    //First Label
    let firstLabel=$('<label>');
        firstLabel
            .addClass('one')
            .appendTo("form");

    let firstSpan=$('<span>');
        firstSpan
            .text('Distance (mi) *')
            .appendTo(firstLabel);

    let firstInput=$('<input>');
        firstInput
            .attr('type', 'text')
            .attr('placeholder', 'Enter Distance')
            .attr("required", "true")
            .appendTo(firstLabel);

    //Second Label
    let secondLabel=$('<label>');
        secondLabel
            .addClass('two')
            .appendTo('form');

    let secondSpan=$('<span>');
        secondSpan
            .text('Weight (lb)')
            .appendTo(secondLabel);

    let secondInput=$('<input>');
        secondInput
            .attr('type', 'text')
            .attr('placeholder', 'Enter Weight')
            .attr("required", true)
            .appendTo(secondLabel);
    
    let fragileSpan=$('<span>');
        fragileSpan
            .addClass('fragile')
            .text('Fragile')
            .appendTo(secondLabel);
            
    let selectMenu=$('<select>');
        selectMenu
            .attr('name', 'fragile-menu')
            .appendTo(secondLabel);

    let optionOne=$('<option>');
        optionOne
            .val('Value 0')
            .attr( "disabled", true)
            .attr('selected', true)
            .text('Select Something')
            .appendTo(selectMenu);

    let optionTwo=$('<option>');
        optionTwo
            .val('Value 1')
            .text('No')
            .appendTo(selectMenu);

    let optionThree=$('<option>');
        optionThree
            .val('Value 2')
            .text('Yes')
            .appendTo(selectMenu);

    //Third Label
    let thirdLabel=$('<label>');
        thirdLabel
            .addClass('three')
            .appendTo('form');

    let thirdSpan=$('<span>');
        thirdSpan
            .text('Length (in)')
            .appendTo(thirdLabel);

    let spanHeight=$('<span>')
        spanHeight
        .addClass('height')
            .text('height (in)')
            .appendTo(thirdLabel);

    let spanWidth=$('<span>')
        spanWidth
        .addClass('width')
            .text('width (in)')
            .appendTo(thirdLabel);

    let inputOne=$('<input>');
        inputOne
            .attr('type', 'number')
            .attr('placeholder', 'Lenght')
            .appendTo(thirdLabel);

    let inputTwo=$('<input>');
        inputTwo
            .attr('type', 'number')
            .attr('placeholder', 'Height')
            .appendTo(thirdLabel);

    let inputThree=$('<input>');
        inputThree
            .attr('type', 'number')
            .attr('placeholder', '10')
            .attr('min', '1')
            .appendTo(thirdLabel);

    //Fourth Label
    let fourthLabel=$('<label>')
        fourthLabel
            .addClass('four')
            .appendTo('form');

    let titleService=$('<h3>');
        titleService
            .text('Extra services:')
            .appendTo(fourthLabel)

    let paraOne=$('<p>');
        paraOne
            .text('Insurance')
            .appendTo(fourthLabel);

    let inputParaOne=$('<input>');
        inputParaOne
            .attr('type', 'checkbox')
            .prependTo(paraOne);

    let paraTwo=$('<p>');
        paraTwo
            .text('Express Delivery')
            .appendTo(fourthLabel);
    
    let inputParaTwo=$('<input>');
        inputParaTwo
            .attr('type', 'checkbox')
            .prependTo(paraTwo);

    //Last Label
    let lastLabel=$('<label>');
        lastLabel
            .addClass('price')
            .appendTo('form');

    let lastSpan=$('<span>');
        lastSpan
            .text('total:')
            .appendTo(lastLabel);
        
    let pricePara=$('<p>');
        pricePara
            .addClass('total-price')
            .text('$00.00')
            .appendTo(lastLabel);

    let readyPara=$('<p>');
        readyPara
            .addClass('submit')
            .text('I am Ready')
            .appendTo('form');
}

$('#after-success').addClass('hidden');
    
    //Good Job! - Hidden section
function renderSuccessMessage(){
    
    let sectionTitle=$('<h1>');
        sectionTitle
            .text('Good Job!')
            .appendTo('#after-success');

    let sectionImg=$('<img>');
        sectionImg
            .attr('src', 'register_success.png')
            .attr('alt', 'success')
            .appendTo('#after-success')
}

    //Click Event
    let hideDiv=$('#header-ctr');
    let hideForm=$('form')
    let showSection=$('#after-success');

    function clickEvent(){
        $('#play').on('click',function () {
            $('#play').addClass('hidden');
            $('#pause').removeClass('hidden');
            $('.result').val('Music Playing');
    
        })
    }
    
renderFormInHTML()
renderSuccessMessage()
clickEvent()
