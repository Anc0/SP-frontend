/**
 * Created by Andraz on 20.11.2015.
 */

function showStudentList(grade) {
    var outputStudents = document.getElementById("grades-student-list");
    var outputSubjects = document.getElementById("grades-subject-list");
    if (grade == 6) {
        outputStudents.innerHTML = "<table class=\"table table-striped table\"><thead><tr><th>Ime</th><th>Priimek</th></tr></thead><tbody><tr><td>Neža</td><td>Avbelj</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Vlatko</td><td>Čančar</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Gregor</td><td>Horvat</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Alja</td><td>Koren</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Miha</td><td>Lapornik</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Miša</td><td>Marinček</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Blaž</td><td>Mesiček</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Mitja</td><td>Nikolič</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Luka</td><td>Rupnik</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Sergeja</td><td>Stefanišin</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Saša</td><td>Zagorac</td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Ana</td><td>Zrimšek</td><td><button class=\"btn btn-primary btn-default\" onclick=\"showSubjectList(12)\">Vnesi oceno</button></td></tr></tbody></table>";
        outputSubjects.innerHTML = "<p>Izberite dijaka.</p>";
    }
    else {
        outputStudents.innerHTML = "";
        outputSubjects.innerHTML = "<p>Izberite letnik in oddelek.</p>";
    }
}

function showSubjectList(student) {
    var output = document.getElementById("grades-subject-list");
    if(student == 12) {
        output.innerHTML = "<h4>Ana Zrimšek</h4><table class=\"table table-striped table\"><thead><tr><th><h4>Predmet</h4></th></tr></thead><tbody><tr><td>Angleščina</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Fizika</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Geografija</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Kemija</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Matematika</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Slovenščina</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr></tbody></table>";
    }
}

function showGradesList(student) {
    var output = document.getElementById("grades-list");
    if(student == 12) {
        output.innerHTML = "<table id=\"getgrades-table\" class=\"table table-striped\"><thead><tr><th>Predmet</th><th>Prvi semester</th><th>Drugi semester</th><th>Povprečje</th></tr></thead><tbody><tr class=\"success\"><td>Angleščina</td><td>4, 3, 2</td><td>1, 3, 2</td><td>2,50</td></tr><tr class=\"success\"><td>Fizika</td><td>2, 1, 5</td><td>3, 5, 2</td><td>3,00</td></tr><tr class=\"danger\"><td>Geografija</td><td>1, 1, 2</td><td>2, 3, 1</td><td>1,67</td></tr><tr class=\"success\"><td>Kemija</td><td>5, 2, 2</td><td>2, 5, 5</td><td>3,50</td></tr><tr class=\"success\"><td>Matematika</td><td>5, 3, 3</td><td>4, 2, 3</td><td>3,33</td></tr><tr class=\"success\"><td>Slovenščina</td><td>4, 3, 2</td><td>1, 3, 2</td><td>2,50</td></tr></tbody></table>";
    }
    else {
        output.innerHTML = "Dijak ne obstaja.";
    }
}

function showStudentListReport() {
    var output = document.getElementById("report-student-list");
    output.innerHTML = "<table class=\"table table-striped table\"><thead><tr><th>Odsoten</th><th>Ime</th><th>Priimek</th></tr></thead><tbody><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Neža</td><td>Avbelj</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Vlatko</td><td>Čančar</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Gregor</td><td>Horvat</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Alja</td><td>Koren</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Miha</td><td>Lapornik</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Miša</td><td>Marinček</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Blaž</td><td>Mesiček</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Mitja</td><td>Nikolič</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Luka</td><td>Rupnik</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Sergeja</td><td>Stefanišin</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"\"></label></div></td><td>Saša</td><td>Zagorac</td></tr><tr><td><div class=\"checkbox\"><label><input type=\"checkbox\" value=\"12\"></label></div></td><td>Ana</td><td>Zrimšek</td></tr></tbody></table>";
}

function validateReportData() {
    var output = document.getElementById("report-validity");
    var sel1 = document.getElementById("select1");
    var sel2 = document.getElementById("select2");
    var sel3 = document.getElementById("select3");
    var sel4 = document.getElementById("select4");
    var date = document.getElementById("datepicker");
    if(sel1.selectedIndex == 0) {
        output.innerHTML = "<div class=\"alert alert-danger\"><strong>Pozor,</strong> niste izbrali letnika.</div>";
    }
    else if(sel2.selectedIndex == 0) {
        output.innerHTML = "<div class=\"alert alert-danger\"><strong>Pozor,</strong> niste izbrali oddelka.</div>";
    }
    else if(sel3.selectedIndex == 0) {
        output.innerHTML = "<div class=\"alert alert-danger\"><strong>Pozor,</strong> niste izbrali predmeta.</div>";
    }
    else if(sel4.selectedIndex == 0) {
        output.innerHTML = "<div class=\"alert alert-danger\"><strong>Pozor,</strong> niste izbrali učilnice.</div>";
    }
    else if(date.value === "") {
        output.innerHTML = "<div class=\"alert alert-danger\"><strong>Pozor,</strong> niste izbrali datuma.</div>";
    }
    else if(comment.value === "") {
        alert("Oddali boste poročilo brez opisa predelane snovi.");
        output.innerHTML = "<div class=\"alert alert-success\">Uspešno ste oddali poročilo.</div>";
    }
    else {
        output.innerHTML = "<div class=\"alert alert-success\">Uspešno ste oddali poročilo.</div>";
    }
}