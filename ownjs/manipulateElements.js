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
    var outputSubjects = document.getElementById("grades-subject-list");
    if(student == 12) {
        outputSubjects.innerHTML = "<h4>Ana Zrimšek</h4><table class=\"table table-striped table\"><thead><tr><th><h4>Predmet</h4></th></tr></thead><tbody><tr><td>Angleščina</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Fizika</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Geografija</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Kemija</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Matematika</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr><tr><td>Slovenščina</td><td><select class=\"form-control grades-input-select\"><option>Izberite oceno...</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><button class=\"btn btn-primary btn-default\">Vnesi oceno</button></td></tr></tbody></table>";
    }
}