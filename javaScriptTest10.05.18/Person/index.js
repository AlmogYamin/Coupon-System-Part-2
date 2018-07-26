function createPerson()
{
    //var name = document.getElementById("txt_name").value;
    //var age = document.getElementById("txt_age").value;

    var name = $('#txt_name').val();
    var age = $('#txt_age').val();
    var p = new Person(name, age);
    console.log(p);
    $('#div1').slideUp(1000).slideDown(1000);
}