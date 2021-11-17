function traerInformacion(){
    $.ajax({
        url:"https://g7db3d177960cd8-db202111141558.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/library/library",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
}

function pintarRespuesta(items){
    let myTable ="<center><table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].target+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button class='btn_borrar' onclick='borrarElemento("+items[i].id+")'><i class='fas fa-trash'></i> Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</center></table>";
    $("#resultado").append(myTable);
}


function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        target:$("#target").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7db3d177960cd8-db202111141558.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/library/library",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("SE HA GUARDADO EL DATO")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        target:$("#target").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData)
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7db3d177960cd8-db202111141558.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/library/library",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("SE HAN ACTUALIZADO LOS DATOS")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7db3d177960cd8-db202111141558.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/library/library",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("SE HA ELIMINADO CORRECTAMENTE")
        }
    });
}