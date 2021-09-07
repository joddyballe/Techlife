
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Skor</h1>";
    gameOverHTML += "<h2 id='score'> Skor anda adalah: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Kata Computare diambil dari bahasa?", ["Eropa", "Inggris", "Jerman", "Yunani"], "Yunani"),
    new Question("Manakah dari teknologi ini yang tidak memanfaatkan gelombang elektromagnetik?", ["Radio","Televisi","Komputer","Ponsel"], "Komputer"),
    new Question("Munculmya teknologi SMS diawali oleh ponsel.", ["1G","2G","3G","4G"], "2G"),
    new Question("Komputer ENIAC merupakan komputer generasi ke?", ["Pertama","Kedua","Ketiga","Keempat"], "Kedua"),
    new Question("Cyan, magenta, kuning, hitam adalah warna", ["CMYK","grayscale","Hitam&Putih","RGB"], "CMYK"),
    new Question("Suatu jaringan komputer yang menghubungkan suatu komputer dengan komputer lain dengan jarak yang terbatas disebut dengan?", ["Lan","Wan","Man","Can"], "Lan"),
    new Question("Pihak yang meminta layanan disebut?", ["Server", "Komputer","Client","Bus"], "Client"),
    new Question("Fasilitas sejumlah program yang dirancang untuk menyederhanakan proses operasi dari suatu program aplikasi adalah penegertian dari…", ["Application system", "Operating system", "Software system", "Processing system"], "Operating system"),
    new Question("Banyak digunakan pada peralatan elektronik video dan musik sebagai pengganti pitacassette adalah", ["Optical disk", "Micro disk", "Magnetic disk", "Elektronik disk"], "Optical disk"),
    new Question("Dibawah ini merupakan penggolongan komputer berdasarkan data yang diolah, kecuali…", ["Komputer Analog", "Komputer Mikro", "Komputer Digital", "Komputer Hybrit"], "Komputer Mikro"),
    new Question("Dibawah ini merupakan alat input langsung berupa poiting device kecuali…", ["Touch Screen", "Light Pen", "Scan", "Trackball"], "Scan"),
    new Question("Dibawah ini yang tidak termasuk dalam kategori Language Software adalah.", ["Assembler", "Compiler", "Nterpreter", "FLQ"], "FLQ"),
    new Question("Tahap proses memasukkan data kedalam komputer", ["Processing", "Input", "Output", "Organination"], "Input"),
    new Question("Berikut yang bukan merupakan sistem operasi", ["Windows XP", "Windows ME", "LINUX", "Microsoft Access"], "Microsoft Acces"),
    new Question("Langkah terakhir pada saat mematikan komputer dengan sistem windows 98 adalah", ["Log Off", "Shut Down", "Turn Off", "Restart"], "Log Off"),
    new Question("Bagian prinsip kerja komputer adalah terdiri dari bagian", ["Input-output-proses", "Proses-input-output", "Input-Proses-output", "Output-input-proses"], "Input-proses-output"),
    new Question("Komputer dapat melakukan operasi paling cepat dengan menggunakan satuan", ["Milisecond", "Microsecond", "Picosecond", "Nanosecond"], "Picosecond"),
    new Question("Satuan pada memori komputer dinyatakan dalam", ["Bit", "Byte", "Second", "Meter"], "Byte"),
    new Question("Dibawah ini yang termasuk sebagai perangkat masukan adalah", ["Keyboard, Monitor, Mouse", "Display, Barcode, VGA", "Joystick, Keyboard, Speaker", "Keyboard, Mouse, Barcode"], "Keyboard, Mouse, Barcode"),
    new Question("Berikut ini yang termasuk ke dalam 3 tahapan dasar pengolah data adalah", ["Input, proses, output", "input, ALU, memori", "ALU, output, input", "input, proses, memori"], "input, proses, memori") 
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





