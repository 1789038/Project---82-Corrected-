var mouseEvent="empty";
var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
var radius="empty";
var color="empty";
var width="empty";
canvas.addEventListener('mousedown',my_mousedown);
function my_mousedown(e){
    radius=document.getElementById("radius").value;
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent="mousedown";


}
canvas.addEventListener('mouseup', my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener('mouseleave', my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener('mousemove', my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    

        console.log("color:"+ color);
        console.log("radius:"+ radius);
        console.log("width:"+ width);
        console.log("Last position of x and y coordinates=");
        console.log("x="+ last_position_of_x +"y="+ last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y)
        
        console.log("Current position of x and y coordinates=");
        console.log("x="+ current_position_of_mouse_x + "y="+ current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
