const insert=document.querySelector('#insert')

window.addEventListener('click',(e)=>{
    innerHTML=`
        <div class="color">
        <tables>
        <tr>
            <th> key </th>      
            <th> keycode </th>      
            <th> code </th>
        </tr>
        <tr>
            <td>${e.key===" "?'space' : e.key}</td>
            <td>${e.keycode}</td>
            <td>${e.code}</td>
        </tr>     
        </tables>
        </div>

    `
});