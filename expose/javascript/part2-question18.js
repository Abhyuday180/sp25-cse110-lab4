function currentTime() 
{
    const date = new Date();
    console.log(date.toLocaleTimeString());
}
setInterval(currentTime, 1000);
