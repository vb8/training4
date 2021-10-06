let ddd = "jovially";
let oneword;
let count3 = 0;
var words3 = {
  workaround: "обходой_путь",
  retrieve: "извлекать",
  spared: "пощадил",
  jovially: 'весело ',
  windfall: "неожиданная_удача",
  grossed: "соблазненный",
  occasional: "случайный",
  grocer: "бакалейщик",
  dug_up: "выкопал",
  departure: "отъезд",
  bogus: "фальшивка",
  approach: "подход",
  fastening: "крепление",
  fuming: "дымящийся",
  spluttered_out: "выплеснулся",
  though: "хотя",
  supervise: "контролировать",
  either: "любой",
  unremitting: "упорный",
  exasperation: "раздражение",
  obstacles: "  препятствие ",
  intruders: " нежеланный",
  appraisingly: "оценивающе",
  salient: "заметный",
  overgrown: "заросший",
  tumbledown: "повалить",
  gutters: "желоб",
  unkempt: "неопрятный",
  appearance: "внешний+вид",
  crooning: "пение",
  discernible: "заметный",
  twirling: "кружение",
  pervading: "всепроникающий",
  afflicted: " пораженный ",
  endurance: "выносливость",
  goad: "подстрекать",
  nostrils: " ноздри",
  discernible:"    различимый ",
  elaborately:"    старательно ",
  perceived:"    профилактика ",
  cruelty:" жестокость    ",
  prejudicial:"пагубный     ",
  faded:"    блеклый ",
  soiled:"   испачканный  ",
  cushion:"    подушка ",
  manfully:"   мужественно  ",
};
//document.getElementById("spared").innerText = "777"


//myf1 = { myprop1: "444" };
function myf2(words1) {
  /*
  document.getElementById("first").innerHTML = 12333;
  var d = document.createElement("div");
  d.id = 333;
  let count = 0;
  while (count < 18) {
    console.log(count);
    count++;
    var d = document.createElement("div");
    d.id = count;
    document.getElementById("spared").appendChild(d);
    document.getElementById(count).innerHTML = count;
  }*/
  var words1 = {
    workaround: "обходой_путь",
    retrive: "извлекать",
    spared: "пощадил",
    jovially: '33decend',
    windfall: 1,
    grossed: 1,
    occasional: 1,
    grocer: 1,
    dug_up: 555551,
    myprop1: "retrive",
    spared: 'decend',
    jovially: '33decend',
    windfall: 1,
    grossed: 1,
    occasional: 1,
    grocer2: 1,
    dug_up2: 555551,
    departure: "отъезд",
    bogus: "фальшивка",
    approach: "подход",
    fastening: "крепление",
    fuming: "дымящийся",
    spluttered_out: "выплеснулся",
    though: "хотя",
    supervise: "контролировать",
    either: "любой",
    unremitting: "упорный",
    exasperation: "раздражение",
    obstacles: "  препятсвие ",
    intruders: " нежеланный",
    appraisingly: "оценивающе",
    salient: "заметный",
    overgrown: "заросший",
    tumbledown: "повалить",
    gutters: "желоб",
    unkempt: "неопрятный",
    appearance: "внешний+вид",
    crooning: "пение",
    discernible: "заметный",
    twirling: "кружение",
    pervading: "всепроникающий",
    afflicted: " пораженный ",
    nostrils: " ноздри",
   
  };
  var my7; var count2 = 0;
  for (var stock in words1) {
    my7 += " " + stock;
    var d2 = document.createElement("div");
    d2.id = count2;
    d2.className = "grid-item";
    document.getElementById("spared").appendChild(d2);
    document.getElementById(count2).innerHTML = stock;
    count2 = count2 + 1;
  }
  return my7;
}

var d = document.createElement('div');
d.className = 'div_one';
document.body.appendChild(d);

function slaidmy() {
  count3 = count3 + 1;
  oneword = Object.keys(words3);
  document.getElementById("catch").innerHTML = oneword[count3];

}
function slaidmytranslate() {

  oneword = Object.keys(words3);
  slovo = oneword[count3]
  document.getElementById("catch").innerHTML = slovo + "  " + words3[slovo];
  count3 = count3 + 1;
}

function addeng() {

  oneword = Object.keys(words3);
  slovo = oneword[count3]
  document.getElementById("catch").innerHTML = slovo + "   " + words3[slovo];
}

function slaidmy() {
  count3 = count3 + 1;
  oneword = Object.keys(words3);
  document.getElementById("catch").innerHTML = oneword[count3];

}
function backmy() {
  count3 = count3 - 1;
  oneword = Object.keys(words3);
  document.getElementById("catch").innerHTML = oneword[count3];

}