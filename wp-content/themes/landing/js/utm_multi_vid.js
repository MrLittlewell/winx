multi="перегородочные|перегородки;Перегородочные блоки\n\
изготовление;Изготовление корпусной мебели и кухонь в Москве и Московской области.\n\
создание;Создание корпусной мебели и кухонь в Москве и Московской области.";

$(function() {
  //формируем массив с utm метками
  function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
  }

  utm=[];
  $.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){
    utm[v]=getURLParameter(v) || $.cookie(v);
    $.cookie(v, utm[v], { expires: 365, path: '/' });
  });

  // MULTI
  var ab_title = "default";
  if(utm['utm_term']){
    multi=multi.split('\n');
    multi=$.map(multi,function(v, i){
      arr1=v.split(';');
      r=new RegExp(arr1[0]);
      return {reg: r,val: arr1[1]};
    });
    multi=$.grep(multi,function(v,i){
      return utm['utm_term'].search(v.reg) > -1
    });
    if(multi[0]){
      ab_title=multi[0].val;
      var target = $('.multi'); //элемент для подмены
      target.html(ab_title); 
    }
  }
});
