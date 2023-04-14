function ejm1()
{
    var a =Number(document.getElementById('v1').value);
    var r;
    if(a >=17)
    {
        r ="A";
    }
    else if(a >= 14 && a<17)
    {
        r ="B";
    }
    else if(a >= 12 && a<14)
    {
        r ="C";
    }
    else if(a < 12)
    {
        r ="D";
    }
    document.getElementById("res").value=r;
}

function ejm2()
{
    var sbase =600;
    var n = Number(document.getElementById('v1').value);
    var venta =Number(document.getElementById('v2').value);
    
    bono = n * 50;

    com = venta * 0.075;
    com = Math.round(com * 100.0) / 100.0;

    sbruto = sbase + com + bono;
    sbruto = Math.round(sbruto * 100.0) / 100.0;
    
    desc = sbruto * 0.11;
    desc = Math.round(desc * 100.0) / 100.0;

    sneto = sbruto - desc;
    sneto = Math.round(sneto * 100.0) / 100.0;

    document.getElementById("res1").value=com;
    document.getElementById("res2").value=bono;
    document.getElementById("res3").value=sbruto;
    document.getElementById("res4").value=desc;
    document.getElementById("res5").value=sneto;

}


function ejm3()
{
    var edad =Number(document.getElementById('v1').value);
    
    com = 3 * edad + 7;

    document.getElementById("res").value=com;

}

function ejm4()
{
    var c = Number(document.getElementById('v1').value);
    
    f = ((9 * c)/5) + 32;
    f = Math.round(f * 100.0) / 100.0;
    
    r = c + 460;
    r = Math.round(r * 100.0) / 100.0;
    
    k = r - 187;
    k = Math.round(k * 100.0) / 100.0;

    document.getElementById("res1").value=f;
    document.getElementById("res2").value=r;
    document.getElementById("res3").value=k;
}
